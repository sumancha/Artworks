using ArtImageManipulation.API;
using ArtImageManipulation.API.Repository;
using ArtImageManipulation.API.Services;
using ImageManipulation.API.Repository;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Serilog;
using System.Net;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ArtImageManipulationConnectionString"),
        providerOptions => providerOptions.EnableRetryOnFailure()
        );
    // enable sensetive datalogging and detailerror only for dev environment
    if (builder.Environment.IsDevelopment())
    { 
        options.EnableSensitiveDataLogging().EnableDetailedErrors(); 
    }
});
builder.Services.AddMemoryCache(); // Register IMemoryCache
builder.Services.AddScoped<IArtImageRepository, ArtImageRepoImps>();

builder.Services.AddScoped<IMediumrepository, MediumRepoImps>();
builder.Services.AddScoped<IFileService, FileService>();
//builder.Services.AddTransient<IFileService, FileService>();
//builder.Services.AddCors(options =>
//{
//    options.AddDefaultPolicy(
//        policy =>
//        {
//            policy.WithOrigins("*").AllowAnyMethod().AllowAnyHeader(); ;
//        });
//});
var app = builder.Build();
app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseExceptionHandler(
    errorApp =>
    {
        errorApp.Run(async context =>
        {
            var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerPathFeature>();
            var exception = exceptionHandlerPathFeature?.Error;

            Log.Error(exception, "Unhandled exception occurred. {ExceptionDetails}", exception?.ToString());
            Console.WriteLine(exception?.ToString());
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            await context.Response.WriteAsync("An unexpected error occurred. Please try again later.");
        });
    }
    );
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseStaticFiles(new StaticFileOptions
{
    //TODO suman change folder
    FileProvider = new PhysicalFileProvider(
           Path.Combine(builder.Environment.ContentRootPath, "Uploads")),
    RequestPath = "/Resources"
});

app.UseAuthorization();

app.MapControllers();

app.Run();

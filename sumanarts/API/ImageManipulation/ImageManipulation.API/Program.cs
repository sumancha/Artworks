
using ImageManipulation.API.Data;
using ImageManipulation.API.Repository;
using ImageManipulation.API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Serilog;
using System.Net;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("AIMConnectionString"),
        providerOptions => providerOptions.EnableRetryOnFailure()
        );


    // enable sensetive datalogging and detailerror only for dev environment
    if (builder.Environment.IsDevelopment())
    { 
        options.EnableSensitiveDataLogging().EnableDetailedErrors(); 
    }
});

//builder.Services.AddDbContext<ArtAuthDbContext>(options =>
//options.UseSqlServer(builder.Configuration.GetConnectionString("ArtInfoAuthConnectString"),
//providerOptions => providerOptions.EnableRetryOnFailure())
//);



builder.Services.AddMemoryCache(); // Register IMemoryCache
builder.Services.AddScoped<IArtInfoRepository, ArtInfoRepoImps>();

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

//builder.Services.AddIdentity<IdentityUser , IdentityRole  >()
//    //.AddRoles<IdentityRole>()
//    //.AddTokenProvider<DataProtectorTokenProvider<IdentityUser>>("ArtImage")
//    .AddEntityFrameworkStores<ArtAuthDbContext>()
//    .AddDefaultTokenProviders();

builder.Services.Configure<IdentityOptions>(options =>
{
    options.Password.RequireDigit = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 6;
    options.Password.RequiredUniqueChars = 1;
});

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
});

//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//    .AddJwtBearer(options =>
//    options.TokenValidationParameters = new TokenValidationParameters
//    {
//        ValidateIssuer = true,
//        ValidateAudience = true,
//        ValidateLifetime = true,
//        ValidateIssuerSigningKey = true,
//        ValidIssuer = builder.Configuration["Jwt:Issuer"],
//        ValidAudience = builder.Configuration["Jwt:Audience"],
//        IssuerSigningKey = new SymmetricSecurityKey(
//            Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
//    });

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

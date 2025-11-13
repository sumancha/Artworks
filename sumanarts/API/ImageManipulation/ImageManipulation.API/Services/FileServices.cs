using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Formatters;
// NOTE: for using above namespace include this line in csproj of this class library : <FrameworkReference Include="Microsoft.AspNetCore.App" />


namespace ArtImageManipulation.API.Services
{
    public interface IFileService
    {
        Task<string> SaveFileAsync(IFormFile artimageFile, string[] allowedFileExtensions,string mediumType);
        void DeleteFile(string fileNameWithExtension);
    }

    public class FileService(IWebHostEnvironment environment) : IFileService
    {

        public async Task<string> SaveFileAsync(IFormFile artimageFile, string[] allowedFileExtensions, string mediumType)
        {
            if (artimageFile == null)
            {
                throw new ArgumentNullException(nameof(artimageFile));
            }

            var contentPath = environment.ContentRootPath;

            //TODO suman change folder
            //var folderstructure = Path.Combine(  "Uploads", mediumType);
            //var path = Path.Combine(contentPath, folderstructure);

            var path = Path.Combine(contentPath, "Uploads");
            // path = "c://projects/ArtImageManipulation.Ap/uploads" ,not exactly, but something like that

            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            // Check the allowed extenstions
            var ext = Path.GetExtension(artimageFile.FileName).ToLower();
            if (!allowedFileExtensions.Contains(ext))
            {
                throw new ArgumentException($"Only {string.Join(",", allowedFileExtensions)} are allowed.");
            }

            // generate a unique filename
            var fileName = $"{Guid.NewGuid().ToString()}{ext}";
            var fileNameWithPath = Path.Combine(path, fileName);
            using var stream = new FileStream(fileNameWithPath, FileMode.Create);
            await artimageFile.CopyToAsync(stream);
            //returnpath = Path.Combine(returnpath, fileName);
            return fileName;
            //return returnpath;
        }


        public void DeleteFile(string fileNameWithExtension)
        {
            if (string.IsNullOrEmpty(fileNameWithExtension))
            {
                throw new ArgumentNullException(nameof(fileNameWithExtension));
            }
            var contentPath = environment.ContentRootPath;
            //TODO suman change folder
            var path = Path.Combine(contentPath, $"Uploads", fileNameWithExtension);
            //var path = Path.Combine(contentPath, $"Uploads");
            if (!File.Exists(path))
            {
                throw new FileNotFoundException($"Invalid file path");
            }
            File.Delete(path);
        }
    }
}
using ArtImageManipulation.API.DTO;
using ArtImageManipulation.API.Entity;
using ArtImageManipulation.API.Repository;
using ArtImageManipulation.API.Services;
using ImageManipulation.API.Repository;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ImageManipulation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtImageController : ControllerBase
    {
        private readonly IArtImageRepository artImageRepository;
        private readonly IMediumrepository mediumrepository;
        private readonly IFileService fileService;
        private readonly ILogger<ArtImageController> logger;

        public ArtImageController(IArtImageRepository artImageRepository, IMediumrepository mediumrepository, IFileService _fileService, ILogger<ArtImageController> logger)
        {
            this.artImageRepository = artImageRepository;
            this.mediumrepository = mediumrepository;
            this.fileService = _fileService;
            this.logger = logger;
        }



        // GET: api/<ArtImageController>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
          var artImages = await artImageRepository.GetArtImagesAsync();
            return Ok(artImages);
        }

        // GET api/<ArtImageController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var existingArt = await artImageRepository.FindArtImageByIdAsync(id);
                if (existingArt == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, $"ArtWork with id: {id} does not found");
                }
                return Ok(existingArt);

            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // POST api/<ArtImageController>
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> CreateArtwork([FromForm] AddArtImageDTO AddArtImage)
        {
            try
            {
                var medium= await mediumrepository.FindMediumByIdAsync(AddArtImage.MediumId);
                if(medium == null) { return StatusCode(StatusCodes.Status404NotFound, $"Medium with id: {AddArtImage.MediumId} does not found"); }

                if (AddArtImage.ArtImageFile?.Length > 1 * 1024 * 1024)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, "File size should not exceed 1 MB");
                }
                string[] allowedFileExtentions = [".jpg", ".jpeg", ".png", ".PNG"];
                string createdImageName = await fileService.SaveFileAsync(AddArtImage.ArtImageFile, allowedFileExtentions, medium.MediumType);

                // mapping `ProductDTO` to `Product` manually. You can use automapper.
                var artImage = new ArtImage
                {
                    ArtDetails = AddArtImage.ArtDetails,
                    FileName = createdImageName,
                    Medium = medium,
                    price = AddArtImage.price,
                    sold = AddArtImage.sold,
                    Title = AddArtImage.Title,
                    CreatedDate = AddArtImage.CreatedDate,
                    SoldDate = AddArtImage.SoldDate,


                    //ProductName = AddArtImage.ProductName,
                    //ProductImage = createdImageName
                };
                var createdArt = await artImageRepository.AddArtImageAsync(artImage);
                return CreatedAtAction(nameof(CreateArtwork), createdArt);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
        // PUT api/<ArtImageController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateArtImageDTO updateArtdto)
        {
            try
            {
                var existingArt = await artImageRepository.FindArtImageByIdAsync(id);
                if (existingArt == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, $"ArtWork with id: {id} does not found");
                }
                var medium = await mediumrepository.FindMediumByIdAsync(updateArtdto.MediumId);
                if (medium == null) { return StatusCode(StatusCodes.Status404NotFound, $"Medium with id: {updateArtdto.MediumId} does not found"); }
// TODO update file

                existingArt.Medium=medium;
                existingArt.CreatedDate = updateArtdto.CreatedDate;
                existingArt.SoldDate = updateArtdto.SoldDate;
                existingArt.ArtDetails = updateArtdto.ArtDetails;
                existingArt.price = updateArtdto.price;
                existingArt.sold = updateArtdto.sold;
                existingArt.Title = updateArtdto.Title;

             var updatedata =   await artImageRepository.UpdateArtImageAsync(id,existingArt);
                return  Ok(updatedata);

            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }

        // DELETE api/<ArtImageController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtwork(int id)
        {
            try
            {
                var existingArt = await artImageRepository.FindArtImageByIdAsync(id);
                if (existingArt == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, $"ArtWork with id: {id} does not found");
                }
                //var medium = await mediumrepository.FindMediumByIdAsync(existingArt.Medium);
                //if (medium == null) { return StatusCode(StatusCodes.Status404NotFound, $"Medium with id: {AddArtImage.MediumId} does not found"); }
                string folder = existingArt.Medium.MediumType;
                string imagePathforDelete = Path.Combine(folder, existingArt.FileName);
                await artImageRepository.DeleteArtImageAsync(id);
                // After deleting product from database,remove file from directory.

                //  fileService.DeleteFile(existingArt.FileName);
                fileService.DeleteFile(imagePathforDelete);
               // return NoContent();  // return 204
                return StatusCode(StatusCodes.Status202Accepted, existingArt);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}

using ArtImageManipulation.API.DTO;
using ArtImageManipulation.API.Entity;
using ArtImageManipulation.API.Repository;
using ArtImageManipulation.API.Services;
using ImageManipulation.API.DTO;
using ImageManipulation.API.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace ImageManipulation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MediumController : ControllerBase
    {
        private readonly IMediumrepository mediumrepository;
        private readonly ILogger logger;

        public MediumController(IMediumrepository mediumrepository, ILogger<MediumController> logger)
        {
            this.mediumrepository = mediumrepository;
            this.logger = logger;
             
        }

        public ILogger<MediumController> Logger { get; }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var mediums = await mediumrepository.GetMediumsAsync();
                return Ok(mediums);
            }
            catch (Exception ex) { 
            logger.LogError(ex.StackTrace);
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
public async Task<IActionResult> CreateMedium([FromBody] AddMediumDTO addMediumDTO)
        {
            try
            {
                //var medium = await mediumrepository.FindMediumByIdAsync(AddArtImage.MediumId);
                //if (medium == null) { return StatusCode(StatusCodes.Status404NotFound, $"Medium with id: {AddArtImage.MediumId} does not found"); }

                var medium = new Medium
                {
                    MediumType = addMediumDTO.MediumType,
                 };
     
                var createdArt = await mediumrepository.AddMediumAsync(medium);
                return CreatedAtAction(nameof(CreateMedium), createdArt);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
        }
}

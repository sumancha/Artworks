using ArtImageManipulation.API.Repository;
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

    }
}

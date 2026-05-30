
using ImageManipulation.API.DTO;
using ImageManipulation.API.Entity;
using ImageManipulation.API.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.IdentityModel.Tokens;

namespace ImageManipulation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MediumController : ControllerBase
    {
        private readonly IMediumrepository mediumrepository;
        private readonly IMemoryCache cache;
        private readonly ILogger logger;
        const string cacheKey = "AllMediums";

        public MediumController(IMediumrepository mediumrepository, IMemoryCache _cache, ILogger<MediumController> logger)
        {
            this.mediumrepository = mediumrepository;
            this.cache = _cache;
            this.logger = logger;
             
        }

        public ILogger<MediumController> Logger { get; }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                if (cache.TryGetValue(cacheKey, out IEnumerable<Medium> mediums))
                {
                    logger.LogInformation("returning mediums from cache");
                    return Ok(mediums);
                }
                else
                {
                    logger.LogInformation("mediums not found in cache");
                    mediums = await mediumrepository.GetAllAsync();

                     var cacheEntryOptions = new MemoryCacheEntryOptions()
                        .SetSlidingExpiration(TimeSpan.FromMinutes(15))
                        .SetAbsoluteExpiration(TimeSpan.FromHours(2))
                        .SetPriority(CacheItemPriority.Normal);
                     cache.Set(cacheKey, mediums);

                    return Ok(mediums);
                }
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
                    CreatedBy = addMediumDTO.CreatedBy,
                    DateCreated = DateTime.Now,
                    LastModifiedBy = addMediumDTO.CreatedBy,
                    LastModifiedDate=DateTime.Now
                };

     
                var createdArt = await mediumrepository.InsertAsync(medium);

                //var cacheKey = $"AllMediums";
                //Logger.LogInformation("mediums adding ");
                //         var cacheEntryOptions = new MemoryCacheEntryOptions()
                //.SetSlidingExpiration(TimeSpan.FromMinutes(30)) // Set an appropriate expiration policy
                //.SetAbsoluteExpiration(TimeSpan.FromHours(2));

                //      cache.Set(cacheKey, createdArt, cacheEntryOptions);
                 cache.Remove(cacheKey);

                return CreatedAtAction(nameof(CreateMedium), createdArt);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMedium(int id, [FromBody] UpdateMediumDTO updateMediumDTO)
        {
            try
            {
                var medium = await mediumrepository.GetByIdAsync(id);
                if (medium == null) { return StatusCode(StatusCodes.Status404NotFound, $"Medium with id: {id} does not found"); }

                medium.MediumType = updateMediumDTO.MediumType;
                medium.LastModifiedBy = updateMediumDTO.LastModifiedBy;
                medium.LastModifiedDate = DateTime.Now;


                var updatedArt = await mediumrepository.UpdateAsync(id, medium);

                //var cacheKey = $"AllMediums";
                //Logger.LogInformation("mediums adding ");
                //         var cacheEntryOptions = new MemoryCacheEntryOptions()
                //.SetSlidingExpiration(TimeSpan.FromMinutes(30)) // Set an appropriate expiration policy
                //.SetAbsoluteExpiration(TimeSpan.FromHours(2));

                //      cache.Set(cacheKey, createdArt, cacheEntryOptions);
                cache.Remove(cacheKey);

                return CreatedAtAction(nameof(CreateMedium), updatedArt);
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message);
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}

using ArtImageManipulation.API.DTO;
using ArtImageManipulation.API.Entity;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;

namespace ArtImageManipulation.API.Repository
{
    public class ArtImageRepoImps : IArtImageRepository
    {
        private readonly ApplicationDbContext context;

        public ArtImageRepoImps(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<ArtImage> AddArtImageAsync(ArtImage artimage)
        {
            context.ArtImages.Add(artimage);
            await context.SaveChangesAsync();
            return artimage;  // returning created artimage, it will automatically fetch `Id`
        }

        public async Task<ArtImage> UpdateArtImageAsync(int Id, ArtImage artimage)
        {
            var existingArt = await context.ArtImages.FirstOrDefaultAsync(x => x.Id == Id);
            if (existingArt == null) { return null; }
            existingArt.Medium = artimage.Medium;
            existingArt.CreatedDate = artimage.CreatedDate;
            existingArt.SoldDate = artimage.SoldDate;
            existingArt.ArtDetails = artimage.ArtDetails;
            existingArt.price = artimage.price;
            existingArt.sold = artimage.sold;
            existingArt.Title = artimage.Title;
            await context.SaveChangesAsync();
            return existingArt;
        }

        public async Task DeleteArtImageAsync(ArtImage artimage)
        {
            context.ArtImages.Remove(artimage);
            await context.SaveChangesAsync();
        }

        public async Task<ArtImage?> FindArtImageByIdAsync(int id)
        {

            //var results = await context.ArtImages.Include("Medium").SingleOrDefaultAsync(id);
            var artimage = await context.ArtImages.Include("Medium").FirstOrDefaultAsync(x => x.Id ==id);
            return artimage;
        }

        public async Task<List<ArtImage>> GetArtImagesAsync()
        {
            return await context.ArtImages.Include("Medium").ToListAsync();
           // return await context.ArtImages.ToListAsync();
        }

        public async Task<ArtImage> DeleteArtImageAsync(int Id)
        {
            var existingArtImage = await context.ArtImages.FirstOrDefaultAsync(x => x.Id == Id);
            if (existingArtImage == null) { return null; }
            context.ArtImages.Remove(existingArtImage);
            await context.SaveChangesAsync();
            return existingArtImage;


        }
    }
}

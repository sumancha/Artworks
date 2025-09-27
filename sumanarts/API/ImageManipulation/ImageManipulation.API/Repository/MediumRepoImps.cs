using ArtImageManipulation.API;
using ArtImageManipulation.API.Entity;
using Microsoft.EntityFrameworkCore;

namespace ImageManipulation.API.Repository
{
    public class MediumRepoImps : IMediumrepository
    {
        private readonly ApplicationDbContext context;

        public MediumRepoImps(ApplicationDbContext context)
        {
            this.context = context;
        }

        public Task<Medium> AddMediumAsync(Medium Medium)
        {
            throw new NotImplementedException();
        }

        public Task<Medium> DeleteMediumAsync(int Id)
        {
            throw new NotImplementedException();
        }

        public async Task<Medium?> FindMediumByIdAsync(int id)
        {
            var artimage = await context.Mediums.FindAsync(id);
            return artimage;
        }

        public async Task<List<Medium>> GetMediumsAsync()
        {
         return await  context.Mediums.ToListAsync();
        }

        public Task<Medium> UpdateMediumAsync(int id, ArtImage artimage)
        {
            throw new NotImplementedException();
        }

        public Task<Medium> UpdateMediumAsync(int id, Medium Medium)
        {
            throw new NotImplementedException();
        }
    }
}

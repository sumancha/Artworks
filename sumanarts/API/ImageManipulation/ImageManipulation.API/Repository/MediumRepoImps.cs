using ImageManipulation.API.Entity;
using ImageManipulation.API.Data;
using ImageManipulation.API.DTO;
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

        public async Task<Medium> InsertAsync(Medium medium)
        {
            //var dateTime = DateTime.Now;
            //medium.CreatedDate = dateTime;
            //medium.LastModifiedDate = dateTime;

            context.Mediums.Add(medium);
            await context.SaveChangesAsync();
            return medium;


        }



        public async Task<Medium?> GetByIdAsync(int id)
        {
            var meduim = await context.Mediums.FindAsync(id);
            return meduim;
        }

        public async Task<IReadOnlyList<Medium>> GetAllAsync()
        {
         return await  context.Mediums.ToListAsync();
        }


        public async Task<Medium> UpdateAsync(int id, Medium Medium)
        {
            context.Mediums.Update(Medium);
            await context.SaveChangesAsync();
            return Medium;
        }

       

        public Task<Medium> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Medium> SaveAsync()
        {
            throw new NotImplementedException();
        }
    }
}

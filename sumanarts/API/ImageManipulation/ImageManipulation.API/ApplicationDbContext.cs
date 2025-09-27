using ArtImageManipulation.API.Entity;
using Microsoft.EntityFrameworkCore;

namespace ArtImageManipulation.API
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
       public DbSet<ArtImage> ArtImages { get; set; }
        public DbSet<Medium> Mediums { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //seed Difficulties
            var mediums = new List<Medium>()
            {
                new Medium() { Id = 1, MediumType ="Watercolor"},
                new Medium() { Id = 2, MediumType ="Oil"},
                new Medium() { Id = 3, MediumType ="Drawing"},
                new Medium() { Id = 4, MediumType ="Digital"},
                new Medium() { Id = 5, MediumType ="Sculpture"},
            };
            modelBuilder.Entity<Medium>().HasData(mediums);

        }



        }
}

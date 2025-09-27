using ArtImageManipulation.API.Entity;

namespace ImageManipulation.API.Repository
{
    public interface IMediumrepository
    {
        Task<Medium> AddMediumAsync(Medium Medium);
        Task<Medium> UpdateMediumAsync(int id, Medium Medium);
        Task<Medium> DeleteMediumAsync(int Id);
        Task<List<Medium>> GetMediumsAsync();
        Task<Medium?> FindMediumByIdAsync(int id);
    }
}

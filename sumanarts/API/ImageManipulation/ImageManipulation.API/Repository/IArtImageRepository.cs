using ArtImageManipulation.API.Entity;

namespace ArtImageManipulation.API.Repository
{
    public interface IArtImageRepository
    {
        Task<ArtImage> AddArtImageAsync(ArtImage artimage);
        Task<ArtImage> UpdateArtImageAsync(int id, ArtImage artimage);
        Task<ArtImage> DeleteArtImageAsync(int Id);
        Task<List<ArtImage>> GetArtImagesAsync();
        Task<ArtImage?> FindArtImageByIdAsync(int id);
    }
}

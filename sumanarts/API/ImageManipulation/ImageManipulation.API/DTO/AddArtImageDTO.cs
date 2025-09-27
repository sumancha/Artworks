using ArtImageManipulation.API.Entity;
using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
// NOTE: for using above namespace include this line in csproj of this class library : <FrameworkReference Include="Microsoft.AspNetCore.App" />


namespace ArtImageManipulation.API.DTO
{
    public class AddArtImageDTO
    {
        [Required]
        [MaxLength(120)]
        public string? Title { get; set; }
        [Required]
        [MaxLength(500)]
        public string? ArtDetails { get; set; }
        //[Required]
        //[MaxLength(220)]
        //public string? FileName { get; set; }


        public int MediumId { get; set; }

        [NotMapped]

        public IFormFile? ArtImageFile { get; set; }

        [Required]
        public bool? sold { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal? price { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? SoldDate { get; set; }
    }
}

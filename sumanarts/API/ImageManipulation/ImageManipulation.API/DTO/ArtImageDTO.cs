using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ImageManipulation.API.DTO
{
    public class ArtImageDTO
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(120)]
        public string? Title { get; set; }

        [Required]
        [MaxLength(500)]
        public string? ArtDetails { get; set; }
        [Required]
        [MaxLength(220)]
        public string? FileName { get; set; }
        //[Required]
        //[MaxLength(30)]
        public int MediumId { get; set; }

        //[NotMapped]
        //public IFormFile? ArtImageFile { get; set; }

        [Required]
        public bool? sold { get; set; }
        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal? price { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? SoldDate { get; set; }
    }
}

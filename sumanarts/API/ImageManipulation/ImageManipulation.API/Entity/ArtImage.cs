using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
// NOTE: for using above namespace include this line in csproj of this class library : <FrameworkReference Include="Microsoft.AspNetCore.App" />


namespace ArtImageManipulation.API.Entity
{
 
        [Table("ArtImage")]
        public class ArtImage
        {
            public int Id { get; set; }

        [Required]
        [MaxLength(120)]
        public string? Title { get; set; }
        [Required]
            [MaxLength(500)]
            public string? ArtDetails { get; set; }
        [Required]
        [MaxLength(500)]
        public string?  FileName { get; set; }




        [NotMapped]
        public IFormFile? ArtImageFile { get; set; }

        [Required]
        public bool? sold { get; set; }
        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal? price { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? SoldDate { get; set; }

        public int MediumId { get; set; }
      //Navigation property
        public Medium Medium { get; set; }
    }
}

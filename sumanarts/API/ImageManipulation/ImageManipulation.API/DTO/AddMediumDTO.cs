using System.ComponentModel.DataAnnotations;

namespace ImageManipulation.API.DTO
{
    public class AddMediumDTO
    {

        [Required]
        [MaxLength(30)]
        public string MediumType { get; set; }

        //public DateTime DateCreated { get; set; } = DateTime.UtcNow;
        public string? CreatedBy { get; set; }
        //public DateTime LastModifiedDate { get; set; } = DateTime.UtcNow;


    }
}

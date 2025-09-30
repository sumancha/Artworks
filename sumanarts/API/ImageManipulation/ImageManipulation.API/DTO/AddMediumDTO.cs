using System.ComponentModel.DataAnnotations;

namespace ImageManipulation.API.DTO
{
    public class AddMediumDTO
    {

        [Required]
        [MaxLength(30)]
        public string MediumType { get; set; }
    }
}

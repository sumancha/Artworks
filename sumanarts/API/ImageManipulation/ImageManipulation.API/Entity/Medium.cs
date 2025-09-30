using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ArtImageManipulation.API.Entity
{
    [Table("Medium")]
    public class Medium
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(30)]
        public string MediumType { get; set; }
    }
}

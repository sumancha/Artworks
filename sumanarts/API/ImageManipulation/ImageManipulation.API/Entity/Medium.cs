using ImageManipulation.API.Entity.Common;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ImageManipulation.API.Entity
{
    [Table("Medium")]
    public class Medium : BaseDomainEntity
    {
 

        [Required]
        [MaxLength(30)]
        public string MediumType { get; set; }

        //public int ArtInfoId { get; set; }
        //public ArtInfo ArtInfo { get; set; }
    }
}

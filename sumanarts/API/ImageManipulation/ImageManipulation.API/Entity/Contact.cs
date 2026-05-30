using ImageManipulation.API.Entity.Common;

namespace ImageManipulation.API.Entity
{
    public class Contact : BaseDomainEntity
    {
 
        public string FName { get; set; }
        public string LName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
 
    }
}

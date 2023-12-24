using Microsoft.AspNetCore.Identity;

namespace Mt.Api.Entities
{
    public class AppRole : IdentityRole<int>
    {
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}
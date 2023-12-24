
using Mt.Api.Entities;

namespace Mt.Api.Interfaces
{
    public interface ITokenService
    {
        Task<string> CreateToken(AppUser user);
    }
}
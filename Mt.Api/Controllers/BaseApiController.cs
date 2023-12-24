using Microsoft.AspNetCore.Mvc;
using Mt.Api.Helpers;

namespace Mt.Api.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {

    }
}
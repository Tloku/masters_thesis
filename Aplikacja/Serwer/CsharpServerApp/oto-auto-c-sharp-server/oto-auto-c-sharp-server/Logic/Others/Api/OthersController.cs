using Microsoft.AspNetCore.Mvc;
using oto_auto_c_sharp_server.Logic.Types.Api;

namespace oto_auto_c_sharp_server.Logic.Others.Api;

[ApiController]
[Route("api/types")]
class OthersController: ControllerBase
{
    private readonly IOthersAdapter _othersAdapter;

    OthersController(IOthersAdapter othersAdapter)
    {
        _othersAdapter = othersAdapter;
    }
}
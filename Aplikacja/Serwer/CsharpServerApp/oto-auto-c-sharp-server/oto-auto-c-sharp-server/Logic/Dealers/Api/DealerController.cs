using Microsoft.AspNetCore.Mvc;
using oto_auto_c_sharp_server.Entities;

namespace oto_auto_c_sharp_server.Logic.Dealers.Api;

[ApiController]
[Route("api/dealer")]
public class DealerController: ControllerBase
{
    private readonly IDealerAdapter _dealerAdapter;

    public DealerController(IDealerAdapter dealerAdapter)
    {
        _dealerAdapter = dealerAdapter;
    }

    [HttpGet()]
    public async Task<ActionResult<IEnumerable<Dealer>>> GetAllDealers()
    {
        var dealers = await _dealerAdapter.GetAllDealers();
        return Ok(dealers);
    }

    [HttpPost()]
    public async Task<ActionResult<Dealer>> GetDealerById(int id)
    {
        var dealer = await _dealerAdapter.GetDealerById(id);
        return Ok(dealer);
    }

    
}
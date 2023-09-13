using Microsoft.AspNetCore.Mvc;
using oto_auto_c_sharp_server.Entities;

namespace oto_auto_c_sharp_server.Logic.Offers.Api;

[ApiController]
[Route("api/offer")]
class OfferController: ControllerBase
{
    private readonly IOfferAdapter _offerAdapter;

    OfferController(IOfferAdapter offerAdapter)
    {
        _offerAdapter = offerAdapter;
    }

    [HttpGet()]
    public async Task<ActionResult<IEnumerable<Offer>>> GetAllOffers()
    {
        var offers = await _offerAdapter.GetAllOffers();
        return Ok(offers);
    }
}
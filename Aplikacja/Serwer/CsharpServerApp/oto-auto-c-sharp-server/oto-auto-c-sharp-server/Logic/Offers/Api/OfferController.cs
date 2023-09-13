using Microsoft.AspNetCore.Mvc;
using oto_auto_c_sharp_server.Entities;

namespace oto_auto_c_sharp_server.Logic.Offers.Api;

[ApiController]
[Route("api/offer")]
public class OfferController: ControllerBase
{
    private readonly IOfferAdapter _offerAdapter;

    public OfferController(IOfferAdapter offerAdapter)
    {
        _offerAdapter = offerAdapter;
    }

    [HttpGet()]
    public async Task<ActionResult<IEnumerable<Offer>>> GetAllOffers()
    {
        var offers = await _offerAdapter.GetAllOffers();
        return Ok(offers);
    }

    [HttpGet("with_vehicles")]
    public async Task<ActionResult<IEnumerable<Offer>>> GetOffersWithVehicles()
    {
        var offers = await _offerAdapter.GetOffersWithVehicles();
        return Ok(offers);
    }
}
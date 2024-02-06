using Microsoft.AspNetCore.Mvc;
using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Offers.Models;
using oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer;

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
    
    [HttpGet("with_vehicle/{offerId}")]
    public async Task<ActionResult<Offer>> GetOfferWithVehicleByOfferId(int offerId)
    {
        var offer = await _offerAdapter.GetOfferWithVehicleByOfferId(offerId);
        return Ok(offer);
    }

    [HttpGet("awarded")]
    public async Task<ActionResult<List<OfferCardComponentModel>>> GetAwardedOffersCardComponentModel()
    {
        var awardedOffers = await _offerAdapter.GetAwardedOffers();
        return Ok(awardedOffers);
    }

    [HttpGet("{offerId}")]
    public async Task<ActionResult<OfferActivityComponentModel>> GetOfferById(int offerId)
    {
        var offer = await _offerAdapter.GetOfferById(offerId);
        return Ok(offer);
    }

    [HttpPost("create")]
    public async Task<ActionResult<CreateOfferResponse>> CreateOffer(CreateOfferRequest request)
    {
        var offerId = await _offerAdapter.CreateOffer(request);
        return Ok(offerId);
    }

    [HttpGet("filtered")]
    public async Task<ActionResult<IEnumerable<OfferPreview>>> GetFilteredOffers()
    {
        var offers = await _offerAdapter.GetFilteredOffers();
        return Ok(offers);
    }
}   
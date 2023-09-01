using Microsoft.AspNetCore.Mvc;

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
}
using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Offers.Api;
using oto_auto_c_sharp_server.Repository.Offer;

namespace oto_auto_c_sharp_server.Logic.Offers;

class OfferMediator : IOfferAdapter
{
    private readonly IOfferRepository _offerRepository;

    public OfferMediator(IOfferRepository offerRepository)
    {
        _offerRepository = offerRepository;
    }
    
    public async Task<IEnumerable<Offer>> GetAllOffers()
    {
        return await _offerRepository.GetAllOffers();
    }

    public async Task<IEnumerable<Offer>> GetOffersWithVehicles()
    {
        return await _offerRepository.GetOffersWithVehicles();
    }
}
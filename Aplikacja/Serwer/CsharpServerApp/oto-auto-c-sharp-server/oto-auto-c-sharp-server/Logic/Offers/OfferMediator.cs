using AutoMapper;
using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Offers.Api;
using oto_auto_c_sharp_server.Logic.Offers.Models;
using oto_auto_c_sharp_server.Repository.Offer;

namespace oto_auto_c_sharp_server.Logic.Offers;

class OfferMediator : IOfferAdapter
{
    private readonly IOfferRepository _offerRepository;
    private readonly IMapper _mapper;
    
    public OfferMediator(IOfferRepository offerRepository, IMapper mapper)
    {
        _offerRepository = offerRepository;
        _mapper = mapper;
    }
    
    public async Task<IEnumerable<Offer>> GetAllOffers()
    {
        return await _offerRepository.GetAllOffers();
    }

    public async Task<IEnumerable<Offer>> GetOffersWithVehicles()
    {
        return await _offerRepository.GetOffersWithVehicles();
    }

    public async Task<Offer?> GetOfferWithVehicleByOfferId(int offerId)
    {
        return await _offerRepository.GetOfferWithVehicleByOfferId(offerId);
    }

    public async Task<List<OfferCardComponentModel>> GetAwardedOffers()
    {
        var offers = await _offerRepository.GetAwardedOffers();
        return offers
            .Select(offer => _mapper.Map<OfferCardComponentModel>(offer))
            .ToList();
    }
}
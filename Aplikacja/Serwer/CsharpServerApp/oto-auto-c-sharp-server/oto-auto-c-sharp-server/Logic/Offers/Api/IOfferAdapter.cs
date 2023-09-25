using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Offers.Models;

namespace oto_auto_c_sharp_server.Logic.Offers.Api;

public interface IOfferAdapter
{
    Task<IEnumerable<Offer>> GetAllOffers();
    
    Task<IEnumerable<Offer>> GetOffersWithVehicles();
    Task<Offer?> GetOfferWithVehicleByOfferId(int offerId);
    Task<List<OfferCardComponentModel>> GetAwardedOffers();

    Task<OfferActivityComponentModel> GetOfferById(int offerId);
}
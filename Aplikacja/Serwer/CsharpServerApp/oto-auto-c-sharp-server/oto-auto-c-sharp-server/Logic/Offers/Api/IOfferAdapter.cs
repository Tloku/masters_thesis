using oto_auto_c_sharp_server.Entities;

namespace oto_auto_c_sharp_server.Logic.Offers.Api;

public interface IOfferAdapter
{
    Task<IEnumerable<Offer>> GetAllOffers();
    
    Task<IEnumerable<Offer>> GetOffersWithVehicles();
}
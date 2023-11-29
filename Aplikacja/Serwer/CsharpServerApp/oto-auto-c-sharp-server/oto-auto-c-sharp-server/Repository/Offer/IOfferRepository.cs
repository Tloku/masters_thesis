namespace oto_auto_c_sharp_server.Repository.Offer;
using Offer = oto_auto_c_sharp_server.Entities.Offer;

public interface IOfferRepository
{
    Task<int> CreateOffer(Offer offer);
    
    Task<IEnumerable<Offer>> GetAllOffers();

    Task<Offer?> GetOfferWithVehicleByOfferId(int offerId);
    
    Task<IEnumerable<Offer>> GetOffersWithVehicles();
    
    Task<IEnumerable<Offer>> GetAwardedOffers(); 
    Task<Offer?> GetOfferById(int offerId);
}
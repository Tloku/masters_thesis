namespace oto_auto_c_sharp_server.Repository.Offer;
using Offer = oto_auto_c_sharp_server.Entities.Offer;

public interface IOfferRepository
{
    Task<IEnumerable<Offer>> GetAllOffers();

    public Task<Offer?> GetOfferWithVehicleByOfferId(int offerId);
    
    public Task<IEnumerable<Offer>> GetOffersWithVehicles();
    
    public Task<IEnumerable<Offer>> GetAwardedOffers();
}
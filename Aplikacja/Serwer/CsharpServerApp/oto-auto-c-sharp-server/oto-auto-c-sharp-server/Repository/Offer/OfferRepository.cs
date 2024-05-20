
using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;
using oto_auto_c_sharp_server.Logic.Offers.Models.FilteredOffers;

namespace oto_auto_c_sharp_server.Repository.Offer;
using Offer = oto_auto_c_sharp_server.Entities.Offer;

class OfferRepository: IOfferRepository
{
    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _context;

    public OfferRepository(MasterContext masterContext, ApplicationContext applicationContext)
    {
        _masterContext = masterContext;
        _context = applicationContext;
    }

    public async Task<int> CreateOffer(Offer offer)
    {
        var newOffer = _masterContext.Add(offer);
        await _masterContext.SaveChangesAsync();
        return newOffer.Entity.Id;
    }

    public async Task<IEnumerable<Offer>> GetAllOffers()
    {
        return await _context.Offer.ToListAsync();
    }

    public async Task<Offer?> GetOfferWithVehicleByOfferId(int offerId)
    {
        return await _context.Offer
            .Include(o => o.Vehicle)
            .Include(o => o.VehicleImages)
            .Where(o => o.Id == offerId)
            .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<Offer>> GetOffersWithVehicles()
    {
        return await _context.Offer
            .Include(o => o.Vehicle)
            .Include(o => o.VehicleImages)
            .ToListAsync();
    }

    public async Task<IEnumerable<Offer>> GetAwardedOffers()
    {
        var total = _context.Offer.Count();
        Random r = new Random();
        var offset = r.Next(0, total - 10);
       
        return await _context.Offer
            .Skip(offset)
            .Take(10)
            .Include(o => o.Vehicle)
            .Include(o => o.Dealer)
            .Include(o => o.VehicleImages)
            .ToListAsync();
    }

    public async Task<IEnumerable<Offer>> GetFilteredOffer(CarSearchValues carSearch)
    {
        // Due to bad design of database (storing price etc. in a string) i cannot easily filter data the way i wanted
        // Sadge
        return await _context.Offer
            // .Where(o => carSearch.PriceFrom != null && int.TryParse(o.Price, out int price) && price >= carSearch.PriceFrom)
            // .Where(o => carSearch.PriceTo != null && int.Parse(o.Price) <= carSearch.PriceTo)
            .Include(o => o.Vehicle)
            // .Where(o => carSearch.BodyType != null && o.Vehicle.BodyType.Type.Contains(carSearch.BodyType, StringComparison.OrdinalIgnoreCase))
            .Where(o => carSearch.Brand == null || o.Vehicle.Brand.Contains(carSearch.Brand))
            .Where(o => carSearch.Model == null || o.Vehicle.Model.Contains(carSearch.Model))
            // .Where(o => o.Vehicle.Generation.Equals(carSearch.Generation))
            // .Where(o => carSearch.YearFrom != null && int.Parse(o.Vehicle.YearOfProduction) >= carSearch.YearFrom)
            // .Where(o => carSearch.YearTo != null && int.Parse(o.Vehicle.YearOfProduction) <= carSearch.YearTo)
            // .Where(o => carSearch.FuelType != null && o.Vehicle.FuelType.Type.Contains(carSearch.FuelType, StringComparison.OrdinalIgnoreCase))
            // .Where(o => carSearch.MileageFrom != null && int.Parse(o.Vehicle.Mileage) >= carSearch.MileageFrom)
            // .Where(o => carSearch.MileageTo != null && int.Parse(o.Vehicle.Mileage) <= carSearch.MileageTo)
            .Include(o => o.Dealer)
            .Include(o => o.VehicleImages)
            .Take(10)
            .ToListAsync();
    }

    public async Task<Offer?> GetOfferById(int offerId)
    {
        return await _context.Offer
            .Where(o => o.Id == offerId)
            .Include(o => o.Vehicle)
            .Include(o => o.VehicleImages)
            .Include(o => o.Vehicle.VehicleType)
            .Include(o => o.Vehicle.DriveType)
            .Include(o => o.Vehicle.FuelType)
            .Include(o => o.Vehicle.CarStatus)
            .Include(o => o.Vehicle.TransmissionType)
            .Include(o => o.Vehicle.BodyType)
            .FirstAsync();
    }
}
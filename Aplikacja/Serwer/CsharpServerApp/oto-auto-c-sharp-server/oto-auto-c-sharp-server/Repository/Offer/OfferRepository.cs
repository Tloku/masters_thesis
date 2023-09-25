
using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.Offer;
using Offer = oto_auto_c_sharp_server.Entities.Offer;

class OfferRepository: IOfferRepository
{
    private readonly OtoAutoContext _context;

    public OfferRepository(OtoAutoContext context)
    {
        _context = context;
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
            .Include(o => o.VehicleImages)
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
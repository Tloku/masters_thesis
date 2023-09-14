
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
            .Where(o => o.Id == offerId)
            .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<Offer>> GetOffersWithVehicles()
    {
        return await _context.Offer
            .Include(o => o.Vehicle)
            .ToListAsync();
    }

    public async Task<IEnumerable<Offer>> GetAwardedOffers()
    {
        return await _context.Offer
            .Include(o => o.Vehicle)
            .Take(100)
            .ToListAsync();
    }
}
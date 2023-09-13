using System.Data.Entity;
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
}
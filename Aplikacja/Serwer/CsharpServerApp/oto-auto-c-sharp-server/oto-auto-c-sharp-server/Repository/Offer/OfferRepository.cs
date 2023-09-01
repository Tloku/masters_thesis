using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.Offer;
using Offer = oto_auto_c_sharp_server.Entities.Offer;

public class OfferRepository: IOfferRepository
{
    private readonly OtoAutoContext _context;

    public OfferRepository(OtoAutoContext context)
    {
        _context = context;
    }
}
using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.Dealer;
using Dealer = oto_auto_c_sharp_server.Entities.Dealer;

class DealerRepository: IDealerRepository
{
    private readonly OtoAutoContext _context;

    public DealerRepository(OtoAutoContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Dealer>> GetAllDealers()
    {
        return await _context.Dealer.ToListAsync();
    }

    public async Task<Dealer> GetDealerById(int id)
    {
        return await _context.Dealer
            .Where(dealer => dealer.Id == id)
            .SingleAsync();
    }
}
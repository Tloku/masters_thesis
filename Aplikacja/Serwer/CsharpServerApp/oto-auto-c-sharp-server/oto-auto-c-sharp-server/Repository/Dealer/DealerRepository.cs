using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.Dealer;
using Dealer = oto_auto_c_sharp_server.Entities.Dealer;

public class DealerRepository: IDealerRepository
{
    private readonly OtoAutoContext _context;

    public DealerRepository(OtoAutoContext context)
    {
        _context = context;
    }
}
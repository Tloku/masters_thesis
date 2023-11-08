using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.Dealer;
using Dealer = oto_auto_c_sharp_server.Entities.Dealer;

class DealerRepository: IDealerRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;
    public DealerRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }

    public async Task<IEnumerable<Dealer>> GetAllDealers()
    {
        return await _replicaContext.Dealer.ToListAsync();
    }

    public async Task<Dealer> GetDealerById(int id)
    {
        return await _replicaContext.Dealer
            .Where(dealer => dealer.Id == id)
            .SingleAsync();
    }
}
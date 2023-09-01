using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Dealers.Api;

namespace oto_auto_c_sharp_server.Logic.Dealers;

class DealerMediator: IDealerAdapter
{
    public Task<IEnumerable<Dealer>> GetAllDealers()
    {
        throw new NotImplementedException();
    }

    public Task<Dealer> GetDealerById(int id)
    {
        throw new NotImplementedException();
    }
}
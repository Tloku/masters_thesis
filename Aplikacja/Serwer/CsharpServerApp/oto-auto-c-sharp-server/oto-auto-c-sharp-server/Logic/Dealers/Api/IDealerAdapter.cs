using oto_auto_c_sharp_server.Entities;

namespace oto_auto_c_sharp_server.Logic.Dealers.Api;

public interface IDealerAdapter
{
    Task<IEnumerable<Dealer?>> GetAllDealers();
    Task<Dealer?> GetDealerById(int id);
}
namespace oto_auto_c_sharp_server.Repository.Dealer;
using Dealer = oto_auto_c_sharp_server.Entities.Dealer;

public interface IDealerRepository
{
    Task<IEnumerable<Dealer>> GetAllDealers();

    Task<Dealer> GetDealerById(int id);
}
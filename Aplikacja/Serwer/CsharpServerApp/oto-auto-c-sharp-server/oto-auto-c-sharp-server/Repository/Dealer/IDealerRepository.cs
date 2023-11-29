using oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer;

namespace oto_auto_c_sharp_server.Repository.Dealer;
using Dealer = oto_auto_c_sharp_server.Entities.Dealer;

public interface IDealerRepository
{
    Task<int> CreateDealer(DealerDataForm dealerDataForm);
    
    Task<int> UpdateDealer(Dealer dealer, DealerDataForm dealerDataForm);
    
    Task<Dealer?> GetDealerByPhoneNumber(string phoneNumber);
    
    Task<IEnumerable<Dealer?>> GetAllDealers();

    Task<Dealer?> GetDealerById(int id);
}
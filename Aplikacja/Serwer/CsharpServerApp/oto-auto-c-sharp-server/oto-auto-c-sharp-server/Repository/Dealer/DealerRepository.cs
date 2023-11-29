using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using oto_auto_c_sharp_server.DbContexts;
using oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer;

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

    public async Task<int> CreateDealer(DealerDataForm dealerDataForm)
    {
        var dealer = new Dealer(dealerDataForm.Name, dealerDataForm.PhoneNumber, false);
        dealer.Address = dealerDataForm.Address;
        dealer.SiteUrl = "";
        var newDealer = _masterContext.Dealer.Add(dealer);
        await _masterContext.SaveChangesAsync();
        return newDealer.Entity.Id;
    }

    public async Task<int> UpdateDealer(Dealer dealer, DealerDataForm dealerDataForm)
    {
        dealer.Name = dealerDataForm.Name;
        dealer.Address = dealerDataForm.Address;
        dealer.PhoneNumber = dealerDataForm.PhoneNumber;

        _masterContext.Entry(dealer).State = EntityState.Modified;
        await _masterContext.SaveChangesAsync();
        return dealer.Id;
    }

    public async Task<Dealer?> GetDealerByPhoneNumber(string phoneNumber)
    {
        return await _replicaContext.Dealer
            .Where(d => d.PhoneNumber.Equals(phoneNumber))
            .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<Dealer?>> GetAllDealers()
    {
        return await _replicaContext.Dealer.ToListAsync();
    }

    public async Task<Dealer?> GetDealerById(int id)
    {
        return await _replicaContext.Dealer
            .Where(dealer => dealer.Id == id)
            .FirstOrDefaultAsync();
    }
}
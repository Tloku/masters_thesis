using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Dealers.Api;
using oto_auto_c_sharp_server.Repository.Dealer;

namespace oto_auto_c_sharp_server.Logic.Dealers;

class DealerMediator: IDealerAdapter
{

    private readonly IDealerRepository _dealerRepository;

    public DealerMediator(IDealerRepository dealerRepository)
    {
        _dealerRepository = dealerRepository;
    }
    
    public Task<IEnumerable<Dealer?>> GetAllDealers()
    {
        return _dealerRepository.GetAllDealers();
    }

    public Task<Dealer?> GetDealerById(int id)
    {
        if (id < 0)
        {
            throw new BadHttpRequestException("Given id is a negative number");
        }

        return _dealerRepository.GetDealerById(id);
    }
}
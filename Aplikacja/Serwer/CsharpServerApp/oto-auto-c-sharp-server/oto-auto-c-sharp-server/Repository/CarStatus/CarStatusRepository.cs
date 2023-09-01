using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.CarStatus;
using CarStatus  = oto_auto_c_sharp_server.Entities.CarStatus;

public class CarStatusRepository: ICarStatusRepository
{
    private readonly OtoAutoContext _context;

    public CarStatusRepository(OtoAutoContext context)
    {
        _context = context;
    }
    
}
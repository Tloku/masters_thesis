using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.FuelType;
using FuelType = oto_auto_c_sharp_server.Entities.FuelType;

public class FuelTypeRepository: IFuelTypeRepository
{
    private readonly OtoAutoContext _context;

    public FuelTypeRepository(OtoAutoContext context)
    {
        _context = context;
    }
    
}
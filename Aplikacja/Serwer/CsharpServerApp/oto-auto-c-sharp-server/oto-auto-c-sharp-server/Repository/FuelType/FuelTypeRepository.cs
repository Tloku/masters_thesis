using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.FuelType;
using FuelType = oto_auto_c_sharp_server.Entities.FuelType;

class FuelTypeRepository: IFuelTypeRepository
{
    private readonly OtoAutoContext _context;

    public FuelTypeRepository(OtoAutoContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<FuelType>> GetFuelTypes()
    {
        return await _context.FuelType.ToListAsync();
    }
}
using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.FuelType;
using FuelType = oto_auto_c_sharp_server.Entities.FuelType;

class FuelTypeRepository: IFuelTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _applicationContext;

    public FuelTypeRepository(MasterContext masterContext, ApplicationContext applicationContext)
    {
        _masterContext = masterContext;
        _applicationContext = applicationContext;
    }

    public async Task<FuelType?> GetFuelTypeByType(string type)
    {
        return await _applicationContext.FuelType
            .Where(ft => ft.Type.Equals(type))
            .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<FuelType>> GetFuelTypes()
    {
        return await _applicationContext.FuelType.ToListAsync();
    }
}
using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.VehicleType;
using VehicleType = oto_auto_c_sharp_server.Entities.VehicleType;

class VehicleTypeRepository: IVehicleTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _applicationContext;
    public VehicleTypeRepository(MasterContext masterContext, ApplicationContext applicationContext)
    {
        _masterContext = masterContext;
        _applicationContext = applicationContext;
    }

    public async Task<VehicleType?> GetVehicleTypeByType(string type)
    {
        return await _applicationContext.VehicleType
            .Where(vt => vt.Type.Equals(type))
            .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<VehicleType>> GetVehicleTypes()
    {
        return await _applicationContext.VehicleType.ToListAsync();
    }
}
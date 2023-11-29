using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.VehicleType;
using VehicleType = oto_auto_c_sharp_server.Entities.VehicleType;

class VehicleTypeRepository: IVehicleTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;
    public VehicleTypeRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }

    public async Task<VehicleType?> GetVehicleTypeByType(string type)
    {
        return await _replicaContext.VehicleType
            .Where(vt => vt.Type.Equals(type))
            .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<VehicleType>> GetVehicleTypes()
    {
        return await _replicaContext.VehicleType.ToListAsync();
    }
}
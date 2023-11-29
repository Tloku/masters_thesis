using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.FuelType;
using FuelType = oto_auto_c_sharp_server.Entities.FuelType;

class FuelTypeRepository: IFuelTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;

    public FuelTypeRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }

    public async Task<FuelType?> GetFuelTypeByType(string type)
    {
        return await _replicaContext.FuelType
            .Where(ft => ft.Type.Equals(type))
            .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<FuelType>> GetFuelTypes()
    {
        return await _replicaContext.FuelType.ToListAsync();
    }
}
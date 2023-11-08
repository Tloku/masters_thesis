using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.Equipment;
using Equipment = oto_auto_c_sharp_server.Entities.Equipment;

class EquipmentRepository: IEquipmentRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;

    public EquipmentRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }

    public async Task<IEnumerable<Equipment>> GetEquipments()
    {
        return await _replicaContext.Equipment.ToListAsync();
    }
}
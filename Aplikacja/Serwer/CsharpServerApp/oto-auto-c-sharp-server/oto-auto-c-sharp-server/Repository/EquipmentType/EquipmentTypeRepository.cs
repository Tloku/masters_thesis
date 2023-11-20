using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.EquipmentType;
using EquipmentType = oto_auto_c_sharp_server.Entities.EquipmentType;

class EquipmentTypeRepository: IEquipmentTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;

    public EquipmentTypeRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }
    
    public async Task<IEnumerable<EquipmentType>> GetEquipmentTypes()
    {
        return await _replicaContext.EquipmentType
            .Include(et => et.Equipments)
            .ToListAsync();
    }

    public async Task<EquipmentType> GetEquipmentTypeWithEquipmentsByType(string type)
    {
        return await _replicaContext.EquipmentType
            .Where(equipmentType => equipmentType.Type.ToLower().Equals(type.ToLower()))
            .Include(et => et.Equipments)
            .SingleAsync();
    }
}
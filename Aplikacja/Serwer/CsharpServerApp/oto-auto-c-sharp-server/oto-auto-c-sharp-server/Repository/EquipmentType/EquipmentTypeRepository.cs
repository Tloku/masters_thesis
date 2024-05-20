using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.EquipmentType;
using EquipmentType = oto_auto_c_sharp_server.Entities.EquipmentType;

class EquipmentTypeRepository: IEquipmentTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _applicationContext;

    public EquipmentTypeRepository(MasterContext masterContext, ApplicationContext applicationContext)
    {
        _masterContext = masterContext;
        _applicationContext = applicationContext;
    }
    
    public async Task<IEnumerable<EquipmentType>> GetEquipmentTypes()
    {
        return await _applicationContext.EquipmentType
            .Include(et => et.Equipments)
            .ToListAsync();
    }

    public async Task<EquipmentType> GetEquipmentTypeWithEquipmentsByType(string type)
    {
        return await _applicationContext.EquipmentType
            .Where(equipmentType => equipmentType.Type.ToLower().Equals(type.ToLower()))
            .Include(et => et.Equipments)
            .SingleAsync();
    }
}
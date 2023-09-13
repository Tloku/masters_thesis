using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.EquipmentType;
using EquipmentType = oto_auto_c_sharp_server.Entities.EquipmentType;

class EquipmentTypeRepository: IEquipmentTypeRepository
{
    private readonly OtoAutoContext _context;

    public EquipmentTypeRepository(OtoAutoContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<EquipmentType>> GetEquipmentTypes()
    {
        return await _context.EquipmentType.ToListAsync();
    }

    public async Task<EquipmentType> GetEquipmentTypeWithEquipmentsByType(string type)
    {
        return await _context.EquipmentType
            .Where(equipmentType => equipmentType.Type.ToLower().Equals(type.ToLower()))
            .Include(et => et.Equipments)
            .SingleAsync();
    }
}
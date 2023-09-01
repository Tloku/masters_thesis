using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.EquipmentType;
using EquipmentType = oto_auto_c_sharp_server.Entities.EquipmentType;

public class EquipmentTypeRepository: IEquipmentTypeRepository
{
    private readonly OtoAutoContext _context;

    public EquipmentTypeRepository(OtoAutoContext context)
    {
        _context = context;
    }
    
}
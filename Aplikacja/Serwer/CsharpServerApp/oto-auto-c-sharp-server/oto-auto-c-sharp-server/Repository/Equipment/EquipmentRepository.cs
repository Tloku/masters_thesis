using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.Equipment;
using Equipment = oto_auto_c_sharp_server.Entities.Equipment;

public class EquipmentRepository: IEquipmentRepository
{
    private readonly OtoAutoContext _context;

    public EquipmentRepository(OtoAutoContext context)
    {
        _context = context;
    }
}
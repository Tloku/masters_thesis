using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.Equipment;
using Equipment = oto_auto_c_sharp_server.Entities.Equipment;

class EquipmentRepository: IEquipmentRepository
{
    private readonly OtoAutoContext _context;

    public EquipmentRepository(OtoAutoContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Equipment>> GetEquipments()
    {
        return await _context.Equipment.ToListAsync();
    }
}
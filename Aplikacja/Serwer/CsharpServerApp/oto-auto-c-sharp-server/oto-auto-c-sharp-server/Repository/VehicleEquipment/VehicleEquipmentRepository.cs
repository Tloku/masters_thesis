
using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.VehicleEquipment;
using VehicleEquipment = oto_auto_c_sharp_server.Entities.VehicleEquipment;


public class VehicleEquipmentRepository: IVehicleEquipmentRepository
{
    private readonly OtoAutoContext _context;

    public VehicleEquipmentRepository(OtoAutoContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<VehicleEquipment>> GetVehicleEquipmentByVehicleId(int vehicleId)
    {
        return await _context.VehicleEquipment
            .Where(ve => ve.Vehicle.Id == vehicleId)
            .Include(v => v.Equipment)
            .ToListAsync();
    }
}
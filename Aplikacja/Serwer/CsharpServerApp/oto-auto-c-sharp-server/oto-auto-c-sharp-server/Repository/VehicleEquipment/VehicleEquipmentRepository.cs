
using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.VehicleEquipment;
using VehicleEquipment = oto_auto_c_sharp_server.Entities.VehicleEquipment;


public class VehicleEquipmentRepository: IVehicleEquipmentRepository
{
    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _applicationContext;

    public VehicleEquipmentRepository(MasterContext masterContext, ApplicationContext applicationContext)
    {
        _masterContext = masterContext;
        _applicationContext = applicationContext;
    }
    
    public async Task<IEnumerable<VehicleEquipment>> GetVehicleEquipmentByVehicleId(int vehicleId)
    {
        return await _applicationContext.VehicleEquipment
            .Where(ve => ve.Vehicle.Id == vehicleId)
            .Include(v => v.Equipment)
            .ToListAsync();
    }

    public async Task CreateVehicleEquipments(IEnumerable<VehicleEquipment> vehicleEquipments)
    {
        _masterContext.VehicleEquipment.AddRange(vehicleEquipments);
        await _masterContext.SaveChangesAsync();
    }
}
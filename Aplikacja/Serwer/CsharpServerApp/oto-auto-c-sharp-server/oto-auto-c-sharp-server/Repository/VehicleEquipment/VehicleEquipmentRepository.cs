
using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.VehicleEquipment;
using VehicleEquipment = oto_auto_c_sharp_server.Entities.VehicleEquipment;


public class VehicleEquipmentRepository: IVehicleEquipmentRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;

    public VehicleEquipmentRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }
    
    public async Task<IEnumerable<VehicleEquipment>> GetVehicleEquipmentByVehicleId(int vehicleId)
    {
        return await _replicaContext.VehicleEquipment
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
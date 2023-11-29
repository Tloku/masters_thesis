namespace oto_auto_c_sharp_server.Repository.VehicleEquipment;
using VehicleEquipment = oto_auto_c_sharp_server.Entities.VehicleEquipment;
public interface IVehicleEquipmentRepository
{
    Task<IEnumerable<VehicleEquipment>> GetVehicleEquipmentByVehicleId(int vehicleId);
    Task CreateVehicleEquipments(IEnumerable<VehicleEquipment> vehicleEquipments);
}
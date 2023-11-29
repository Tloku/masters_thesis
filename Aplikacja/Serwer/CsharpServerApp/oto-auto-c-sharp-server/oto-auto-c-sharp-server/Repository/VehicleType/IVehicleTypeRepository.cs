namespace oto_auto_c_sharp_server.Repository.VehicleType;
using VehicleType = oto_auto_c_sharp_server.Entities.VehicleType;

public interface IVehicleTypeRepository
{
    Task<VehicleType?> GetVehicleTypeByType(string type);
    Task<IEnumerable<VehicleType>> GetVehicleTypes();
}
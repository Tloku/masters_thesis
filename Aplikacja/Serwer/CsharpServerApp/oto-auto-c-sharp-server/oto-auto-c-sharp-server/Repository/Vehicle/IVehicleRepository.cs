
namespace oto_auto_c_sharp_server.Repository.Vehicle;
using Vehicle = oto_auto_c_sharp_server.Entities.Vehicle;

public interface IVehicleRepository
{
    Task<IEnumerable<Vehicle>> GetVehiclesAsync();

    Task<IEnumerable<Vehicle>> GetVehiclesByBrandAsync(string brand);
    Task<int> CreateVehicle(Vehicle newVehicle);
}
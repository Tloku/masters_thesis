using oto_auto_c_sharp_server.Entities;

namespace oto_auto_c_sharp_server.Repository;

public interface IVehicleRepository
{
    Task<IEnumerable<Vehicle>> GetVehiclesAsync();

    Task<IEnumerable<Vehicle>> GetVehiclesByBrandAsync(string brand);
}
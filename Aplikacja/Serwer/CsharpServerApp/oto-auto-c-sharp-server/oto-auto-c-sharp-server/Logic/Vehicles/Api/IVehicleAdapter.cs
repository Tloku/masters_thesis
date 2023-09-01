using oto_auto_c_sharp_server.Entities;

namespace oto_auto_c_sharp_server.Logic.Vehicles.Api;

public interface IVehicleAdapter
{
    Task<IEnumerable<Vehicle>> GetVehiclesAsync();
    Task<IEnumerable<Vehicle>> GetVehiclesByBrandAsync(string brand);
}
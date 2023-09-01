using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Vehicles.Api;
using oto_auto_c_sharp_server.Repository.Vehicle;

namespace oto_auto_c_sharp_server.Logic.Vehicles;

class VehicleMediator: IVehicleAdapter
{
    private readonly IVehicleRepository _vehicleRepository;
    
    public VehicleMediator(IVehicleRepository vehicleRepository)
    {
        _vehicleRepository = vehicleRepository;
    }
    
    
    public Task<IEnumerable<Vehicle>> GetVehiclesAsync()
    {
        return _vehicleRepository.GetVehiclesAsync();
    }

    public Task<IEnumerable<Vehicle>> GetVehiclesByBrandAsync(string brand)
    {
        return _vehicleRepository.GetVehiclesByBrandAsync(brand);
    }
}
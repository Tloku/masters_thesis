using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;
namespace oto_auto_c_sharp_server.Repository.Vehicle;
using Vehicle = oto_auto_c_sharp_server.Entities.Vehicle;

public class VehicleRepository: IVehicleRepository
{

    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _applicationContext;

    public VehicleRepository(MasterContext masterContext, ApplicationContext applicationContext)
    {
        _masterContext = masterContext;
        _applicationContext = applicationContext;
    }
    
    public async Task<IEnumerable<Vehicle>> GetVehiclesAsync()
    {
        return await _applicationContext.Vehicle.ToListAsync();
    }

    public async Task<IEnumerable<Vehicle>> GetVehiclesByBrandAsync(string brand)
    {
        return await _applicationContext.Vehicle
            .Where(vehicle => vehicle.Brand.ToLower().Equals(brand.ToLower()))
            .ToListAsync();
    }

    public async Task<int> CreateVehicle(Vehicle newVehicle)
    {
        var vehicle = _masterContext.Vehicle.Add(newVehicle);
        await _masterContext.SaveChangesAsync();
        return vehicle.Entity.Id;
    }
}
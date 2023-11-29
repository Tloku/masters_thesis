using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;
namespace oto_auto_c_sharp_server.Repository.Vehicle;
using Vehicle = oto_auto_c_sharp_server.Entities.Vehicle;

public class VehicleRepository: IVehicleRepository
{

    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;

    public VehicleRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }
    
    public async Task<IEnumerable<Vehicle>> GetVehiclesAsync()
    {
        return await _replicaContext.Vehicle.ToListAsync();
    }

    public async Task<IEnumerable<Vehicle>> GetVehiclesByBrandAsync(string brand)
    {
        return await _replicaContext.Vehicle
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
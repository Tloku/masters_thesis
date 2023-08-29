using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;
using oto_auto_c_sharp_server.Entities;

namespace oto_auto_c_sharp_server.Repository;

public class VehicleRepository: IVehicleRepository
{

    private readonly OtoAutoContext _context;

    public VehicleRepository(OtoAutoContext context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Vehicle>> GetVehiclesAsync()
    {
        return await _context.Vehicle.ToListAsync();
    }

    public async Task<IEnumerable<Vehicle>> GetVehiclesByBrandAsync(string brand)
    {
        return await _context.Vehicle
            .Where(vehicle => vehicle.Brand == brand)
            .ToListAsync();
    }
}
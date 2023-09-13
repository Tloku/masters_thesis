using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.VehicleType;
using VehicleType = oto_auto_c_sharp_server.Entities.VehicleType;

class VehicleTypeRepository: IVehicleTypeRepository
{
    private readonly OtoAutoContext _context;

    public VehicleTypeRepository(OtoAutoContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<VehicleType>> GetVehicleTypes()
    {
        return await _context.VehicleType.ToListAsync();
    }
}
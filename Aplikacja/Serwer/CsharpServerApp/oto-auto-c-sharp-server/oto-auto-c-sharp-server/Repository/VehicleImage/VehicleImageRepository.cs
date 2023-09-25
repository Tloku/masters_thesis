using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.VehicleImage;

public class VehicleImageRepository: IVehicleImageRepository
{
    private readonly OtoAutoContext _context;

    public VehicleImageRepository(OtoAutoContext context)
    {
        _context = context;
    }
}
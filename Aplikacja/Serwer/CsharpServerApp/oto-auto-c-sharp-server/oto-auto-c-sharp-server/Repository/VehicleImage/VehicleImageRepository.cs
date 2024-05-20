using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.VehicleImage;

public class VehicleImageRepository: IVehicleImageRepository
{
    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _applicationContext;

    public VehicleImageRepository(MasterContext masterContext, ApplicationContext applicationContext)
    {
        _masterContext = masterContext;
        _applicationContext = applicationContext;
    }

    public async Task CreateVehicleImages(IEnumerable<Entities.VehicleImage> vehicleImages)
    {
        _masterContext.VehicleImage.AddRange(vehicleImages);
        await _masterContext.SaveChangesAsync();
    }
}
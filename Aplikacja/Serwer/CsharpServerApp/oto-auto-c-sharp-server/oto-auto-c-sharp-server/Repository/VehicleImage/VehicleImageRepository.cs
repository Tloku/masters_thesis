using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.VehicleImage;

public class VehicleImageRepository: IVehicleImageRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;

    public VehicleImageRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }

    public async Task CreateVehicleImages(IEnumerable<Entities.VehicleImage> vehicleImages)
    {
        _masterContext.VehicleImage.AddRange(vehicleImages);
        await _masterContext.SaveChangesAsync();
    }
}
namespace oto_auto_c_sharp_server.Repository.VehicleImage;

public interface IVehicleImageRepository
{
    Task CreateVehicleImages(IEnumerable<Entities.VehicleImage> vehicleImages);
}
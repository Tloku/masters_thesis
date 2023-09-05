using oto_auto_c_sharp_server.Entities;
using DriveType = oto_auto_c_sharp_server.Entities.DriveType;

namespace oto_auto_c_sharp_server.Logic.Others.Api;

public interface IOthersAdapter
{
    Task<IEnumerable<BodyType>> GetBodyTypes();
    Task<IEnumerable<CarStatus>> GetCarStatuses();
    Task<IEnumerable<DriveType>> GetDriveTypes();
    Task<IEnumerable<Equipment>> GetEquipments();
    Task<IEnumerable<EquipmentType>> GetEquipmentTypes();
    Task<IEnumerable<FuelType>> GetFuelTypes();
    Task<IEnumerable<TransmissionType>> GetTransmissionTypes();
    Task<IEnumerable<VehicleType>> GetVehicleTypes();
    Task<EquipmentType> GetEquipmentsByType(string type);
}
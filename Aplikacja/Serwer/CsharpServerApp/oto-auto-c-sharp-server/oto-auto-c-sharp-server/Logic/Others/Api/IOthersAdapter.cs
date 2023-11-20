using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Others.Models;
using DriveType = oto_auto_c_sharp_server.Entities.DriveType;

namespace oto_auto_c_sharp_server.Logic.Others.Api;

public interface IOthersAdapter
{
    Task<IEnumerable<BodyType>> GetBodyTypes();
    Task<IEnumerable<CarStatus>> GetCarStatuses();
    Task<IEnumerable<DriveType>> GetDriveTypes();
    Task<IEnumerable<Equipment>> GetEquipments();
    Task<IEnumerable<EquipmentTypeDto>> GetEquipmentTypes();
    Task<IEnumerable<FuelType>> GetFuelTypes();
    Task<IEnumerable<TransmissionType>> GetTransmissionTypes();
    Task<IEnumerable<VehicleType>> GetVehicleTypes();
    Task<EquipmentType> GetEquipmentsByType(string type);
    Task<IEnumerable<Equipment>> GetVehicleEquipmentByVehicleId(int vehicleId);
    Task<IEnumerable<string>> GetEquipmentsNameByVehicleId(int vehicleId);
}
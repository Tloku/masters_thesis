using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Others.Api;
using oto_auto_c_sharp_server.Repository.BodyType;
using oto_auto_c_sharp_server.Repository.CarStatus;
using oto_auto_c_sharp_server.Repository.DriveType;
using oto_auto_c_sharp_server.Repository.Equipment;
using oto_auto_c_sharp_server.Repository.EquipmentType;
using oto_auto_c_sharp_server.Repository.FuelType;
using oto_auto_c_sharp_server.Repository.TransmissionType;
using oto_auto_c_sharp_server.Repository.VehicleType;
using DriveType = oto_auto_c_sharp_server.Entities.DriveType;

namespace oto_auto_c_sharp_server.Logic.Others;

class OthersMediator: IOthersAdapter
{
    private readonly IBodyTypeRepository _bodyTypeRepository;
    private readonly ICarStatusRepository _carStatusRepository;
    private readonly IDriveTypeRepository _driveTypeRepository;
    private readonly IEquipmentRepository _equipmentRepository;
    private readonly IEquipmentTypeRepository _equipmentTypeRepository;
    private readonly IFuelTypeRepository _fuelTypeRepository;
    private readonly ITransmissionTypeRepository _transmissionTypeRepository;
    private readonly IVehicleTypeRepository _vehicleTypeRepository;

    public OthersMediator(
        IBodyTypeRepository bodyTypeRepository,
        ICarStatusRepository carStatusRepository,
        IDriveTypeRepository driveTypeRepository,
        IEquipmentRepository equipmentRepository,
        IEquipmentTypeRepository equipmentTypeRepository,
        IFuelTypeRepository fuelTypeRepository,
        ITransmissionTypeRepository transmissionTypeRepository,
        IVehicleTypeRepository vehicleTypeRepository
        )
    {
        _bodyTypeRepository = bodyTypeRepository;
        _carStatusRepository = carStatusRepository;
        _driveTypeRepository = driveTypeRepository;
        _equipmentRepository = equipmentRepository;
        _equipmentTypeRepository = equipmentTypeRepository;
        _fuelTypeRepository = fuelTypeRepository;
        _transmissionTypeRepository = transmissionTypeRepository;
        _vehicleTypeRepository = vehicleTypeRepository;
    }

    public async Task<IEnumerable<BodyType>> GetBodyTypes()
    {
        return await _bodyTypeRepository.GetBodyTypes();
    }

    public async Task<IEnumerable<CarStatus>> GetCarStatuses()
    {
        return await _carStatusRepository.GetCarStatuses();
    }

    public async Task<IEnumerable<DriveType>> GetDriveTypes()
    {
        return await _driveTypeRepository.GetDriveTypes();
    }

    public async Task<IEnumerable<Equipment>> GetEquipments()
    {
        return await _equipmentRepository.GetEquipments();
    }

    public async Task<IEnumerable<EquipmentType>> GetEquipmentTypes()
    {
        return await _equipmentTypeRepository.GetEquipmentTypes();
    }

    public async Task<IEnumerable<FuelType>> GetFuelTypes()
    {
        return await _fuelTypeRepository.GetFuelTypes();
    }

    public async Task<IEnumerable<TransmissionType>> GetTransmissionTypes()
    {
        return await _transmissionTypeRepository.GetTransmissionTypes();
    }

    public async Task<IEnumerable<VehicleType>> GetVehicleTypes()
    {
        return await _vehicleTypeRepository.GetVehicleTypes();
    }

    public async Task<EquipmentType> GetEquipmentsByType(string type)
    {
        if (string.IsNullOrEmpty(type))
        {
            throw new BadHttpRequestException("Given equipment type is null or empty");
        }

        return await _equipmentTypeRepository.GetEquipmentTypeWithEquipmentsByType(type);
    }
}
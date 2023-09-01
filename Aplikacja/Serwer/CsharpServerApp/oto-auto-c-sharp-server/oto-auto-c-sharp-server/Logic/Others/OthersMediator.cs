using oto_auto_c_sharp_server.Logic.Types.Api;
using oto_auto_c_sharp_server.Repository.BodyType;
using oto_auto_c_sharp_server.Repository.CarStatus;
using oto_auto_c_sharp_server.Repository.DriveType;
using oto_auto_c_sharp_server.Repository.Equipment;
using oto_auto_c_sharp_server.Repository.EquipmentType;
using oto_auto_c_sharp_server.Repository.FuelType;
using oto_auto_c_sharp_server.Repository.TransmissionType;
using oto_auto_c_sharp_server.Repository.VehicleType;

namespace oto_auto_c_sharp_server.Logic.Others;

public class OthersMediator: IOthersAdapter
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
}
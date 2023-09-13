using System.Collections;
using Microsoft.AspNetCore.Mvc;
using oto_auto_c_sharp_server.Entities;
using DriveType = oto_auto_c_sharp_server.Entities.DriveType;

namespace oto_auto_c_sharp_server.Logic.Others.Api;

[ApiController]
[Route("api/types")]
public class OthersController: ControllerBase
{
    private readonly IOthersAdapter _othersAdapter;

    public OthersController(IOthersAdapter othersAdapter)
    {
        _othersAdapter = othersAdapter;
    }
    
    [HttpGet("body")]
    public async Task<ActionResult<IEnumerable<BodyType>>> GetBodyTypes()
    {
        var bodyTypes = await _othersAdapter.GetBodyTypes();
        return Ok(bodyTypes);
    }
    
    [HttpGet("car_status")]
    public async Task<ActionResult<IEnumerable<CarStatus>>> GetCarStatuses()
    {
        var carStatuses = await _othersAdapter.GetCarStatuses();
        return Ok(carStatuses);
    }
    
    [HttpGet("drive")]
    public async Task<ActionResult<IEnumerable<DriveType>>> GetDriveTypes()
    {
        var driveTypes = await _othersAdapter.GetDriveTypes();
        return Ok(driveTypes);
    }
    
    [HttpGet("equipment")]
    public async Task<ActionResult<IEnumerable<Equipment>>> GetEquipments()
    {
        var equipments = await _othersAdapter.GetEquipments();
        return Ok(equipments);
    }

    [HttpGet("equipment/{type}")]
    private async Task<ActionResult<EquipmentType>> GetEquipmentsByType(String type)
    {
        var equipments = await _othersAdapter.GetEquipmentsByType(type);
        return Ok(equipments);
    }
    
    [HttpGet("equipment_types")]
    public async Task<ActionResult<IEnumerable<EquipmentType>>> GetEquipmentTypes()
    {
        var equipmentTypes = await _othersAdapter.GetEquipmentTypes();
        return Ok(equipmentTypes);
    }
    
    [HttpGet("fuel")]
    public async Task<ActionResult<IEnumerable<FuelType>>> GetFuelTypes()
    {
        var fuelTypes = await _othersAdapter.GetFuelTypes();
        return Ok(fuelTypes);
    }
    
    [HttpGet("transmission")]
    public async Task<ActionResult<IEnumerable<TransmissionType>>> GetTransmissionTypes()
    {
        var transmissionTypes = await _othersAdapter.GetTransmissionTypes();
        return Ok(transmissionTypes);
    }
    
    [HttpGet("vehicle")]
    public async Task<ActionResult<IEnumerable<VehicleType>>> GetVehicleTypes()
    {
        var vehicleTypes = await _othersAdapter.GetVehicleTypes();
        return Ok(vehicleTypes);
    }
}
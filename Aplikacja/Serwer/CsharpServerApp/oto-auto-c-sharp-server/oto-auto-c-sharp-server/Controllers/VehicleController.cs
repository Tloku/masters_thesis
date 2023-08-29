using Microsoft.AspNetCore.Mvc;
using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Repository;

namespace oto_auto_c_sharp_server.Controllers;

[ApiController]
[Route("api/vehicle")]
public class VehicleController: ControllerBase
{
    private readonly IVehicleRepository _vehicleRepository;
    
    public VehicleController(IVehicleRepository vehicleRepository)
    {
        _vehicleRepository = vehicleRepository;
    }

    [HttpGet()]
    public async Task<ActionResult<IEnumerable<Vehicle>>> GetAllVehicles()
    {
        var vehicles = await _vehicleRepository.GetVehiclesAsync();
        return Ok(vehicles);
    }
    
    [HttpGet("{brand}")]
    public async Task<ActionResult<IEnumerable<Vehicle>>> GetVehiclesByBrand(String brand)
    {
        if (string.IsNullOrEmpty(brand))
        {
            return BadRequest("Given brand is empty");
        }
        
        var vehicles = await _vehicleRepository.GetVehiclesByBrandAsync(brand);
        return Ok(vehicles);
    }
    
}
using Microsoft.AspNetCore.Mvc;
using oto_auto_c_sharp_server.Entities;

namespace oto_auto_c_sharp_server.Logic.Vehicles.Api;

[ApiController]
[Route("api/vehicle")]
class VehicleController: ControllerBase
{
    private readonly IVehicleAdapter _vehicleAdapter;
    
    public VehicleController(IVehicleAdapter vehicleAdapter)
    {
        _vehicleAdapter = vehicleAdapter;
    }

    [HttpGet()]
    public async Task<ActionResult<IEnumerable<Vehicle>>> GetAllVehicles()
    {
        var vehicles = await _vehicleAdapter.GetVehiclesAsync();
        return Ok(vehicles);
    }
    
    [HttpGet("{brand}")]
    public async Task<ActionResult<IEnumerable<Vehicle>>> GetVehiclesByBrand(String brand)
    {
        if (string.IsNullOrEmpty(brand))
        {
            return BadRequest("Given brand is empty");
        }
        
        var vehicles = await _vehicleAdapter.GetVehiclesByBrandAsync(brand);
        return Ok(vehicles);
    }
    
}
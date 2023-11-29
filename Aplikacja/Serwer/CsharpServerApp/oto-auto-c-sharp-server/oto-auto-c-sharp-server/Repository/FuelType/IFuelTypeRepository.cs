namespace oto_auto_c_sharp_server.Repository.FuelType;
using FuelType = oto_auto_c_sharp_server.Entities.FuelType;

public interface IFuelTypeRepository
{
    Task<FuelType?> GetFuelTypeByType(string type);
    Task<IEnumerable<FuelType>> GetFuelTypes();
}
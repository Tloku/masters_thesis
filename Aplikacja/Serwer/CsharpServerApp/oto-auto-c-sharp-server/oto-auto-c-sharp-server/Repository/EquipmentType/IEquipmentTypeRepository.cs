namespace oto_auto_c_sharp_server.Repository.EquipmentType;

using EquipmentType = oto_auto_c_sharp_server.Entities.EquipmentType;

public interface IEquipmentTypeRepository
{
    Task<IEnumerable<EquipmentType>> GetEquipmentTypes();
    Task<EquipmentType> GetEquipmentTypeWithEquipmentsByType(string type);
}
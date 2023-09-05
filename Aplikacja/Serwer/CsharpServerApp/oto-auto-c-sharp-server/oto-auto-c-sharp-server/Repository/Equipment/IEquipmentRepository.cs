namespace oto_auto_c_sharp_server.Repository.Equipment;
using Equipment = oto_auto_c_sharp_server.Entities.Equipment;

public interface IEquipmentRepository
{
    Task<IEnumerable<Equipment>> GetEquipments();
}
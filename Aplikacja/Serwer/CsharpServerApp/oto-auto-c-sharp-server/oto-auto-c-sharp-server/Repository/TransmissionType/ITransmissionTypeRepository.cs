namespace oto_auto_c_sharp_server.Repository.TransmissionType;
using TransmissionType = oto_auto_c_sharp_server.Entities.TransmissionType;

public interface ITransmissionTypeRepository
{
    Task<TransmissionType?> GetTransmissionTypeByType(string type);
    Task<IEnumerable<TransmissionType>> GetTransmissionTypes();
}
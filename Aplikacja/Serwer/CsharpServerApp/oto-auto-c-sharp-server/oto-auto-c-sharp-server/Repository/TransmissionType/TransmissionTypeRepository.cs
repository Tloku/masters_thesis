using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.TransmissionType;
using TransmissionType = oto_auto_c_sharp_server.Entities.TransmissionType;

public class TransmissionTypeRepository: ITransmissionTypeRepository
{
    private readonly OtoAutoContext _context;

    public TransmissionTypeRepository(OtoAutoContext context)
    {
        _context = context;
    }
}
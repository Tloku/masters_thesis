using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.TransmissionType;
using TransmissionType = oto_auto_c_sharp_server.Entities.TransmissionType;

class TransmissionTypeRepository: ITransmissionTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _applicationContext;

    public TransmissionTypeRepository(MasterContext masterContext, ApplicationContext applicationContext)
    {
        _masterContext = masterContext;
        _applicationContext = applicationContext;
    }

    public async Task<TransmissionType?> GetTransmissionTypeByType(string type)
    {
        return await _applicationContext.TransmissionType
            .Where(tt => tt.Type.Equals(type))
            .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<TransmissionType>> GetTransmissionTypes()
    {
        return await _applicationContext.TransmissionType.ToListAsync();
    }
}
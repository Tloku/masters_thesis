using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.TransmissionType;
using TransmissionType = oto_auto_c_sharp_server.Entities.TransmissionType;

class TransmissionTypeRepository: ITransmissionTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;

    public TransmissionTypeRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }

    public async Task<IEnumerable<TransmissionType>> GetTransmissionTypes()
    {
        return await _replicaContext.TransmissionType.ToListAsync();
    }
}
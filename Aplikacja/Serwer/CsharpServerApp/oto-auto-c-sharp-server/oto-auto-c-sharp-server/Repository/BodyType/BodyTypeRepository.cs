using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.BodyType;
using BodyType  = oto_auto_c_sharp_server.Entities.BodyType;

public class BodyTypeRepository: IBodyTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;
    
    public BodyTypeRepository(ReplicaContext replicaContext, MasterContext masterContext)
    {
        _replicaContext = replicaContext;
        _masterContext = masterContext;
    }

    public async Task<IEnumerable<BodyType>> GetBodyTypes()
    {
        return await _replicaContext.BodyType.ToListAsync();
    }
}
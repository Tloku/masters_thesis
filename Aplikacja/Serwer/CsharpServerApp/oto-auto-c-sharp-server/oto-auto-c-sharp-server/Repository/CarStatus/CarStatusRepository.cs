using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.CarStatus;
using CarStatus  = oto_auto_c_sharp_server.Entities.CarStatus;

public class CarStatusRepository: ICarStatusRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;
    public CarStatusRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }

    public async Task<IEnumerable<CarStatus>> GetCarStatuses()
    {
        return await _replicaContext.CarStatus.ToListAsync();
    }
}
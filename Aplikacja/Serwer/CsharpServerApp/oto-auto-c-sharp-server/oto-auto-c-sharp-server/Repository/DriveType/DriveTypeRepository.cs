using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.DriveType;
using DriveType = oto_auto_c_sharp_server.Entities.DriveType;

public class DriveTypeRepository: IDriveTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ReplicaContext _replicaContext;

    public DriveTypeRepository(MasterContext masterContext, ReplicaContext replicaContext)
    {
        _masterContext = masterContext;
        _replicaContext = replicaContext;
    }

    public async Task<IEnumerable<DriveType>> GetDriveTypes()
    {
        return await _replicaContext.DriveType.ToListAsync();
    }
}
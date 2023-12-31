
using Microsoft.EntityFrameworkCore;
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
    
    public async Task<DriveType?> GetDriveTypeByType(string type)
    {
        return await _replicaContext.DriveType
            .Where(dt => dt.Type.Equals(type))
            .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<DriveType>> GetDriveTypes()
    {
        return await _replicaContext.DriveType.ToListAsync();
    }
}
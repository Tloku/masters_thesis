using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.BodyType;
using BodyType  = oto_auto_c_sharp_server.Entities.BodyType;

public class BodyTypeRepository: IBodyTypeRepository
{
    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _applicationContext;
    
    public BodyTypeRepository(ApplicationContext applicationContext, MasterContext masterContext)
    {
        _applicationContext = applicationContext;
        _masterContext = masterContext;
    }

    public async Task<BodyType?> GetBodyTypeByType(string bodyType)
    {
        return await _applicationContext.BodyType
            .Where(bt => bt.Type.Equals(bodyType))
            .FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<BodyType>> GetBodyTypes()
    {
        return await _applicationContext.BodyType.ToListAsync();
    }
}
using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.BodyType;
using BodyType  = oto_auto_c_sharp_server.Entities.BodyType;

public class BodyTypeRepository: IBodyTypeRepository
{
    private readonly OtoAutoContext _context;

    public BodyTypeRepository(OtoAutoContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<BodyType>> GetBodyTypes()
    {
        return await _context.BodyType.ToListAsync();
    }
}
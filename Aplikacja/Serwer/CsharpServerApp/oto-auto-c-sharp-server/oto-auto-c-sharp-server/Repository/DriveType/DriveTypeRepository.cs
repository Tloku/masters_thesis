using System.Data.Entity;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.DriveType;
using DriveType = oto_auto_c_sharp_server.Entities.DriveType;

public class DriveTypeRepository: IDriveTypeRepository
{
    private readonly OtoAutoContext _context;

    public DriveTypeRepository(OtoAutoContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<DriveType>> GetDriveTypes()
    {
        return await _context.DriveType.ToListAsync();
    }
}
namespace oto_auto_c_sharp_server.Repository.DriveType;
using DriveType = oto_auto_c_sharp_server.Entities.DriveType;

public interface IDriveTypeRepository
{
    Task<IEnumerable<DriveType>> GetDriveTypes();
}
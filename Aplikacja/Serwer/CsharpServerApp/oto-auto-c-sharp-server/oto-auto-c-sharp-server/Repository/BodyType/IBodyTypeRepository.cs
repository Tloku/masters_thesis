namespace oto_auto_c_sharp_server.Repository.BodyType;

using BodyType  = oto_auto_c_sharp_server.Entities.BodyType;

public interface IBodyTypeRepository
{
    Task<BodyType?> GetBodyTypeByType(string bodyType);
    
    Task<IEnumerable<BodyType>> GetBodyTypes();
}
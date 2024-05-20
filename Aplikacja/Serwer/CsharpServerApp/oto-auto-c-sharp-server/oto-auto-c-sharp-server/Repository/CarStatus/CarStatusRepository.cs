using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.CarStatus;
using CarStatus  = oto_auto_c_sharp_server.Entities.CarStatus;

public class CarStatusRepository: ICarStatusRepository
{
    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _applicationContext;
    public CarStatusRepository(MasterContext masterContext, ApplicationContext applicationContext)
    {
        _masterContext = masterContext;
        _applicationContext = applicationContext;
    }

    public async Task<IEnumerable<CarStatus>> GetCarStatuses()
    {
        return await _applicationContext.CarStatus.ToListAsync();
    }

    public async Task<CarStatus?> GetCarStatus(string status)
    {
        return await _applicationContext.CarStatus
            .Where(cs => cs.Status.Equals(status))
            .FirstOrDefaultAsync();
    }
}
namespace oto_auto_c_sharp_server.Repository.CarStatus;

using CarStatus  = oto_auto_c_sharp_server.Entities.CarStatus;

public interface ICarStatusRepository
{
    Task<IEnumerable<CarStatus>> GetCarStatuses();
    Task<CarStatus?> GetCarStatus(string status);
}
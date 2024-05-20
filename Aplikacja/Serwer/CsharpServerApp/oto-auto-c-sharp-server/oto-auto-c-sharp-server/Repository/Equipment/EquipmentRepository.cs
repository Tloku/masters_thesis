using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

namespace oto_auto_c_sharp_server.Repository.Equipment;
using Equipment = oto_auto_c_sharp_server.Entities.Equipment;

class EquipmentRepository: IEquipmentRepository
{
    private readonly MasterContext _masterContext;
    private readonly ApplicationContext _applicationContext;

    public EquipmentRepository(MasterContext masterContext, ApplicationContext applicationContext)
    {
        _masterContext = masterContext;
        _applicationContext = applicationContext;
    }

    public async Task<IEnumerable<Equipment>> GetEquipments()
    {
        return await _applicationContext.Equipment.ToListAsync();
    }
}
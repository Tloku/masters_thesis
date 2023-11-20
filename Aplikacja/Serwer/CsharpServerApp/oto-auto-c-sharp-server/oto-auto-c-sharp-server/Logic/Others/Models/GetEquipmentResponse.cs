namespace oto_auto_c_sharp_server.Logic.Others.Models;

public class GetEquipmentResponse
{
    public GetEquipmentResponse(IEnumerable<EquipmentTypeDto> equipmentTypes)
    {
        EquipmentTypes = equipmentTypes;
    }

    public IEnumerable<EquipmentTypeDto> EquipmentTypes { get; }
}
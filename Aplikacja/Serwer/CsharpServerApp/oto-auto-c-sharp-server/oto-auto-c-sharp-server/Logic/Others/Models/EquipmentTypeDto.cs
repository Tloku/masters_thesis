namespace oto_auto_c_sharp_server.Logic.Others.Models;

public class EquipmentTypeDto
{
    public string Type { get; set; }
    public IEnumerable<EquipmentDto> Equipments { get; set; }
}
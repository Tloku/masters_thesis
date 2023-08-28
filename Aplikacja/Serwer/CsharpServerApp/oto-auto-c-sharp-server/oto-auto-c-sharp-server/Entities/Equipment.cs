using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

public class Equipment
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    [ForeignKey("EquipmentTypeId")]
    public EquipmentType EquipmentType { get; set; }

    public Equipment(string name, EquipmentType equipmentType)
    {
        Name = name;
        EquipmentType = equipmentType;
    }
}
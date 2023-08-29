namespace oto_auto_c_sharp_server.Entities;

public class Equipment
{
    public int Id { get; set; }
    
    public string Name { get; set; }
    
    public int EquipmentTypeId { get; set; }
    
    public EquipmentType EquipmentType { get; set; }

    public Equipment(string name)
    {
        Name = name;
    }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

public class EquipmentType
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    public string Type { get; set; }

    public ICollection<Equipment> Equipments { get; } = new List<Equipment>();

    public EquipmentType(string type)
    {
        Type = type;
    }
}
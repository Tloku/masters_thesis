using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

[Table("equipment")]
public class Equipment
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    
    [Column("name")]
    public string Name { get; set; }
    
    [Column("equipment_type_id")]
    public int EquipmentTypeId { get; set; }
    
    public virtual EquipmentType EquipmentType { get; set; }

    public Equipment(string name)
    {
        Name = name;
    }
}
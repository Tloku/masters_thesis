using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;


[Table("vehicle_equipment")]
public class VehicleEquipment
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    
    [Column("vehicle_id")]
    public int VehicleId { get; set; }
    
    public virtual Vehicle Vehicle { get; set; }
    
    [Column("equipment_id")]
    public int EquipmentId { get; set; }
    
    public virtual Equipment Equipment { get; set; }
}
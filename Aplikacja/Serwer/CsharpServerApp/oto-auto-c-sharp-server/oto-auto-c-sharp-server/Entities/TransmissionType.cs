using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

[Table("transmission_type")]
public class TransmissionType
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    
    [Column("type")]
    public string Type { get; set; }

    public TransmissionType(string type)
    {
        this.Type = type;
    }
}
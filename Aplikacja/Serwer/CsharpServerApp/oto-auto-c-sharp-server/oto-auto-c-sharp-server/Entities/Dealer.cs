using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

[Table("dealer")]
public class Dealer
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    
    [Column("name")]
    public string Name { get; set; }
    
    [Column("site_url")]
    public string SiteUrl { get; set; }
    
    [Column("phone_number")]
    public string PhoneNumber { get; set; }
    
    [Column("is_private")]
    public bool IsPrivate { get; set; }
    
    [Column("address")]
    public string Address { get; set; }
    
    public virtual ICollection<Offer> Offers { get; } = new List<Offer>();
    
    public virtual ICollection<Vehicle> Vehicles { get; } = new List<Vehicle>();
    
    public Dealer(string? name, string phoneNumber, bool isPrivate)
    {
        Name = name;
        PhoneNumber = phoneNumber;
        IsPrivate = isPrivate;
    }
}

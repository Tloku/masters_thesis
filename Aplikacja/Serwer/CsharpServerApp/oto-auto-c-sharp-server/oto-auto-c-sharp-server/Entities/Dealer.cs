using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

public class Dealer
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Name { get; set; }
    
    public string SiteUrl { get; set; }
    public string PhoneNumber { get; set; }
    public bool IsPrivate { get; set; }
    
    public string Address { get; set; }
    
    public ICollection<Offer> Offers { get; } = new List<Offer>();

    public Dealer(string name, string phoneNumber, bool isPrivate)
    {
        Name = name;
        PhoneNumber = phoneNumber;
        IsPrivate = isPrivate;
    }
}

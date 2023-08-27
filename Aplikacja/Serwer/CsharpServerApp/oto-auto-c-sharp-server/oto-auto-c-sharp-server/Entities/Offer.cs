using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

public class Offer
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    [Required]
    public string Name { get; set; }
    
    [Required]
    public DateTime CreationDate { get; set; }
    
    [Required]
    public DateTime ExpirationDate { get; set; }
    
    [Required]
    public string Price { get; set; }
    
    [Required]
    public string Currency { get; set; }
    
    [ForeignKey("VehicleId")]
    public Vehicle VehicleInOffer { get; set; }
    
    public Offer(string name, DateTime creationDate, DateTime expirationDate, string price, string currency)
    {
        Name = name;
        CreationDate = creationDate;
        ExpirationDate = expirationDate;
        Price = price;
        Currency = currency;
    }
}
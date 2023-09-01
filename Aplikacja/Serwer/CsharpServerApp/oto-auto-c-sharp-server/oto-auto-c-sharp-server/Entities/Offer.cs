using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

[Table("offer")]
public class Offer
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    
    [Column("name")]
    public string Name { get; set; }

    [Column("creation_date")]
    public DateTime CreationDate { get; set; }
    
    [Column("expiration_date")]
    public DateTime ExpirationDate { get; set; }
    
    [Column("price")]
    public string Price { get; set; }
    
    [Column("currency")]
    public string Currency { get; set; }
    
    [Column("description")]
    public string Description { get; set; }
    
    [Column("vehicle_id")]
    public int VehicleId { get; set; }
    
    public Vehicle Vehicle { get; set; }
    
    [Column("dealer_id")]
    public int DealerId { get; set; }
    
    public Dealer Dealer { get; set; }
    
    public Offer(string name, DateTime creationDate, DateTime expirationDate, string price, string currency)
    {
        Name = name;
        CreationDate = creationDate;
        ExpirationDate = expirationDate;
        Price = price;
        Currency = currency;
    }
}
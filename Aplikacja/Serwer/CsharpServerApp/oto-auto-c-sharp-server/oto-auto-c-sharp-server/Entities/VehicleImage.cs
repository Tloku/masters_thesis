using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

[Table("vehicle_image")]
public class VehicleImage
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    
    [Column("path_to_image")]
    public string PathToImage { get; set; }

    [Column("is_main_image")]
    public bool IsMainImage { get; set; }
    
    [Column("offer_id")]
    public int OfferId { get; set; }
    
    public virtual Offer Offer { get; set; }
    
    public VehicleImage(string pathToImage, bool isMainImage)
    {
        PathToImage = pathToImage;
        IsMainImage = isMainImage;
    }
}
namespace oto_auto_c_sharp_server.Logic.Offers.Models.FilteredOffers;

public class CarSearchValues
{
    public String? BodyType { get; set; }
    public String? Brand { get; set; }
    public String? Model { get; set; } 
    public String? Generation { get; set; }
    public int? PriceFrom { get; set; }
    public int? PriceTo { get; set; }
    public int? YearFrom{ get; set; } 
    public int? YearTo { get; set; }
    public String? FuelType { get; set; }
    public int? MileageFrom { get; set; }
    public int? MileageTo { get; set; }
}
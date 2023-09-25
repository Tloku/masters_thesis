namespace oto_auto_c_sharp_server.Logic.Offers.Models;

public class OfferCardComponentModel
{
    public int OfferId { get; set; }
    public OfferImage OfferMainImage { get; set; }
    public string OfferTitle { get; set; }
    public string YearOfProduction { get; set; }
    public string Mileage { get; set; }
    public string MileageUnit { get; set; }
    public string FuelType { get; set; }
    public string EngineCapacity { get; set; }
    public string OfferPrice { get; set; }
    public string OfferCurrency { get; set; }
}
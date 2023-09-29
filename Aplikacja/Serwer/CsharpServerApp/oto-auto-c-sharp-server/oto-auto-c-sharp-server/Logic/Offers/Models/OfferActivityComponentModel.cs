namespace oto_auto_c_sharp_server.Logic.Offers.Models;

public class OfferActivityComponentModel
{
    public int OfferId { get; set; }
    public IEnumerable<OfferImage> OfferImages { get; set; }
    public string OfferTitle { get; set; }
    public string OfferDescription { get; set; }
    public string YearOfProduction { get; set; }
    public string FuelType { get; set; }
    public string EngineCapacity { get; set; }
    public string OfferPrice { get; set; }
    public string Mileage { get; set; }
    public IEnumerable<VehicleDetailsRow> VehicleAttributes { get; set; }
    public IEnumerable<string> Equipments { get; set; }

    public OfferActivityComponentModel()
    {
    }

    public OfferActivityComponentModel(int offerId, IEnumerable<OfferImage> offerImages, string offerDescription, string offerTitle, string yearOfProduction, string fuelType, string engineCapacity, string offerPrice, string mileage, IEnumerable<VehicleDetailsRow> vehicleAttributes, IEnumerable<string> equipments)
    {
        OfferId = offerId;
        OfferImages = offerImages;
        OfferTitle = offerTitle;
        YearOfProduction = yearOfProduction;
        FuelType = fuelType;
        OfferDescription = offerDescription;
        EngineCapacity = engineCapacity;
        OfferPrice = offerPrice;
        Mileage = mileage;
        VehicleAttributes = vehicleAttributes;
        Equipments = equipments;
    }
}
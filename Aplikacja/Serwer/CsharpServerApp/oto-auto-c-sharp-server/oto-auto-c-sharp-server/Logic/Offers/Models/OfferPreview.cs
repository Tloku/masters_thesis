namespace oto_auto_c_sharp_server.Logic.Offers.Models;

public record OfferPreview(
     int OfferId,
     OfferImage OfferImage,
     string Title,
     string EngineCapacity,
     string HorsePower,
     string Model,
     bool Highlighted,
     string Mileage,
     string FuelType,
     string DriveType,
     string YearOfProduction,
     Double Duration,
     bool IsPrivateDealer,
     string Price
);
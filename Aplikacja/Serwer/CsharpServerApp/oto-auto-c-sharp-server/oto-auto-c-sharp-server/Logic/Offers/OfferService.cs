using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Offers.Models;
using oto_auto_c_sharp_server.Logic.Others.Api;
using oto_auto_c_sharp_server.Utils;
using DriveType = oto_auto_c_sharp_server.Entities.DriveType;

namespace oto_auto_c_sharp_server.Logic.Offers;

public class OfferService
{
    private readonly IEnumerable<string> vehicleDetailsNames =
        new[] { "BodyType", "CarStatus", "TransmissionType", "DriveType" };
    
    public string MapSpecificValues(string pName, object? value)
    {
        if (vehicleDetailsNames.Contains(pName))
        {
            return GetValueOfGivenObjectFromRepository(value);
        }

        if (value is bool boolVal)
        {
            return boolVal ? "Tak" : "Nie";
        }

        return value.ToString();
    }

    private string GetValueOfGivenObjectFromRepository(object? value)
    {
        if (value is BodyType or DriveType or TransmissionType)
        {
            return (string)value.GetType().GetProperty("Type").GetValue(value, null);
        }

        if (value is CarStatus)
        {
            return (string)value.GetType().GetProperty("Status").GetValue(value, null);
        }

        return (string)value.ToString();
    }


    public OfferPreview MapOfferToOfferPreview(Offer offer)
    {
        return new OfferPreview(
            offer.Id,
            GetMainImage(offer.VehicleImages),
            offer.Name,
            offer.Vehicle.EngineCapacity.ToString(),
            new Random().Next(90, 400).ToString(),
            offer.Vehicle.Model,
            new Random().Next(0, 10) > 5,
            offer.Vehicle.Mileage + " " + offer.Vehicle.MileageUnit,
            offer.Vehicle.FuelType.Type,
            offer.Vehicle.DriveType.Type,
            offer.Vehicle.YearOfProduction,
            DateTime.Now.Subtract(offer.CreationDate).TotalDays,
            offer.Dealer.IsPrivate,
            offer.Price
        );
    }

    private OfferImage GetMainImage(ICollection<VehicleImage> images)
    {
        return images
            .Where(i => i.IsMainImage)
            .Select(i =>
                {
                    var offerImage = new OfferImage
                    {
                        IsMainImage = i.IsMainImage,
                        ImageBytes = ImageLoader.LoadImageFromPath(i.PathToImage)
                    };
                    return offerImage;
                }
            )
            .First();
    }
}
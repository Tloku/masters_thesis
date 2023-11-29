using System.Text;
using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer;

namespace oto_auto_c_sharp_server.Logic.Offers;

public class OfferImagesCreator
{
    private const string PATH_TO_FILE = "D:\\Studia\\Magisterka\\Dodatki\\car-images-dataset\\Cars Dataset\\saved\\";


    public IEnumerable<VehicleImage> CreateVehicleImages(IEnumerable<OfferImages> requestOfferImages, int offerId)
    {
        return requestOfferImages
            .Select(requestOfferImage =>
                CreateVehicleImage(requestOfferImage, offerId)
            )
            .ToList();
    }

    private VehicleImage CreateVehicleImage(OfferImages offerImage, int offerId)
    {
        var fileName = GenerateUuidAsName();
        var filePath = PATH_TO_FILE + fileName;
        var vehicleImage = new VehicleImage
        {
            PathToImage = filePath,
            IsMainImage = offerImage.IsMainImage,
            OfferId = offerId
        };
        
        SaveImageToDisk(offerImage, filePath);
        
        return vehicleImage;
    }

    private string GenerateUuidAsName()
    {
        return Guid.NewGuid().ToString().Replace("-", "") + ".jpg";
    }
    
    private void SaveImageToDisk(OfferImages offerImage, string filePath)
    {
        var newBlob = DeleteBlobPrefixAndDecodeImage(offerImage.Blob);
        try
        {
            File.WriteAllBytes(filePath, newBlob);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error saving image: {ex.Message}");
        }   
    }

    private byte[] DeleteBlobPrefixAndDecodeImage(string offerImageBlob)
    {
        var newBlob = offerImageBlob.Replace("data:image/jpeg;base64,", "");
        return Convert.FromBase64String(newBlob);
    }
}
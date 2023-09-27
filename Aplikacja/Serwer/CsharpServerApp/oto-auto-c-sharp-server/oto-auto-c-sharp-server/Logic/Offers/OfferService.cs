using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Others.Api;
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
            return GetValueOfGivenObjectFromRepository(pName, value);
        }

        if (value is bool boolVal)
        {
            return boolVal ? "Tak" : "Nie";
        }

        return value.ToString();
    }

    private string GetValueOfGivenObjectFromRepository(string pName, object? value)
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
}
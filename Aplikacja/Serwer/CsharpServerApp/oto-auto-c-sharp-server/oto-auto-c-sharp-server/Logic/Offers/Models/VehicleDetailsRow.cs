namespace oto_auto_c_sharp_server.Logic.Offers.Models;

public class VehicleDetailsRow
{
    public string Attribute { get; set; }
    public string Value { get; set; }

    public VehicleDetailsRow(string attribute, string value)
    {
        Attribute = attribute;
        Value = value;
    }
}
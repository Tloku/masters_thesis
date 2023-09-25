namespace oto_auto_c_sharp_server.Logic.Offers.Models;

public class VehicleDetailsRow
{
    private string Attribute { get; set; }
    private string Value { get; set; }

    public VehicleDetailsRow(string attribute, string value)
    {
        Attribute = attribute;
        Value = value;
    }
}
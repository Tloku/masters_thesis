using oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer.Equipments;

namespace oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer;

public class CreateOfferRequest
{
    public AdditionalTechnicalDataForm? AdditionalTechnicalDataForm { get; set; }
    public BasicInfo? BasicInfo { get; set; }
    public DealerDataForm? DealerDataForm { get; set; }
    public EquipmentTypeForm? EquipmentTypeForm { get; set; }
    public MainFeatures? MainFeatures { get; set; }
    public IEnumerable<OfferImages>? OfferImages { get; set; }
    public PriceDataForm? PriceDataForm { get; set; }
    public TechnicalDataForm? TechnicalDataForm { get; set; }
    public VehicleDescription? VehicleDescription { get; set; }
    public VehicleType? VehicleType { get; set; }
}
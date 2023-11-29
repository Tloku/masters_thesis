namespace oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer;

public class CreateOfferResponse
{
    public int OfferId { get; set; }

    public CreateOfferResponse(int offerId)
    {
        OfferId = offerId;
    }
}

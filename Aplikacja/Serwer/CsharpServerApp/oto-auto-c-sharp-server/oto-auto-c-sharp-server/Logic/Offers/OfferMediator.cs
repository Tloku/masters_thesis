using System.Reflection;
using AutoMapper;
using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Offers.Api;
using oto_auto_c_sharp_server.Logic.Offers.Models;
using oto_auto_c_sharp_server.Repository.Offer;
using oto_auto_c_sharp_server.Utils;

namespace oto_auto_c_sharp_server.Logic.Offers;

class OfferMediator : IOfferAdapter
{
    private readonly IOfferRepository _offerRepository;
    private readonly IMapper _mapper;
    private readonly OfferService _service = new();
    
    public OfferMediator(IOfferRepository offerRepository, IMapper mapper)
    {
        _offerRepository = offerRepository;
        _mapper = mapper;
    }
    
    public async Task<IEnumerable<Offer>> GetAllOffers()
    {
        return await _offerRepository.GetAllOffers();
    }

    public async Task<IEnumerable<Offer>> GetOffersWithVehicles()
    {
        return await _offerRepository.GetOffersWithVehicles();
    }

    public async Task<Offer?> GetOfferWithVehicleByOfferId(int offerId)
    {
        return await _offerRepository.GetOfferWithVehicleByOfferId(offerId);
    }

    public async Task<List<OfferCardComponentModel>> GetAwardedOffers()
    {
        
        var offers = await _offerRepository.GetAwardedOffers();
        return offers
            .Select(SetOfferCardComponentModelFromOfferEntity)
            .ToList();
    }

    public async Task<OfferActivityComponentModel> GetOfferById(int offerId)
    {
        var offer = await _offerRepository.GetOfferById(offerId);
        return SetOfferActivityComponentModelFromOffer(offer);
    }

    private OfferActivityComponentModel SetOfferActivityComponentModelFromOffer(Offer offer)
    {
        var offerActivityComponentModel = _mapper.Map<OfferActivityComponentModel>(offer);
        var offerImages = offer.VehicleImages
            .Select(image => new OfferImage
            {
                ImageBytes = ImageLoader.LoadImageFromPath(image.PathToImage),
                IsMainImage = image.IsMainImage
            })
            .ToList();


        var vehicleDetailsRow = CreateVehicleDetailsRows(offer.Vehicle);

        offerActivityComponentModel.OfferImages = offerImages;
        offerActivityComponentModel.VehicleAttributes = vehicleDetailsRow;

        return offerActivityComponentModel;
    }
    
    private IEnumerable<VehicleDetailsRow> CreateVehicleDetailsRows(Vehicle vehicle)
    {
        var vehicleDetailsRow = new List<VehicleDetailsRow>();
        var vehicleAttributeType = typeof(VehicleAttributes);
        var vehicleType = vehicle.GetType();
        
        foreach (var p in vehicleAttributeType.GetFields( BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic))
        {
            var label = (string) p.GetValue(null)!;
            var propertyInfo = vehicleType.GetProperty(p.Name);
            var value = propertyInfo?.GetValue(vehicle);
            var valueToSave = _service.MapSpecificValues(p.Name, value);
            vehicleDetailsRow.Add(new VehicleDetailsRow(label, valueToSave));
        }

        return vehicleDetailsRow;
    }
    
    private OfferCardComponentModel SetOfferCardComponentModelFromOfferEntity(Offer offer)
    {
        var offerCardModel = _mapper.Map<OfferCardComponentModel>(offer);
        var offerImages = offer.VehicleImages
            .Where(image => image.IsMainImage)
            .Select(image => new OfferImage
            {
                ImageBytes = ImageLoader.LoadImageFromPath(image.PathToImage),
                IsMainImage = image.IsMainImage
            })
            .FirstOrDefault();
        offerCardModel.OfferMainImage = offerImages ?? new OfferImage();
        return offerCardModel;
    }


    
}
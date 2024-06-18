using System.Drawing.Printing;
using System.Reflection;
using AutoMapper;
using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Offers.Api;
using oto_auto_c_sharp_server.Logic.Offers.Models;
using oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer;
using oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer.Equipments;
using oto_auto_c_sharp_server.Logic.Offers.Models.FilteredOffers;
using oto_auto_c_sharp_server.Logic.Others.Api;
using oto_auto_c_sharp_server.Repository.BodyType;
using oto_auto_c_sharp_server.Repository.CarStatus;
using oto_auto_c_sharp_server.Repository.Dealer;
using oto_auto_c_sharp_server.Repository.DriveType;
using oto_auto_c_sharp_server.Repository.FuelType;
using oto_auto_c_sharp_server.Repository.Offer;
using oto_auto_c_sharp_server.Repository.TransmissionType;
using oto_auto_c_sharp_server.Repository.Vehicle;
using oto_auto_c_sharp_server.Repository.VehicleEquipment;
using oto_auto_c_sharp_server.Repository.VehicleImage;
using oto_auto_c_sharp_server.Repository.VehicleType;
using oto_auto_c_sharp_server.Utils;
using VehicleType = oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer.VehicleType;

namespace oto_auto_c_sharp_server.Logic.Offers;

class OfferMediator : IOfferAdapter
{
    private readonly IOfferRepository _offerRepository;
    private readonly IDealerRepository _dealerRepository;
    private readonly IVehicleRepository _vehicleRepository;
    private readonly IVehicleTypeRepository _vehicleTypeRepository;
    private readonly IBodyTypeRepository _bodyTypeRepository;
    private readonly IFuelTypeRepository _fuelTypeRepository;
    private readonly ITransmissionTypeRepository _transmissionTypeRepository;
    private readonly IDriveTypeRepository _driveTypeRepository;
    private readonly ICarStatusRepository _carStatusRepository;
    private readonly IVehicleEquipmentRepository _vehicleEquipmentRepository;
    private readonly IVehicleImageRepository _vehicleImageRepository;
    private readonly IMapper _mapper;
    private readonly OfferService _service = new();
    private readonly IOthersAdapter _othersAdapter;
    private readonly OfferImagesCreator _offerImagesCreator = new();
    
    public OfferMediator(
        IOfferRepository offerRepository,
        IMapper mapper,
        IOthersAdapter othersAdapter,
        IDealerRepository dealerRepository,
        IVehicleRepository vehicleRepository,
        IVehicleTypeRepository vehicleTypeRepository,
        ITransmissionTypeRepository transmissionTypeRepository,
        IFuelTypeRepository fuelTypeRepository,
        IBodyTypeRepository bodyTypeRepository,
        IDriveTypeRepository driveTypeRepository, 
        ICarStatusRepository carStatusRepository, 
        IVehicleEquipmentRepository vehicleEquipmentRepository,
        IVehicleImageRepository vehicleImageRepository
        )
    {
        _offerRepository = offerRepository;
        _mapper = mapper;
        _othersAdapter = othersAdapter;
        _dealerRepository = dealerRepository;
        _vehicleRepository = vehicleRepository;
        _vehicleTypeRepository = vehicleTypeRepository;
        _transmissionTypeRepository = transmissionTypeRepository;
        _fuelTypeRepository = fuelTypeRepository;
        _bodyTypeRepository = bodyTypeRepository;
        _driveTypeRepository = driveTypeRepository;
        _carStatusRepository = carStatusRepository;
        _vehicleEquipmentRepository = vehicleEquipmentRepository;
        _vehicleImageRepository = vehicleImageRepository;
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
        return await SetOfferActivityComponentModelFromOffer(offer);
    }

    public async Task<CreateOfferResponse> CreateOffer(CreateOfferRequest request)
    {
        var dealerId = await CreateOrUpdateDealer(request.DealerDataForm);
        var vehicleId = await CreateVehicle(request, dealerId);
        await CreateVehicleEquipments(vehicleId, request.EquipmentTypeForm);
        var offerId = await CreateNewOffer(dealerId, vehicleId, request.VehicleDescription, request.PriceDataForm);
        await CreateOfferImages(offerId, request.OfferImages);
        
        return new CreateOfferResponse(offerId);
    }

    public async Task<IEnumerable<OfferPreview>> GetFilteredOffers(CarSearchValues carSearchValues)
    {
        var offers = await _offerRepository.GetFilteredOffer(carSearchValues);

        return offers
            .Select(o => _service.MapOfferToOfferPreview(o))
            .ToList();
    }

    private async Task CreateOfferImages(int offerId, IEnumerable<OfferImages> requestOfferImages)
    {
        var vehicleImages = _offerImagesCreator.CreateVehicleImages(requestOfferImages, offerId);
        await _vehicleImageRepository.CreateVehicleImages(vehicleImages);
    }
    

    private async Task<int> CreateNewOffer(int dealerId, int vehicleId, VehicleDescription requestVehicleDescription, PriceDataForm requestPriceDataForm)
    {
        var offer = new Offer()
        {
            Name = requestVehicleDescription.Title,
            Description = requestVehicleDescription.Description,
            Price = requestPriceDataForm.Price,
            Currency = requestPriceDataForm.Currency,
            CreationDate = DateTime.Now,
            ExpirationDate = DateTime.Now.AddDays(30),
            DealerId = dealerId,
            VehicleId = vehicleId
        };

        return await _offerRepository.CreateOffer(offer);
    }

    private async Task CreateVehicleEquipments(int vehicleId, EquipmentTypeForm requestEquipmentTypeForm)
    {
        var values = RetrieveVehicleEquipmentFromRequest(requestEquipmentTypeForm);
        var vehicleEquipments = CreateVehicleEquipmentsFromValues(vehicleId, values);
        await _vehicleEquipmentRepository.CreateVehicleEquipments(vehicleEquipments);
    }

    private IEnumerable<VehicleEquipment> CreateVehicleEquipmentsFromValues(int vehicleId, List<List<Values>> values)
    {
        var vehicleEquipments = new List<VehicleEquipment>();
        
        foreach (var value in values)
        {
            foreach (var equipment in value)
            {
                vehicleEquipments.Add(new VehicleEquipment()
                {
                    EquipmentId = equipment.Id,
                    VehicleId = vehicleId
                });
            }
        }

        return vehicleEquipments;
    }

    private List<List<Values>> RetrieveVehicleEquipmentFromRequest(EquipmentTypeForm request)
    {
        return request.EquipmentTypes
            .Select(
                et => et.Equipment.Values
                    .Where(value => value.Value)
                    .ToList()
            ).ToList();
    }
    
    private async Task<int> CreateVehicle(CreateOfferRequest request, int dealerId)
    {
        var newVehicle = new Vehicle();
        newVehicle.DealerId = dealerId;
        await SetVehicleType(newVehicle, request.VehicleType);
        SetBasicInfo(newVehicle, request.BasicInfo);
        SetMainFeatures(newVehicle, request.MainFeatures);
        await SetTechnicalDataForm(newVehicle, request.TechnicalDataForm);
        await SetAdditionalTechnicalDataForm(newVehicle, request.AdditionalTechnicalDataForm);
        await SetCarStatus(newVehicle);
        SetRemainingNullFieldsWithMockData(newVehicle);
        return await _vehicleRepository.CreateVehicle(newVehicle);
    }

    private void SetRemainingNullFieldsWithMockData(Vehicle newVehicle)
    {
        newVehicle.CityFuelUsage = 12.0;
        newVehicle.OnTheRoadFuelUsage = 10.0;
        newVehicle.OriginCountry = "Poland";
    }

    private async Task SetCarStatus(Vehicle newVehicle)
    {
        var carStatus = await _carStatusRepository.GetCarStatus("new");
        newVehicle.CarStatusId = carStatus.Id;
    }

    private async Task SetAdditionalTechnicalDataForm(Vehicle newVehicle, AdditionalTechnicalDataForm requestAdditionalTechnicalDataForm)
    {
        // requestAdditionalTechnicalDataForm.Drive = "RWD"
        var driveType = await _driveTypeRepository.GetDriveTypeByType("RWD");
        newVehicle.DriveTypeId = driveType.Id;
        newVehicle.SitsNumber = int.Parse(requestAdditionalTechnicalDataForm.NumberOfSeats);
        newVehicle.Co2Emission = int.Parse(requestAdditionalTechnicalDataForm.Emission);
        newVehicle.ColorType = requestAdditionalTechnicalDataForm.ColorType;
    }

    private async Task SetTechnicalDataForm(Vehicle newVehicle, TechnicalDataForm requestTechnicalDataForm)
    {
        var bodyType = await _bodyTypeRepository.GetBodyTypeByType("Sedan");
        var fuelType = await _fuelTypeRepository.GetFuelTypeByType("Petrol");
        var transmissionType = await _transmissionTypeRepository.GetTransmissionTypeByType("automatic");

        newVehicle.BodyTypeId = bodyType.Id;
        newVehicle.FuelTypeId = fuelType.Id;
        newVehicle.TransmissionTypeId = transmissionType.Id;
        newVehicle.Brand = requestTechnicalDataForm.Brand;
        newVehicle.Color = requestTechnicalDataForm.Color;
        newVehicle.EngineCapacity = int.Parse(requestTechnicalDataForm.EngineCapacity);
        newVehicle.Generation = requestTechnicalDataForm.Generation;
        newVehicle.Model = requestTechnicalDataForm.Model;
        newVehicle.DoorsNumber = int.Parse(requestTechnicalDataForm.NumberOfDoors);
        newVehicle.YearOfProduction = requestTechnicalDataForm.YearOfProduction;
    }

    private void SetMainFeatures(Vehicle newVehicle, MainFeatures requestMainFeatures)
    {
        newVehicle.IsImported = requestMainFeatures.Imported;
        newVehicle.HasCrashed = requestMainFeatures.Destroyed;
    }

    private void SetBasicInfo(Vehicle newVehicle, BasicInfo requestBasicInfo)
    {
        newVehicle.Mileage = requestBasicInfo.mileage;
        newVehicle.MileageUnit = "km";
        // newVehicle.Vin = requestBasicInfo.vin <- this field is not existing in database, therefore is not set
    }

    private async Task SetVehicleType(Vehicle newVehicle, VehicleType requestVehicleType)
    {
        var constType = "car";
        var type = await _vehicleTypeRepository.GetVehicleTypeByType(constType);
        if (type != null) newVehicle.VehicleTypeId = type.Id;
    }

    private async Task<int> CreateOrUpdateDealer(DealerDataForm requestDealerDataForm)
    {
        var dealer = await _dealerRepository.GetDealerByPhoneNumber(requestDealerDataForm.PhoneNumber);

        if (dealer == null)
        {
            return await _dealerRepository.CreateDealer(requestDealerDataForm);
        }

        return await _dealerRepository.UpdateDealer(dealer, requestDealerDataForm);
    }

    private async Task<OfferActivityComponentModel> SetOfferActivityComponentModelFromOffer(Offer offer)
    {
        var offerActivityComponentModel = _mapper.Map<OfferActivityComponentModel>(offer);
        offerActivityComponentModel.Equipments = await _othersAdapter.GetEquipmentsNameByVehicleId(offer.Vehicle.Id);
        offerActivityComponentModel.VehicleAttributes = CreateVehicleDetailsRows(offer.Vehicle);
        offerActivityComponentModel.OfferImages = offer.VehicleImages
            .Select(image => new OfferImage
            {
                ImageBytes = ImageLoader.LoadImageFromPath(image.PathToImage),
                IsMainImage = image.IsMainImage
            })
            .ToList();

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
            .Select(image =>
            {
                image.ImageBytes ??= "";
                return image;
            })
            .FirstOrDefault();
        offerCardModel.OfferMainImage = offerImages ?? new OfferImage();
        return offerCardModel;
    }


    
}
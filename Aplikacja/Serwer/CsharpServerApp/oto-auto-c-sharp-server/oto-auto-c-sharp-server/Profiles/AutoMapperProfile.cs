using AutoMapper;
using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Offers.Models;

namespace oto_auto_c_sharp_server.Profiles;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Offer, OfferCardComponentModel>()
            .ForMember(dest => dest.Mileage,
                opt => opt.MapFrom(src => src.Vehicle.Mileage))
            .ForMember(dest => dest.YearOfProduction,
                opt => opt.MapFrom(src => src.Vehicle.YearOfProduction))
            .ForMember(dest => dest.MileageUnit,
                opt => opt.MapFrom(src => src.Vehicle.MileageUnit))
            .ForMember(dest => dest.OfferTitle,
                opt => opt.MapFrom(src => src.Name))
            .ForMember(dest => dest.FuelType,
                opt => opt.MapFrom(src => src.Vehicle.FuelTypeId))
            .ForMember(dest => dest.EngineCapacity,
                opt => opt.MapFrom(src => src.Vehicle.EngineCapacity))
            .ForMember(dest => dest.OfferPrice,
                opt => opt.MapFrom(src => src.Price))
            .ForMember(dest => dest.OfferCurrency,
                opt => opt.MapFrom(src => src.Currency))
            .ForMember(dest => dest.OfferId,  
                opt => opt.MapFrom(src => src.Id));

        CreateMap<Offer, OfferActivityComponentModel>()
            .ForMember(dest => dest.Mileage,
                opt => opt.MapFrom(src => src.Vehicle.Mileage + " " + src.Vehicle.MileageUnit))
            .ForMember(dest => dest.OfferId,
                opt => opt.MapFrom(src => src.Id))
            .ForMember(dest => dest.OfferPrice,
                opt => opt.MapFrom(src => src.Price + " " + src.Currency))
            .ForMember(dest => dest.OfferTitle,
                opt => opt.MapFrom(src => src.Name))
            .ForMember(dest => dest.YearOfProduction,
                opt => opt.MapFrom(src => src.Vehicle.YearOfProduction))
            .ForMember(dest => dest.FuelType,
                opt => opt.MapFrom(src => src.Vehicle.FuelType.Type))
            .ForMember(dest => dest.EngineCapacity,
                opt => opt.MapFrom(src => src.Vehicle.EngineCapacity + " cm3"));


    }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

[Table("vehicle")]
public class Vehicle
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Column("id")]
    public int Id { get; set; }
    
    [Column("is_imported")]
    public bool IsImported { get; set; }
    
    [Column("has_registration_number")]
    public bool HasRegistrationNumber { get; set; }
    
    [Column("brand")]
    public string Brand { get; set; }
    
    [Column("model")]
    public string Model { get; set; }
    
    [Column("generation")]
    public string Generation { get; set; }
    
    [Column("year_of_production")]
    public string YearOfProduction { get; set; }
    
    [Column("mileage")]
    public string Mileage { get; set; }
    
    [Column("mileage_unit")]
    public string MileageUnit { get; set; }

    [Column("engine_capacity")]
    public int EngineCapacity { get; set; }
    
    [Column("city_fuel_usage")]
    public double CityFuelUsage { get; set; }
    
    [Column("on_the_road_fuel_usage")]
    public double OnTheRoadFuelUsage { get; set; }
    
    [Column("co2_emission")]
    public int Co2Emission { get; set; }

    [Column("doors_number")]
    public int DoorsNumber { get; set; }

    [Column("sits_number")]
    public int SitsNumber { get; set; }
    
    [Column("color")]
    public string Color { get; set; }
    
    [Column("color_type")]
    public string ColorType { get; set; }
    
    [Column("origin_country")]
    public string OriginCountry { get; set; }
    
    [Column("registered_in_poland")]
    public bool RegisteredInPoland { get; set; }
    
    [Column("has_crashed")]
    public bool HasCrashed { get; set; }
    
    [Column("body_type_id")]
    public int BodyTypeId { get; set; }
    
    public virtual BodyType BodyType { get; set; }
    
    [Column("car_status_id")]
    public int CarStatusId { get; set; }
    
    public virtual CarStatus CarStatus { get; set; }
    
    [Column("fuel_type_id")]
    public int FuelTypeId { get; set; }
    
    public virtual FuelType FuelType { get; set; }

    [Column("transmission_type_id")]
    public int TransmissionTypeId { get; set; }
    
    public virtual TransmissionType TransmissionType { get; set; }
    
    [Column("drive_type_id")]
    public int DriveTypeId { get; set; }
    
    public virtual DriveType DriveType { get; set; }
    
    [Column("vehicle_type_id")]
    public int VehicleTypeId { get; set; }
    
    public virtual VehicleType VehicleType { get; set; }

    public virtual Offer? Offer { get; set; }
    
    [Column("dealer_id")]
    public int DealerId { get; set; }

    public virtual Dealer Dealer { get; set; }

    public Vehicle() {}
    
    public Vehicle(bool isImported, bool hasRegistrationNumber, string brand, string model, string generation, string yearOfProduction, string mileage, string mileageUnit, int co2Emission, int doorsNumber, int sitsNumber, string color, string colorType, string originCountry, bool registeredInPoland, bool hasCrashed, int engineCapacity)
    {
        IsImported = isImported;
        HasRegistrationNumber = hasRegistrationNumber;
        Brand = brand;
        Model = model;
        Generation = generation;
        YearOfProduction = yearOfProduction;
        Mileage = mileage;
        MileageUnit = mileageUnit;
        Co2Emission = co2Emission;
        DoorsNumber = doorsNumber;
        SitsNumber = sitsNumber;
        Color = color;
        ColorType = colorType;
        OriginCountry = originCountry;
        RegisteredInPoland = registeredInPoland;
        HasCrashed = hasCrashed;
        EngineCapacity = engineCapacity;
    }

    public Vehicle(bool isImported, bool hasRegistrationNumber, string brand, string model, string generation, string yearOfProduction, string mileage, string mileageUnit, float cityFuelUsage, float onTheRoadFuelUsage, int co2Emission, int doorsNumber, int sitsNumber, string color, string colorType, string originCountry, bool registeredInPoland, bool hasCrashed, int engineCapacity)
    {
        IsImported = isImported;
        HasRegistrationNumber = hasRegistrationNumber;
        Brand = brand;
        Model = model;
        Generation = generation;
        YearOfProduction = yearOfProduction;
        Mileage = mileage;
        MileageUnit = mileageUnit;
        CityFuelUsage = cityFuelUsage;
        OnTheRoadFuelUsage = onTheRoadFuelUsage;
        Co2Emission = co2Emission;
        DoorsNumber = doorsNumber;
        SitsNumber = sitsNumber;
        Color = color;
        ColorType = colorType;
        OriginCountry = originCountry;
        RegisteredInPoland = registeredInPoland;
        HasCrashed = hasCrashed;
        EngineCapacity = engineCapacity;
    }
}
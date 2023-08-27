using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace oto_auto_c_sharp_server.Entities;

public class Vehicle
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    public string VehicleType { get; set; }
    
    public bool IsImported { get; set; }
    
    public bool HasRegistrationNumber { get; set; }
    
    public string Brand { get; set; }
    
    public string Model { get; set; }
    
    public string Version { get; set; }
    
    public string Generation { get; set; }
    
    public string YearOfProduction { get; set; }
    
    public string Mileage { get; set; }
    
    public string MileageUnit { get; set; }
    
    [ForeignKey("FuelId")]
    public FuelType  FuelType { get; set; }

    [ForeignKey("TransmissionId")]
    public TransmissionType TransmissionType { get; set; }
    
    public string DriveType { get; set; }
    
    public float CityFuelUsage { get; set; }
    
    public float onTheRoadFuelUsage { get; set; }

    [ForeignKey("BodyId")]
    public BodyType BodyType { get; set; }
    
    public int Co2Emission { get; set; }

    public int DoorsNumber { get; set; }

    public int SitsNumber { get; set; }
    
    public string Color { get; set; }
    
    public string ColorType { get; set; }
    
    public string OriginCountry { get; set; }
    
    public bool RegisteredInPoland { get; set; }
    
    public bool hasCrashed { get; set; }
    
    public string status { get; set; }

    public Vehicle(bool isImported, bool hasRegistrationNumber, string brand, string model, string version, string generation, string yearOfProduction, string mileage, string mileageUnit, string driveType, float cityFuelUsage, float onTheRoadFuelUsage, int co2Emission, int doorsNumber, int sitsNumber, string color, string colorType, string originCountry, bool registeredInPoland, bool hasCrashed, string status)
    {
        IsImported = isImported;
        HasRegistrationNumber = hasRegistrationNumber;
        Brand = brand;
        Model = model;
        Version = version;
        Generation = generation;
        YearOfProduction = yearOfProduction;
        Mileage = mileage;
        MileageUnit = mileageUnit;
        DriveType = driveType;
        CityFuelUsage = cityFuelUsage;
        this.onTheRoadFuelUsage = onTheRoadFuelUsage;
        Co2Emission = co2Emission;
        DoorsNumber = doorsNumber;
        SitsNumber = sitsNumber;
        Color = color;
        ColorType = colorType;
        OriginCountry = originCountry;
        RegisteredInPoland = registeredInPoland;
        this.hasCrashed = hasCrashed;
        this.status = status;
    }
}
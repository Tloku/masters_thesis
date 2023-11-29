namespace oto_auto_c_sharp_server.Logic.Offers.Models.CreateOffer;

public record TechnicalDataForm(
    string? BodyType,
    string? Brand,
    string? Color,
    string? EngineCapacity,
    string? FuelType,
    string? Generation,
    string? HorsePower,
    string? Model,
    string? NumberOfDoors,
    string? Transmission,
    string? Version,
    string? YearOfProduction
    );
using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.Entities;
using DriveType = oto_auto_c_sharp_server.Entities.DriveType;

namespace oto_auto_c_sharp_server.DbContexts;

public class OtoAutoContext : DbContext
{
    public OtoAutoContext(DbContextOptions<OtoAutoContext> options) : base(options)
    {
    }

    public DbSet<Offer> Offer { get; set; } = null!;
    public DbSet<Vehicle> Vehicle { get; set; } = null!;
    public DbSet<BodyType> BodyType { get; set; } = null!;
    public DbSet<FuelType> FuelType { get; set; } = null!;
    public DbSet<TransmissionType> TransmissionType { get; set; } = null!;
    public DbSet<Dealer> Dealer { get; set; } = null!;
    public DbSet<EquipmentType> EquipmentType { get; set; } = null!;
    public DbSet<Equipment> Equipment { get; set; } = null!;
    public DbSet<CarStatus> CarStatus { get; set; } = null!;
    public DbSet<DriveType> DriveType { get; set; } = null!;
    public DbSet<VehicleType> VehicleType { get; set; } = null!;
    public DbSet<VehicleImage> VehicleImage { get; set; } = null!;
    public DbSet<VehicleEquipment> VehicleEquipment { get; set; } = null!;
}
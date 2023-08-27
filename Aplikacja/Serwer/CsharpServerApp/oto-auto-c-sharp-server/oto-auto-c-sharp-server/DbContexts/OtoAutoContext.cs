using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.Entities;

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
}
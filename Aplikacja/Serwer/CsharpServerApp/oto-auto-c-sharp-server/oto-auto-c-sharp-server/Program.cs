using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;
using oto_auto_c_sharp_server.Logic.Dealers;
using oto_auto_c_sharp_server.Logic.Dealers.Api;
using oto_auto_c_sharp_server.Logic.Offers;
using oto_auto_c_sharp_server.Logic.Offers.Api;
using oto_auto_c_sharp_server.Logic.Others;
using oto_auto_c_sharp_server.Logic.Others.Api;
using oto_auto_c_sharp_server.Logic.Vehicles;
using oto_auto_c_sharp_server.Logic.Vehicles.Api;
using oto_auto_c_sharp_server.Repository.BodyType;
using oto_auto_c_sharp_server.Repository.CarStatus;
using oto_auto_c_sharp_server.Repository.Dealer;
using oto_auto_c_sharp_server.Repository.DriveType;
using oto_auto_c_sharp_server.Repository.Equipment;
using oto_auto_c_sharp_server.Repository.EquipmentType;
using oto_auto_c_sharp_server.Repository.FuelType;
using oto_auto_c_sharp_server.Repository.Offer;
using oto_auto_c_sharp_server.Repository.TransmissionType;
using oto_auto_c_sharp_server.Repository.Vehicle;
using oto_auto_c_sharp_server.Repository.VehicleType;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

builder.Services.AddControllers(options =>
{
    options.ReturnHttpNotAcceptable = true;
}).AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = 
    Newtonsoft.Json.ReferenceLoopHandling.Ignore);

builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", 
        options => 
                    options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddDbContext<OtoAutoContext>(options => 
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
    );

builder.Services.AddScoped<IVehicleAdapter, VehicleMediator>();
builder.Services.AddScoped<IOfferAdapter, OfferMediator>();
builder.Services.AddScoped<IDealerAdapter, DealerMediator>();
builder.Services.AddScoped<IOthersAdapter, OthersMediator>();

builder.Services.AddScoped<IVehicleRepository, VehicleRepository>();
builder.Services.AddScoped<IOfferRepository, OfferRepository>();
builder.Services.AddScoped<IBodyTypeRepository, BodyTypeRepository>();
builder.Services.AddScoped<ITransmissionTypeRepository, TransmissionTypeRepository>();
builder.Services.AddScoped<IVehicleTypeRepository, VehicleTypeRepository>();
builder.Services.AddScoped<IEquipmentRepository, EquipmentRepository>();
builder.Services.AddScoped<IEquipmentTypeRepository, EquipmentTypeRepository>();
builder.Services.AddScoped<IDealerRepository, DealerRepository>();
builder.Services.AddScoped<ICarStatusRepository, CarStatusRepository>();
builder.Services.AddScoped<IDriveTypeRepository, DriveTypeRepository>();
builder.Services.AddScoped<IFuelTypeRepository, FuelTypeRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();

app.UseRouting();

app.UseEndpoints(endpoints => {
    endpoints.MapControllers();
});

app.Run();
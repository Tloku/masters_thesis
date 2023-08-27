using Microsoft.EntityFrameworkCore;
using oto_auto_c_sharp_server.DbContexts;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", 
        options => 
                    options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddDbContext<OtoAutoContext>(options => 
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
    );

var app = builder.Build();

app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());


app.MapGet("/", () => "Hello World!");

app.UseHttpsRedirection();

app.Run();
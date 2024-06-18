using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using oto_auto_c_sharp_server.Logic.Offers;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using oto_auto_c_sharp_server.Entities;
using oto_auto_c_sharp_server.Logic.Offers.Models;
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

namespace oto_auto_c_sharp_server.Tests.Logic.Offers
{
    [TestClass]
    public class OfferMediatorTest
    {
        private Mock<IOfferRepository> offerRepository;
        private Mock<IMapper> mapper;
        private Mock<IOthersAdapter> othersAdapter;
        private Mock<IDealerRepository> dealerRepository;
        private Mock<IVehicleRepository> vehicleRepository;
        private Mock<IVehicleTypeRepository> vehicleTypeRepository;
        private Mock<ITransmissionTypeRepository> transmissionTypeRepository;
        private Mock<IFuelTypeRepository> fuelTypeRepository;
        private Mock<IBodyTypeRepository> bodyTypeRepository;
        private Mock<IDriveTypeRepository> driveTypeRepository;
        private Mock<ICarStatusRepository> carStatusRepository;
        private Mock<IVehicleEquipmentRepository> vehicleEquipmentRepository;
        private Mock<IVehicleImageRepository> vehicleImageRepository;
        private OfferMediator _offerMediator;

        [TestInitialize]
        public void SetUp()
        {
            _offerMediator = new OfferMediator(
            );
        }

        [TestMethod]
        public async Task GetAwardedOffers_ShouldReturnListOfOfferCardComponentModel()
        {
            // Arrange
            var awardedOffers = new List<Offer>
            {

            };
            offerRepository
                .Setup(repo => repo.GetAwardedOffers())
                .ReturnsAsync(awardedOffers);
            foreach (var offer in awardedOffers)
            {
                var offerCardComponentModel = new OfferCardComponentModel
                {
                };
                mapper
                    .Setup(m => m.Map<OfferCardComponentModel>(offer))
                    .Returns(offerCardComponentModel);
            }
            // Act
            var result = await _offerMediator.GetAwardedOffers();
            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(awardedOffers.Count, result.Count);
            offerRepository.Verify(repo => repo.GetAwardedOffers(), Times.Once);
        }
    }
}
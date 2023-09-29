package org.masters_thesis.otoauto.model

data class OfferActivityComponentModel(
    var offerId: Int,
    var offerImages: List<OfferImage>,
    var offerTitle: String,
    var offerDescription: String,
    var yearOfProduction: String,
    var fuelType: String,
    var engineCapacity: String,
    var offerPrice: String,
    var mileage: String,
    var vehicleAttributes: List<VehicleDetailsRow>,
    var equipments: List<String>,
)

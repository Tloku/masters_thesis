package org.masters_thesis.otoauto.model

data class OfferCardComponentModel(
    var offerId: Int,
    var engineCapacity: String,
    var fuelType: String,
    var mileage: String,
    var mileageUnit: String,
    var offerCurrency: String,
    var offerMainImage: OfferImage,
    var offerPrice: String,
    var offerTitle: String,
    var yearOfProduction: String
)
package org.masters_thesis.otoauto.model

data class OfferCardComponentModel(
    var offerImage: ByteArray,
    var offerTitle: String,
    var yearOfProduction: String,
    var mileage: String,
    var fuelType: String,
    var engineCapacity: String,
    var offerPrice: String,
    var offerCurrency: String
)
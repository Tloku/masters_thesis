package org.masters_thesis.otoauto.model

data class OfferModel(
    var id: Int,
    var name: String,
    var creationDate: String,
    var expirationDate: String,
    var price: String,
    var currency: String,
    var description: String,
    var vehicleId: Int,
    var vehicle: VehicleModel,
    var dealerId: Int
)

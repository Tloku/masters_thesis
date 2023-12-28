package org.masters_thesis.otoauto.model

data class FilterOffersModel(
    val id: Int?,
    val bodyType: String,
    val brand: String,
    val priceFrom: String,
    val priceTo: String,
    val yearFrom: String,
    val yearTo: String,
    val fuelType: String,
    val mileageFrom: String,
    val mileageTo: String
)
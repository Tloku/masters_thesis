package org.masters_thesis.otoauto.model

import android.widget.ImageView
import android.widget.TextView

data class OfferCardComponentResponse(
    var offerImage: ByteArray,
    var offerTitle: String,
    var yearOfProduction: String,
    var mileage: String,
    var fuelType: String,
    var engineCapacity: String,
    var offerPrice: String,
    var offerCurrency: String
)
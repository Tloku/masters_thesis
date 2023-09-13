package org.masters_thesis.otoauto.model

import android.widget.ImageView
import android.widget.TextView

data class OfferCardComponentModel(
    var offerImageView: ImageView,
    var offerTitleTextView: TextView,
    var yearOfProductionTextView: TextView,
    var mileageTextView: TextView,
    var fuelTypeTextView: TextView,
    var engineCapacityTextView: TextView,
    var offerPriceTextView: TextView,
    var offerCurrencyTextView: TextView
)

package org.masters_thesis.otoauto.components.offerCardComponent

import android.widget.ImageView
import com.bumptech.glide.Glide
import org.masters_thesis.otoauto.logic.offer.OfferCardService
import org.masters_thesis.otoauto.model.OfferCardComponentModel


class OfferCardComponentService() {
    private val offerCardService = OfferCardService()

    fun setOfferCardDatasetOfferCardData(offer: OfferCardComponentModel?) {
        if (offer == null) {
            throw Exception()
        }
        addSeparatorAfterTextView(listOf(offer.yearOfProduction, offer.mileage, offer.fuelType));
    }

    fun setOfferCardMainImage(mainImageView: ImageView) {
        Glide
            .with(mainImageView.context)
            .asBitmap()
            .load("https://autogen.pl/news/2022/m4csl1.jpg")
            .into(mainImageView)
    }

    private fun addSeparatorAfterTextView(textViews: List<String>): List<String> {
        return textViews
            .map { value: String -> value.plus(" -") }
    }
}
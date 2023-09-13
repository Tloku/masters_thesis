package org.masters_thesis.otoauto.components

import android.widget.ImageView
import android.widget.TextView
import com.bumptech.glide.Glide
import org.masters_thesis.otoauto.service.OfferCardService
import org.masters_thesis.otoauto.model.OfferCardComponentModel

class OfferCardComponent(var model: OfferCardComponentModel) {
    private val offerCardService = OfferCardService()

    init {
        initOfferCard()
    }

    private fun initOfferCard() {
        addSeparatorAfterTextView(model.yearOfProductionTextView, model.mileageTextView, model.fuelTypeTextView);
        setOfferCardMainImage(model.offerImageView);
    }

    private fun setOfferCardMainImage(mainImageView: ImageView) {
        Glide
            .with(mainImageView.context)
            .asBitmap()
            .load("https://autogen.pl/news/2022/m4csl1.jpg")
            .into(mainImageView)
    }

    private fun addSeparatorAfterTextView(vararg textViews: TextView) {
        textViews
            .map { value: TextView -> value.text = value.text.toString().plus(" -")}
    }
}
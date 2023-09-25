package org.masters_thesis.otoauto.components.offerCardComponent

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.widget.ImageView
import org.masters_thesis.otoauto.model.OfferCardComponentModel
import java.util.Base64


class OfferCardComponentService() {
    fun setOfferCardDatasetOfferCardData(offer: OfferCardComponentModel?) {
        if (offer == null) {
            throw Exception()
        }
        addSeparatorAfterTextView(listOf(offer.yearOfProduction, offer.mileage, offer.fuelType));
    }

    fun setOfferCardMainImage(mainImageView: ImageView, imageBytes: String) {
        if (imageBytes == null) {
            return
        }

        val imageBytesDecoded = Base64.getDecoder().decode(imageBytes)
        var bmp: Bitmap = BitmapFactory.decodeByteArray(imageBytesDecoded, 0, imageBytesDecoded.size);
        mainImageView.setImageBitmap(bmp);
    }

    private fun addSeparatorAfterTextView(textViews: List<String>): List<String> {
        return textViews
            .map { value: String -> value.plus(" -") } // TODO poprawić bo nie działa
    }
}
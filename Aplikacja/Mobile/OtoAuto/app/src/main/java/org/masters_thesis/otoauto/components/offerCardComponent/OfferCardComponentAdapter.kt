package org.masters_thesis.otoauto.components.offerCardComponent

import android.content.Intent
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import org.masters_thesis.otoauto.activities.OfferViewActivity
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.model.OfferCardComponentModel

class OfferCardComponentAdapter(private val offerCards: List<OfferCardComponentModel?>) : RecyclerView.Adapter<OfferCardComponentAdapter.ViewHolder>(){
    private val offerCardComponentService: OfferCardComponentService = OfferCardComponentService()

    class ViewHolder(itemView: View): RecyclerView.ViewHolder(itemView) {
        var parent = itemView.findViewById<LinearLayout>(R.id.offerCard);
        var offerCardMainImageView = itemView.findViewById<ImageView>(R.id.offerMainImage)
        var offerTitleTextView = itemView.findViewById<TextView>(R.id.offerTitleTextView)
        var yearOfProductionTextView = itemView.findViewById<TextView>(R.id.yearOfProductionTextView)
        var mileageTextView = itemView.findViewById<TextView>(R.id.mileageTextView)
        var fuelTypeTextView = itemView.findViewById<TextView>(R.id.fuelTypeTextView)
        var engineCapacityTextView = itemView.findViewById<TextView>(R.id.engineCapacityTextView)
        var offerPriceTextView = itemView.findViewById<TextView>(R.id.offerPriceTextView)
        var offerCurrencyTextView = itemView.findViewById<TextView>(R.id.offerCurrencyTextView)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.offer_card, parent, false)

        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val offerCardComponentModel: OfferCardComponentModel = offerCards[position] ?: return
        Log.w("Offer component","ImageBytes of offer with id: " + offerCardComponentModel.offerId)
        if (offerCardComponentModel.offerMainImage.imageBytes == null) {
            return
        }

        offerCardComponentService.setOfferCardMainImage(holder.offerCardMainImageView, offerCardComponentModel.offerMainImage.imageBytes)
        holder.offerTitleTextView.text = offerCardComponentModel.offerTitle
        holder.yearOfProductionTextView.text = offerCardComponentModel.yearOfProduction
        holder.mileageTextView.text = offerCardComponentModel.mileage
        holder.fuelTypeTextView.text = offerCardComponentModel.fuelType
        holder.engineCapacityTextView.text = offerCardComponentModel.engineCapacity
        holder.offerPriceTextView.text = offerCardComponentModel.offerPrice
        holder.offerCurrencyTextView.text = offerCardComponentModel.offerCurrency

        holder.parent.setOnClickListener { v ->
            val intent = Intent(v.context, OfferViewActivity::class.java)
            intent.putExtra("offerId", offerCardComponentModel.offerId)
            v.context.startActivity(intent)
        }
    }

    override fun getItemCount(): Int {
        return offerCards.size
    }


}
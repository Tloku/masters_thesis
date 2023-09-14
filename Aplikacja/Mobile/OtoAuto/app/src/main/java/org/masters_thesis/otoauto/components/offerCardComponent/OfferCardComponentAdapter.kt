package org.masters_thesis.otoauto.components.offerCardComponent

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.model.OfferCardComponentModel

class OfferCardComponentAdapter(private val offerCards: List<OfferCardComponentModel?>) : RecyclerView.Adapter<OfferCardComponentAdapter.ViewHolder>(){
    private val offerCardComponentService: OfferCardComponentService = OfferCardComponentService()

    class ViewHolder(itemView: View): RecyclerView.ViewHolder(itemView) {
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

        offerCardComponentService.setOfferCardMainImage(holder.offerCardMainImageView);
        holder.offerTitleTextView.text = offerCardComponentModel.offerTitle;
        holder.yearOfProductionTextView.text = offerCardComponentModel.yearOfProduction;
        holder.mileageTextView.text = offerCardComponentModel.mileage;
        holder.fuelTypeTextView.text = offerCardComponentModel.fuelType;
        holder.engineCapacityTextView.text = offerCardComponentModel.engineCapacity;
        holder.offerPriceTextView.text = offerCardComponentModel.offerPrice;
        holder.offerCurrencyTextView.text = offerCardComponentModel.offerCurrency;
    }

    override fun getItemCount(): Int {
        return offerCards.size
    }


}
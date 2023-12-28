package org.masters_thesis.otoauto.components.followedFilters

import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.google.gson.Gson
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.activities.FilteredOffersActivity
import org.masters_thesis.otoauto.model.FilterOffersModel

class FollowedFiltersAdapter(private val followedFilters: List<FilterOffersModel>):
    RecyclerView.Adapter<FollowedFiltersAdapter.ViewHolder>() {

    class ViewHolder(itemView: View): RecyclerView.ViewHolder(itemView) {
        var parent = itemView.findViewById<LinearLayout>(R.id.followedFiltersListRow)
        var bodyTypeTextView = parent.findViewById<TextView>(R.id.bodyType)
        var brandTextView = parent.findViewById<TextView>(R.id.brand)
        var priceFromTextView = parent.findViewById<TextView>(R.id.priceFrom)
        var priceToTextView = parent.findViewById<TextView>(R.id.priceTo)
        var yearFromTextView = parent.findViewById<TextView>(R.id.yearFrom)
        var yearToTextView = parent.findViewById<TextView>(R.id.yearTo)
        var fuelTypeTextView = parent.findViewById<TextView>(R.id.fuelType)
        var mileageFromTextView = parent.findViewById<TextView>(R.id.mileageFrom)
        var mileageToTextView = parent.findViewById<TextView>(R.id.mileageTo)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.followed_filters_list_row, parent, false)

        return ViewHolder(view)
    }

    override fun getItemCount(): Int {
        return followedFilters.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val followedFilter = followedFilters[position]

        holder.bodyTypeTextView.text = followedFilter.bodyType
        holder.brandTextView.text = followedFilter.brand
        holder.priceFromTextView.text = followedFilter.priceFrom
        holder.priceToTextView.text = followedFilter.priceTo
        holder.yearFromTextView.text = followedFilter.priceTo
        holder.yearToTextView.text = followedFilter.priceTo
        holder.fuelTypeTextView.text = followedFilter.priceTo
        holder.mileageFromTextView.text = followedFilter.priceTo
        holder.mileageToTextView.text = followedFilter.priceTo

        holder.parent.setOnClickListener { v ->
            val intent = Intent(v.context, FilteredOffersActivity::class.java)
            intent.putExtra("filters", Gson().toJson(followedFilter))
            v.context.startActivity(intent)
        }
    }
}
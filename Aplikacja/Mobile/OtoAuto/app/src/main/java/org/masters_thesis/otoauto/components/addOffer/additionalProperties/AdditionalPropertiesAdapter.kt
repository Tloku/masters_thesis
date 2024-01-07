package org.masters_thesis.otoauto.components.addOffer.additionalProperties

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import android.widget.Toast
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.RecyclerView
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.model.equipments.Values

class AdditionalPropertiesAdapter(private val context: Context, private var equipment: MutableList<Values>): RecyclerView.Adapter<AdditionalPropertiesAdapter.ViewHolder>() {

    class ViewHolder(itemView: View): RecyclerView.ViewHolder(itemView) {
        var parent = itemView.findViewById<LinearLayout>(R.id.vehicleEquipmentChips)
        var equipmentChip = parent.findViewById<TextView>(R.id.equipmentChip)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.vehicle_equipment_chips, parent, false)

        return ViewHolder(view)
    }

    override fun getItemCount(): Int {
        return equipment.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        var value = equipment[position]
        holder.equipmentChip.text = value.name
        holder.parent.background = if (value.value)
            ContextCompat.getDrawable(context, R.drawable.border_light_blue) else
            ContextCompat.getDrawable(context, R.drawable.border_light_gray)

        holder.parent.setOnClickListener { v ->
            value.value = !value.value;
            holder.parent.background = if (value.value)
                ContextCompat.getDrawable(context, R.drawable.border_light_blue) else
                ContextCompat.getDrawable(context, R.drawable.border_light_gray)
            notifyItemChanged(position)
        }
    }

    fun updateEquipmentList(values: MutableList<Values>) {
        equipment = values
        notifyItemRangeChanged(0, values.size)
    }
}
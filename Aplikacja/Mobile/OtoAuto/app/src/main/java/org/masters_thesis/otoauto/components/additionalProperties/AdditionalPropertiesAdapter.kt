package org.masters_thesis.otoauto.components.additionalProperties

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.RecyclerView
import org.masters_thesis.otoauto.R

class AdditionalPropertiesAdapter(private val context: Context, private val equipment: HashMap<String, Boolean>): RecyclerView.Adapter<AdditionalPropertiesAdapter.ViewHolder>() {

    class ViewHolder(itemView: View): RecyclerView.ViewHolder(itemView) {
        var parent = itemView.findViewById<LinearLayout>(R.id.vehicleEquipmentChips)
        var equipmentChip = parent.findViewById<TextView>(R.id.equipmentChip)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.fragment_additional_properties_component, parent, false)

        return AdditionalPropertiesAdapter.ViewHolder(view)
    }

    override fun getItemCount(): Int {
        return equipment.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val value = equipment.keys.elementAt(position)
        holder.equipmentChip.text = value
        holder.parent.setOnClickListener { v ->
            val isSet: Boolean = !equipment.getValue(value)
            equipment.put(value, isSet)
            notifyItemChanged(position)
            holder.parent.background = if (isSet)
                ContextCompat.getDrawable(context, R.color.lightBlue) else
                ContextCompat.getDrawable(context, R.color.lightGray)

        }
    }
}
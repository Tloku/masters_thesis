package org.masters_thesis.otoauto.components.offerView

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView
import org.masters_thesis.otoauto.R

class VehicleEquipmentListAdapter(private val context: Context, private val vehicleEquipment: List<String>) : BaseAdapter() {


    override fun getView(position: Int, view: View?, viewGroup: ViewGroup?): View {
        val equipmentName = getItem(position)
        val inflater = LayoutInflater.from(context)
        val view = inflater.inflate(R.layout.vehicle_equipment_list_row, null)
        val nameTextView = view.findViewById<TextView>(R.id.equipmentName)
        nameTextView.text = equipmentName
        return view
    }

    override fun getItem(position: Int): String {
        return vehicleEquipment[position]
    }

    override fun getCount(): Int {
        return vehicleEquipment.count()
    }

    override fun getItemId(position: Int): Long {
        return position.toLong();
    }
}
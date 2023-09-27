package org.masters_thesis.otoauto.components.vehicleDetailsList

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.model.VehicleDetailsRow

class VehicleDetailsListAdapter(private val context: Context, private val vehicleDetailsRows: List<VehicleDetailsRow>) : BaseAdapter() {


    override fun getView(position: Int, view: View?, viewGroup: ViewGroup?): View {
        val vehicleDetailsRow = getItem(position)
        val inflater = LayoutInflater.from(context)
        val view = inflater.inflate(R.layout.vehicle_details_list_row, null)
        val textViewAttribute = view.findViewById<TextView>(R.id.rowAttribute)
        val textViewValue = view.findViewById<TextView>(R.id.rowValue)
        textViewAttribute.text = vehicleDetailsRow.attribute
        textViewValue.text = vehicleDetailsRow.value
        return view
    }

    override fun getItem(position: Int): VehicleDetailsRow {
        return vehicleDetailsRows[position]
    }

    override fun getCount(): Int {
        return vehicleDetailsRows.count()
    }

    override fun getItemId(position: Int): Long {
        return position.toLong();
    }
}
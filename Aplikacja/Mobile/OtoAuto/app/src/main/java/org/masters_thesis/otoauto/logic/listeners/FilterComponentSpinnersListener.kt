package org.masters_thesis.otoauto.logic.listeners

import android.app.Activity
import android.view.View
import android.widget.AdapterView
import org.masters_thesis.otoauto.activities.MainActivity

class FilterComponentSpinnersListener(private val activity: Activity):
    AdapterView.OnItemSelectedListener {

    override fun onItemSelected(parent: AdapterView<*>?, view: View?, position: Int, id: Long) {
        val selectedItem = parent?.getItemAtPosition(position).toString()
    }

    override fun onNothingSelected(adapterView: AdapterView<*>?) {
    }
}
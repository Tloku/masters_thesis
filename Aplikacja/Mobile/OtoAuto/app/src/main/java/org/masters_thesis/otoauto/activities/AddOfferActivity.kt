package org.masters_thesis.otoauto.activities

import android.os.Bundle
import android.widget.LinearLayout
import androidx.appcompat.app.ActionBar
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.Toolbar
import androidx.lifecycle.Observer
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import org.masters_thesis.otoauto.R
import org.masters_thesis.otoauto.components.additionalProperties.AdditionalPropertiesAdapter
import org.masters_thesis.otoauto.logic.equipment.EquipmentService
import org.masters_thesis.otoauto.logic.equipment.models.GetEquipmentResponse
import org.masters_thesis.otoauto.model.equipments.Values
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class AddOfferActivity : AppCompatActivity() {
    private val equipmentService: EquipmentService = EquipmentService()
    private lateinit var  additionalPropertiesAdapter: AdditionalPropertiesAdapter
    private lateinit var equipmentRecyclerView: RecyclerView;
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_add_offer)

        setEquipmentRecyclerView()
        setToolbar()
    }

    private fun setToolbar() {
        val toolbar: Toolbar = findViewById(R.id.addOfferToolbar)
        setSupportActionBar(toolbar)

        supportActionBar?.title = "Stwórz ogłoszenie"
        val actionBar: ActionBar? = supportActionBar
        actionBar?.setDisplayHomeAsUpEnabled(true)
        actionBar?.setDisplayShowHomeEnabled(true)

        toolbar.setNavigationOnClickListener {
            onBackPressed()
        }
    }

    private fun setEquipmentRecyclerView() {
        val additionalPropertiesLayout = findViewById<LinearLayout>(R.id.additionalPropertiesComponent)
        equipmentRecyclerView = additionalPropertiesLayout.findViewById<RecyclerView>(R.id.equipmentRecyclerView)
        equipmentRecyclerView.layoutManager = GridLayoutManager(this, 2)
        additionalPropertiesAdapter = AdditionalPropertiesAdapter(this, mutableListOf())
        equipmentRecyclerView.adapter = additionalPropertiesAdapter
        fetchEquipmentValues()
    }


    private fun fetchEquipmentValues() {
        val call = equipmentService.getEquipmentValues()
        handleEquipmentResponse(call)
    }

    private fun handleEquipmentResponse(call: Call<GetEquipmentResponse?>) {
        call.enqueue(object : Callback<GetEquipmentResponse?> {
            override fun onResponse(
                call: Call<GetEquipmentResponse?>,
                response: Response<GetEquipmentResponse?>
            ) {
                if (response.isSuccessful && response.body() != null) {
                    val equipmentResponse: GetEquipmentResponse = response.body()!!
                    val values = equipmentService.mapEquipmentResponseToValues(equipmentResponse)
                    additionalPropertiesAdapter.updateEquipmentList(values)
                }
            }

            override fun onFailure(call: Call<GetEquipmentResponse?>, t: Throwable) {
                println(t.printStackTrace());
            }
        })
    }


}
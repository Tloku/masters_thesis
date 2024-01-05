package org.masters_thesis.otoauto.logic.equipment

import org.masters_thesis.otoauto.logic.equipment.models.GetEquipmentResponse
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class EquipmentService {
    private val equipmentMediator: EquipmentMediator = EquipmentMediator()


    fun getOfferCardCall() {
        val call = equipmentMediator.getEquipmentTypes()

        call.enqueue(object : Callback<GetEquipmentResponse?> {
            override fun onResponse(
                call: Call<GetEquipmentResponse?>,
                response: Response<GetEquipmentResponse?>
            ) {
                if (response.isSuccessful && response.body() != null) {

                }
            }

            override fun onFailure(call: Call<GetEquipmentResponse?>, t: Throwable) {
                
            }
        })
    }
}
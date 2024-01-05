package org.masters_thesis.otoauto.logic.equipment.api

import org.masters_thesis.otoauto.logic.equipment.models.GetEquipmentResponse
import retrofit2.Call
import retrofit2.http.GET

interface EquipmentController {

    @GET("/api/types/equipment_types")
    fun getEquipmentTypes(): Call<GetEquipmentResponse?>
}
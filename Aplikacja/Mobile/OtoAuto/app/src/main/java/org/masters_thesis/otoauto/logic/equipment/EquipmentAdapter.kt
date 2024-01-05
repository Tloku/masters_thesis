package org.masters_thesis.otoauto.logic.equipment

import org.masters_thesis.otoauto.logic.equipment.models.GetEquipmentResponse
import retrofit2.Call


interface EquipmentAdapter {

    fun getEquipmentTypes(): Call<GetEquipmentResponse?>
}
package org.masters_thesis.otoauto.logic.equipment

import org.masters_thesis.otoauto.logic.equipment.models.GetEquipmentResponse
import org.masters_thesis.otoauto.model.equipments.Values
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.lang.RuntimeException


class EquipmentService {
    private val equipmentMediator: EquipmentMediator = EquipmentMediator()


    fun getEquipmentValues(): Call<GetEquipmentResponse?> {
        return equipmentMediator.getEquipmentTypes()
    }

    fun mapEquipmentResponseToValues(equipmentResponse: GetEquipmentResponse): MutableList<Values> {
        return equipmentResponse.equipmentTypes
            .flatMap { et -> et.equipments.map {
                e -> Values(e.id, e.name, false)
            }
        }.toMutableList()
    }
}
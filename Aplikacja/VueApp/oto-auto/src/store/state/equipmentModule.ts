import { EquipmentRestService } from "../..//api/rest-service/equipment-rest.service";
import { EquipmentType } from "../model/create-offer-form.model";
import { EquipmentStateModel } from "../model/equipment-state.model";

const initialEquipmentStateValue: EquipmentStateModel = {
    equipmentTypes: []
}

const equipmentModule = {
    state: () => (initialEquipmentStateValue),
    mutations: {
        getEquipmentTypes(state: EquipmentStateModel, equipmentTypes: EquipmentType[]) {
            state.equipmentTypes = equipmentTypes
        }
    },
    actions: {  
        async getEquipmentTypes(context) {
            const response = await EquipmentRestService.getEquipmentTypes();
            context.commit('getEquipmentTypes', response.data.equipmentTypes as EquipmentType[])
        }
    },
    getters: {
        equipmentTypes(state: EquipmentStateModel): EquipmentType[] {
            return state.equipmentTypes
        }
    }
  }


export default equipmentModule;
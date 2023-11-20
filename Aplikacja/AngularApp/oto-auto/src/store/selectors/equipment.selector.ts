import { Selector } from "@ngxs/store";
import { EquipmentState } from "../states/equipment.state";
import { EquipmentStateModel } from "../model/equipment-state.model";
import { EquipmentType } from "src/api/models/equipment-type";

export class EquipmentSelector {

    @Selector([EquipmentState])
    static equipmentTypes(state: EquipmentStateModel): EquipmentType[] {
        return state.equipmentTypes
    }
}
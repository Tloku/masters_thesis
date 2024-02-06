import { Selector } from "@ngxs/store";
import { EquipmentState } from "./equipment.state";
import { EquipmentStateModel } from "./equipment-state.model";
import { EquipmentType } from "src/api/models/equipment-type";

export class EquipmentSelector {

    @Selector([EquipmentState])
    static equipmentTypes(state: EquipmentStateModel): EquipmentType[] {
        return state.equipmentTypes
    }
}
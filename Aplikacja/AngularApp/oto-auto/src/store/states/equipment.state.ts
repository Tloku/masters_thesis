import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { EquipmentStateModel } from "../model/equipment-state.model";
import { GetEquipmentResponse } from "src/api/models/get-equipments-response";
import { GetEquipmentTypes, GetEquipmentTypesFailure, GetEquipmentTypesSuccess } from "../actions/equipment-actions";
import { EquimpentRestService } from "src/api/rest-service/equipment.rest-service";
import { catchError, map } from "rxjs";

@State<EquipmentStateModel>({
    name: "equipment",
    defaults: {
        equipmentTypes: []
    }
})
@Injectable()
export class EquipmentState { 

    constructor(private _restService: EquimpentRestService) {}

 
    @Action(GetEquipmentTypes)
    getEquipmentTypes(ctx: StateContext<EquipmentStateModel>, action: GetEquipmentTypes) {
        return this._restService.getEquipmentTypes()
            .pipe(
                map((response: GetEquipmentResponse) => ctx.dispatch(new GetEquipmentTypesSuccess(response))),
                catchError(error => ctx.dispatch(new GetEquipmentTypesFailure(error)))
            )
    }
    
    @Action(GetEquipmentTypesSuccess)
    getEquipmentTypeSuccess(ctx: StateContext<EquipmentStateModel>, action: GetEquipmentTypesSuccess) {
        const state = ctx.getState()

        ctx.setState({
            ...state,
            equipmentTypes: action.response.equipmentTypes
        })
    }
}
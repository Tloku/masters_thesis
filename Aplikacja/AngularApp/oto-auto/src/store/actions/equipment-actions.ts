import { GetEquipmentResponse } from "src/api/models/get-equipments-response"

export class GetEquipmentTypes {
    static readonly type: string = '[Get Equipment Types] Get Equipment Types'
    constructor() {}
}

export class GetEquipmentTypesSuccess {
    static readonly type: string = '[Get Equipment Types] Get Equipment Types Success'
    constructor(public response: GetEquipmentResponse) {}
}

export class GetEquipmentTypesFailure {
    static readonly type: string = '[Get Equipment Types] Get Equipment Types Failiure'
    constructor(public error: any) {}
}
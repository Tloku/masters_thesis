import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { GetEquipmentResponse } from "../models/get-equipments-response";

@Injectable()
export class EquimpentRestService {

    constructor(private _http: HttpClient) {}

    getEquipmentTypes(): Observable<GetEquipmentResponse> {
        return this._http.get<GetEquipmentResponse>("http://localhost:5252/api/types/equipment_types")
    }

}
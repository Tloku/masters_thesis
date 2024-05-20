import axios, { AxiosResponse } from "axios";
import { GetEquipmentResponse } from "../models/get-equipments-response";

export class EquipmentRestService {
    private static _http = axios.create({
        baseURL: "http://165.232.117.222:5000/api/types",
        headers: {
          "Content-type": "application/json"
        }
    });

    
    public static getEquipmentTypes(): Promise<AxiosResponse<GetEquipmentResponse>> {
        return this._http.get<GetEquipmentResponse>('/equipment_types');
    }
}


import axios, { AxiosResponse } from "axios";
import { OfferCardComponentModel } from "../../redux/model/offer-card-component.model";

export class OfferRestService {
    private static _http = axios.create({
        baseURL: "http://localhost:5252/api",
        headers: {
          "Content-type": "application/json"
        }
    });

    
    public static getAwardedOffers(): Promise<AxiosResponse<OfferCardComponentModel[]>> {
        return this._http.get<OfferCardComponentModel[]>('/offer/awarded');
    }

}


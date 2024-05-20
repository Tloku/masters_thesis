import { OfferActivityComponentModel, OfferCardComponentModel } from "@/src/store/model/offer-card-component.model";
import axios, { AxiosResponse } from "axios";

export class OfferRestService {
    private static _http = axios.create({
        baseURL: "http://165.232.117.222:5000/api",
        headers: {
          "Content-type": "application/json"
        }
    });

    // public static createOffer(form: CreateOfferFormStateModel): Promise<AxiosResponse<CreateOfferResponse>> {
    //     return this._http.post<CreateOfferResponse>("http://localhost:5252/api/offer/create", form)
    // }
    
    public static getAwardedOffers(): Promise<AxiosResponse<OfferCardComponentModel[]>> {
        return this._http.get<OfferCardComponentModel[]>('/offer/awarded');
    }

    public static getOfferById(offerId: number): Promise<AxiosResponse<OfferActivityComponentModel>> {
        return this._http.get<OfferActivityComponentModel>("http://165.232.117.222:5000/api/offer/" + offerId)
    }
}


import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetAwardedOffersResponse } from "../models/get-awarded-offers-response";
import { HttpClient } from "@angular/common/http";
import { OfferActivityComponentModel, OfferCardComponentModel } from "src/store/model/offer-card-component.model";

@Injectable()
export class OfferRestService {

    constructor(private _http: HttpClient) {}

    getAwardedOffers(): Observable<OfferCardComponentModel[]> {
        return this._http.get<OfferCardComponentModel[]>("http://localhost:5252/api/offer/awarded");
    }

    getOfferById(offerId: number): Observable<OfferActivityComponentModel> {
        return this._http.get<OfferActivityComponentModel>("http://localhost:5252/api/offer/" + offerId)
    }
}
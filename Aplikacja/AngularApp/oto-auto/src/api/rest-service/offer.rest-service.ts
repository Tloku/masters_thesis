import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OfferActivityComponentModel, OfferCardComponentModel } from "src/store/model/offer-card-component.model";
import { CreateOfferFormStateModel } from "../models/form/create-offer-form";
import { CreateOfferResponse } from "../models/create-offer-response";

@Injectable()
export class OfferRestService {

    private _headers= new HttpHeaders()
      .set('content-type', 'application/json');

    constructor(private _http: HttpClient) {}

    getAwardedOffers(): Observable<OfferCardComponentModel[]> {
        return this._http.get<OfferCardComponentModel[]>("http://localhost:5252/api/offer/awarded");
    }

    getOfferById(offerId: number): Observable<OfferActivityComponentModel> {
        return this._http.get<OfferActivityComponentModel>("http://localhost:5252/api/offer/" + offerId)
    }

    createOffer(form: CreateOfferFormStateModel): Observable<CreateOfferResponse> {
        return this._http.post<CreateOfferResponse>("http://localhost:5252/api/offer/create", form, {'headers': this._headers} )
    }

}
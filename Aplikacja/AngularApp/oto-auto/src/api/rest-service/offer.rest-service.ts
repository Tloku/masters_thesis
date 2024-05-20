import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OfferActivityComponentModel, OfferCardComponentModel } from "src/store/offer/offer-card-component.model";
import { CreateOfferFormStateModel } from "../models/form/create-offer-form";
import { CreateOfferResponse } from "../models/create-offer-response";
import { OfferPreview } from "src/store/filtered-offer/filtered-offers-state.model";
import { CarSearchValues } from "src/store/car-search-form/car-search-form.model";

@Injectable()
export class OfferRestService {

    private _headers= new HttpHeaders()
      .set('content-type', 'application/json');

    constructor(private _http: HttpClient) {}

    getAwardedOffers(): Observable<OfferCardComponentModel[]> {
        return this._http.get<OfferCardComponentModel[]>("http://165.232.117.222:5000/api/offer/awarded");
    }

    getOfferById(offerId: number): Observable<OfferActivityComponentModel> {
        return this._http.get<OfferActivityComponentModel>("http://165.232.117.222:5000/api/offer/" + offerId)
    }

    createOffer(form: CreateOfferFormStateModel): Observable<CreateOfferResponse> {
        return this._http.post<CreateOfferResponse>("http://165.232.117.222:5000/api/offer/create", form, {'headers': this._headers} )
    }

    getFilteredOffers(carSearchValues: CarSearchValues): Observable<OfferPreview[]> {
        return this._http.post<OfferPreview[]>("http://165.232.117.222:5000/api/offer/filtered", carSearchValues, {'headers': this._headers})
    }

}
import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { OfferActivityComponentModel, OfferCardComponentModel, OfferCardComponentStateModel } from "../model/offer-card-component.model";
import { GetAwardedOffers, GetAwardedOffersFailure, GetAwardedOffersSuccess, GetOfferById, GetOfferByIdFailure, GetOfferByIdSuccess } from "../actions/offer-actions";
import { OfferRestService } from "src/api/rest-service/offer.rest-service";
import { catchError, map } from "rxjs";
import { GetAwardedOffersResponse } from "src/api/models/get-awarded-offers-response";

@State<OfferCardComponentStateModel>({
    name: "offerCards",
    defaults: {
        offerCardsComponent: [],
        offer: {
            offerId: 0,
            offerImages: [],
            offerTitle: "",
            offerDescription: "",
            yearOfProduction: "",
            mileage: "",
            fuelType: "",
            engineCapacity: "",
            offerPrice: "",
            offerCurrency: "",
            equipments: [],
            vehicleAttributes: []
        }
    }
})
@Injectable()
export class OfferState {

    constructor(private _restService: OfferRestService) {}


    @Action(GetAwardedOffers)
    getAwardedOffers(ctx: StateContext<OfferCardComponentStateModel>, action: GetAwardedOffers) {

        return this._restService.getAwardedOffers()
            .pipe(
                map((offers: OfferCardComponentModel[]) => ctx.dispatch(new GetAwardedOffersSuccess(offers)),
                catchError(error => ctx.dispatch(new GetAwardedOffersFailure(error)))    
            ))
    }

    @Action(GetAwardedOffersSuccess)
    getAwardedOffersSuccess(ctx: StateContext<OfferCardComponentStateModel>, action: GetAwardedOffersSuccess) {
        const state = ctx.getState()

        ctx.setState({
            ...state,
            offerCardsComponent: action.offers
        })
    }

    @Action(GetAwardedOffersFailure)
    getAwardedOffersFailure(ctx: StateContext<OfferCardComponentStateModel>, action: GetAwardedOffersFailure) {
        console.log(action.error);
    }

    @Action(GetOfferById)
    getOfferById(ctx: StateContext<OfferCardComponentStateModel>, action: GetOfferById) {
        
        return this._restService.getOfferById(action.offerId)
            .pipe(
                map((offer: OfferActivityComponentModel) => ctx.dispatch(new GetOfferByIdSuccess(offer))),
                catchError(error => ctx.dispatch(new GetOfferByIdFailure(error)))
            )
    }

    @Action(GetOfferByIdSuccess)
    getOfferByIdSuccess(ctx: StateContext<OfferCardComponentStateModel>, action: GetOfferByIdSuccess) {
        const state = ctx.getState()

        ctx.setState({
            ...state,
            offer: action.offer
        });
    }

    @Action(GetOfferByIdFailure)
    getOfferByIdFailure(ctx: StateContext<OfferCardComponentStateModel>, action: GetOfferByIdFailure) {
        console.log(action.error);
    }

}
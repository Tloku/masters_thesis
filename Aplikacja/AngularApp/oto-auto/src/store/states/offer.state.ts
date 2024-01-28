import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { OfferActivityComponentModel, OfferCardComponentModel, OfferCardComponentStateModel } from "../model/offer-card-component.model";
import { CreateOffer, CreateOfferFailure, CreateOfferSuccess, GetAwardedOffers, GetAwardedOffersFailure, GetAwardedOffersSuccess, GetOfferById, GetOfferByIdFailure, GetOfferByIdSuccess } from "../actions/offer-actions";
import { OfferRestService } from "src/api/rest-service/offer.rest-service";
import { catchError, map } from "rxjs";
import { CreateOfferResponse } from "src/api/models/create-offer-response";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { RedisCacheService } from "src/services/cache/redis-cache-service";

export enum RedisCacheKeys {
    OFFER = "offer"
}


@State<OfferCardComponentStateModel>({
    name: "offerCards",
    defaults: {
        offerCardsComponent: [],
        offerImages: [],
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

    constructor(
        private router: Router,
        private _restService: OfferRestService,
        private _messageService: MessageService,
        private _redisCacheService: RedisCacheService
        ) {}


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
    async getOfferById(ctx: StateContext<OfferCardComponentStateModel>, action: GetOfferById) {
        const maybeOffer: OfferActivityComponentModel | undefined = await this._redisCacheService.get<OfferActivityComponentModel>(RedisCacheKeys.OFFER) 


        if (maybeOffer) {
            return ctx.dispatch(new GetOfferByIdSuccess(maybeOffer))
        }
        
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


    @Action(CreateOffer)
    createOffer(ctx: StateContext<OfferCardComponentStateModel>, action: CreateOffer) {

        return this._restService.createOffer(action.createOfferForm)
            .pipe(
                map((response: CreateOfferResponse) => ctx.dispatch(new CreateOfferSuccess(response.offerId))),
                catchError(error => ctx.dispatch(new CreateOfferFailure(error)))
            )
    }

    @Action(CreateOfferSuccess)
    createOfferSuccess(ctx: StateContext<OfferCardComponentStateModel>, action: CreateOfferSuccess) {
        this._messageService.add({ key: 'toast', severity: 'success', summary: 'Oferta utworzona', detail: 'Udało się utworzyć twoją ofertę!' });
        this.router.navigateByUrl("/offer/" + action.offerId);
    }
}
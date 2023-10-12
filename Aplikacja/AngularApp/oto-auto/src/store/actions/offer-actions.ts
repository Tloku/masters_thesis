import { GetAwardedOffersResponse } from "src/api/models/get-awarded-offers-response"
import { OfferActivityComponentModel, OfferCardComponentModel } from "../model/offer-card-component.model"

export class GetAwardedOffers {
    static readonly type: string = '[Get Awarded Offers] Get awarded offers'
    constructor() {}
}

export class GetAwardedOffersSuccess {
    static readonly type: string = "[Get Awarded Offers] Get awarded offers success"
    constructor(public offers: OfferCardComponentModel[]) {}
}

export class GetAwardedOffersFailure {
    static readonly type: string = "[Get Awarded Offers] Get awarded offers failure"
    constructor(public error: any) {}
}

export class GetOfferById {
    static readonly type: string = "[Get Offer By Id] Get Offer by id"
    constructor(public offerId: number) {}
}

export class GetOfferByIdSuccess {
    static readonly type: string = "[Get Offer By Id] Get Offer by id success"
    constructor(public offer: OfferActivityComponentModel) {}
}

export class GetOfferByIdFailure {
    static readonly type: string = "[Get Offer By Id] Get Offer by id failure"
    constructor(public error: any) {}
}
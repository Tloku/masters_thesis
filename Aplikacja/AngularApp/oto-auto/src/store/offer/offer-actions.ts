import { OfferActivityComponentModel, OfferCardComponentModel } from "./offer-card-component.model"
import { CreateOfferFormStateModel } from "src/api/models/form/create-offer-form"

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

export class CreateOffer {
    static readonly type: string = "[Create Offer] Create offer"
    constructor(public createOfferForm: CreateOfferFormStateModel) {} 
}

export class CreateOfferSuccess {
    static readonly type: string = "[Create Offer] Create offer Success"
    constructor(public offerId: number) {} 
}

export class CreateOfferFailure {
    static readonly type: string = "[Create Offer] Create offer failure"
    constructor(public error: any) {} 
}

export class CacheOfferDetails {
    static readonly type: string = "[Cache Offer Details] Cache Offer Details"
    constructor(public offer: OfferActivityComponentModel) {}
}

export class GetCachedOfferByIdSuccess {
    static readonly type: string = "[Get Cached Offer By Id] Get Offer by id success"
    constructor(public offer: OfferActivityComponentModel) {}
}
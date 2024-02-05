import { OfferPreview } from "../model/filtered-offers-state.model"

export class GetFilteredOffers {
    static readonly type: string = '[Filtered Offers] Get Filtered Offers'
    constructor() {}
}

export class GetFilteredOffersSuccess {
    static readonly type: string = '[Filtered Offers] Get filtered offers success'
    constructor(public filteredOffers: OfferPreview[]) {}
}

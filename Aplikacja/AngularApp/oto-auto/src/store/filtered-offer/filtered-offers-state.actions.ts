import { CarSearchValues } from "../car-search-form/car-search-form.model"
import { OfferPreview } from "./filtered-offers-state.model"

export class GetFilteredOffers {
    static readonly type: string = '[Filtered Offers] Get Filtered Offers'
    constructor(public carSearchValues: CarSearchValues) {}
}

export class GetFilteredOffersSuccess {
    static readonly type: string = '[Filtered Offers] Get filtered offers success'
    constructor(public filteredOffers: OfferPreview[]) {}
}

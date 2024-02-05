import { OfferImage } from "./offer-image.model";

export interface FilteredOffersStateModel {
    filteredOffers?: OfferPreview[]
}

export interface OfferPreview {
    offerId: number,
    offerImage: OfferImage,
    title: string,
    engineCapacity: string,
    horsePower: string,
    model: string,
    highlighted: boolean,
    mileage: string,
    fuelType: string,
    driveType: string,
    yearOfProduction: string,
    duration: number,
    isPrivateDealer: boolean,
    price: string
}
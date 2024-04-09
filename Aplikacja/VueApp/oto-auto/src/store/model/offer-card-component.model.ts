import { OfferImage } from "./offer-image.model";
import { VehicleDetailsRow } from "./vehicle-details-row.model";

export interface OfferCardComponentModel {
    offerId: number;
    offerMainImage: OfferImage,
    offerTitle: string,
    yearOfProduction: string,
    mileage: string,
    mileageUnit: string,
    fuelType: string,
    engineCapacity: string,
    offerPrice: string,
    offerCurrency: string
}

export interface OfferActivityComponentModel {
    offerId: number;
    offerImages: OfferImage[],
    offerTitle: string,
    offerDescription: string
    yearOfProduction: string,
    mileage: string,
    fuelType: string,
    engineCapacity: string,
    offerPrice: string,
    offerCurrency: string
    equipments: string[]
    vehicleAttributes: VehicleDetailsRow[]
}

export default interface OfferCardComponentStateModel {
    offerCardsComponent: OfferCardComponentModel[],
    offer: OfferActivityComponentModel
    offerImages: OfferImage[]
    redisNotResponding: boolean
}
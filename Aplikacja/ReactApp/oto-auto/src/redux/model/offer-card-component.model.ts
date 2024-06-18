import { VehicleDetailsRow } from "../../models/vehicle-details-row";

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

export interface OfferCardComponentStateModel {
    offerCardsComponent: OfferCardComponentModel[],
    offer: OfferActivityComponentModel | null
    offerImages: OfferImage[]
    redisNotResponding: boolean
}

export interface OfferImage {
    imageBytes: string,
    isMainImage: boolean
}
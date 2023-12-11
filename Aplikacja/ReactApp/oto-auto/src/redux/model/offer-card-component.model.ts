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

export interface OfferImage {
    imageBytes: string,
    isMainImage: boolean
}
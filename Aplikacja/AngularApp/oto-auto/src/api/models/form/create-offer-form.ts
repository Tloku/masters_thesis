import { EquipmentType } from "../equipment-type"

export interface CreateOfferFormStateModel {
    createOfferForm: {
        model?: {
            vehicleType: number
            hasCrashed: boolean
            isImported: boolean
            vin: number
            mileage: string
            yearOfProduction: string
            brand: string
            model: string
            fuelType: string
            horsePower: number
            engineCapacity: number
            numberOFDoors: number
            transmission: string
            version: string
            generation: string
            bodyType: string
            color: string
        
            offerImages: OfferImagesForm[]
        
            title: string
            description: string
            wheelOnTheRight: string
            co2Emission: string
            colorType: string
        
            additionalProperties: EquipmentType[]
        
            price: string
            isNet: boolean
        
            dealerName: string
            dealerAddress: string
            phoneNumber: string
        }
    }

}

export interface OfferImagesForm {
    name: string
    blob: string
    isMain: boolean
}


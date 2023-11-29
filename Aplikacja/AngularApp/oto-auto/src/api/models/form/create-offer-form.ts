import { FormArray, FormControl, FormGroup } from "@angular/forms"
import { EquipmentType } from "../equipment-type"

export interface CreateOfferFormStateModel {
    dealerDataForm?: DealerDataForm,
    offerImages?: OfferImagesForm[]
    priceDataForm?: PriceDataForm,
    equipmentTypeForm?: EquipmentTypeForm,
    additionalTechnicalDataForm?: AdditionalTechnicalDataForm,
    vehicleDescription?: VehicleDescriptionForm,
    technicalDataForm?: TechnicalDataForm,
    vehicleType?: VehicleTypeForm,
    basicInfo?: BasicInfoForm,
    mainFeatures?: MainFeaturesForm
}

export interface OfferImagesForm {
    name: string
    blob: string
    isMainImage: boolean
}

export interface DealerDataForm {
    name: FormControl<string | null>,
    address: FormControl<string | null>,
    phoneNumber: FormControl<string | null>,
}

export interface PriceDataForm {
    net: FormControl<boolean| null>
    price: FormControl<string | null>,
    currency: FormControl<string | null>
}

export interface VehicleDescriptionForm {
    title: FormControl<string | null>,
    description: FormControl<string | null>,
}

export interface TechnicalDataForm {
    yearOfProduction: FormControl<string | null>,
    brand: FormControl<string | null>,
    model: FormControl<string | null>,
    fuelType: FormControl<string | null>,
    horsePower: FormControl<string | null>,
    engineCapacity: FormControl<string | null>,
    numberOfDoors: FormControl<string | null>,
    transmission: FormControl<string | null>,
    version: FormControl<string | null>,
    generation: FormControl<string | null>,
    bodyType: FormControl<string | null>,
    color: FormControl<string | null>,
}

export interface VehicleTypeForm {
    type: FormControl<string | null>,
}

export interface BasicInfoForm {
    vin: FormControl<string | null>,
    mileage: FormControl<string | null>
}

export interface MainFeaturesForm {
    destroyed: FormControl<boolean | null>,
    imported: FormControl<boolean | null>
}

export interface EquipmentValuesForm {
    values: FormArray
}

export interface EquipmentItemsForm {
    id: number
    name: string,
    value: boolean
}

export interface EquipmentForm {
    type: string,
    equipments: FormGroup
}

export interface AdditionalTechnicalDataForm {
    drive: FormControl<string | null>,
    emission: FormControl<string | null>,
    colorType: FormControl<string | null>,
    numberOfSeats: FormControl<string | null>
}

export interface EquipmentTypeForm {
    equipmentTypes: FormArray
}
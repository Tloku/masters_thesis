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
    mainFeatures?: MainFeaturesForm,
    additionalProperties?: AdditionalPropertiesFormModel
}

export interface OfferImagesForm {
    name: string
    blob: string
    isMainImage: boolean
}

export interface DealerDataForm {
    name: string,
    address: string,
    phoneNumber: string,
}

export interface PriceDataForm {
    net: boolean,
    price: string,
    currency: string, 
}

export interface VehicleDescriptionForm {
    title: string,
    description: string,
}

export interface TechnicalDataForm {
    yearOfProduction: string,
    brand: string,
    model: string,
    fuelType: string,
    horsePower: string,
    engineCapacity: string,
    numberOfDoors: string,
    transmission: string,
    version: string,
    generation: string,
    bodyType: string,
    color: string,
}

export interface VehicleTypeForm {
    type: string,
}

export interface BasicInfoForm {
    vin: string,
    mileage: string 
}

export interface MainFeaturesForm {
    destroyed: boolean,
    imported: boolean 
}

export interface EquipmentValuesForm {
    values: EquipmentItemsForm[]
}

export interface EquipmentItemsForm {
    id: number,
    name: string,
    value: boolean,
}

export interface EquipmentForm {
    type: string,
    equipments: EquipmentValuesForm,
}

export interface AdditionalTechnicalDataForm {
    drive: string ,
    emission: string ,
    colorType: string ,
    numberOfSeats: string 
}

export interface EquipmentTypeForm {
    equipmentTypes: EquipmentForm[]
}


export interface EquipmentType {
    type: string,
    equipments: Equipment[];
}

export interface Equipment {
    id: number;
    name: string;
}

export interface AdditionalPropertiesFormModel {
    additionalTechnicalDataForm: AdditionalTechnicalDataForm | undefined;
    equipmentForm: EquipmentTypeForm | undefined;
}
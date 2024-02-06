import { AdditionalTechnicalDataForm, BasicInfoForm, DealerDataForm, EquipmentTypeForm, MainFeaturesForm, OfferImagesForm, PriceDataForm, TechnicalDataForm, VehicleDescriptionForm, VehicleTypeForm } from "src/api/models/form/create-offer-form"


export class UpdateDealerDataForm {
    static readonly type: string = '[Dealer Data Form]'
    constructor(public dealerDataForm: DealerDataForm) {}
}

export class UpdateOfferImagesForm {
    static readonly type: string = '[Offer Images Form]'
    constructor(public offerImagesForm: OfferImagesForm) {}
}

export class UpdatePriceDataForm {
    static readonly type: string = '[Price Data Form]'
    constructor(public priceDataForm: PriceDataForm) {}
}

export class UpdateAdditionalTechnicalDataForm {
    static readonly type: string = '[Additional Technical Data Form]'
    constructor(public additionalTechnicalData: AdditionalTechnicalDataForm) {}
}

export class UpdateEquipmentTypeForm {
    static readonly type: string = '[Equipment type Form]'
    constructor(public equipmentTypes: EquipmentTypeForm) {}
}

export class UpdateVehicleDescriptionForm {
    static readonly type: string = '[Vehicle Description Form]'
    constructor(public vehicleDescription: VehicleDescriptionForm) {}
}

export class UpdateTechnicalDataForm {
    static readonly type: string = '[Technical Data+ Form]'
    constructor(public technicalData: TechnicalDataForm) {}
}

export class UpdateVehicleTypeForm {
    static readonly type: string = '[Vehicle Type Form]'
    constructor(public vehicleType: VehicleTypeForm) {}
}

export class UpdateBasicInfoForm {
    static readonly type: string = '[Basic Form Form]'
    constructor(public basicInfo: BasicInfoForm) {}
}

export class UpdateMainFeaturesForm {
    static readonly type: string = '[Main Features Form]'
    constructor(public mainFeatures: MainFeaturesForm) {}
}
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AdditionalPropertiesFormModel, AdditionalTechnicalDataForm, CreateOfferFormStateModel, OfferImagesForm } from "../model/create-offer-form.model";

const initialCreateOfferFormStateValue: CreateOfferFormStateModel = {
    dealerDataForm: {
        name: '',
        address: '',
        phoneNumber: '',
    },
    offerImages: [],
    priceDataForm: {
        net: false,
        price: '',
        currency: '', 
    },
    additionalTechnicalDataForm: {
        drive: '',
        emission: '',
        colorType: '',
        numberOfSeats: '' 
    },
    vehicleDescription: {
        title: '',
        description: '',
    },
    technicalDataForm: {
        yearOfProduction: '',
        brand: '',
        model: '',
        fuelType: '',
        horsePower: '',
        engineCapacity: '',
        numberOfDoors: '',
        transmission: '',
        version: '',
        generation: '',
        bodyType: '',
        color: '',
    },
    vehicleType: {
        type: ''
    },
    basicInfo: {
        vin: '',
        mileage: '' 
    },
    mainFeatures: {
        imported: false,
        destroyed: false
    },
    equipmentTypeForm: {
        equipmentTypes: []
    }
}

const createOfferFormSlice = createSlice({
    name: "createOfferForm",
    initialState: initialCreateOfferFormStateValue,
    reducers: {
        saveFormValues: (state, action: PayloadAction<CreateOfferFormStateModel>) => {
            state.basicInfo = action.payload.basicInfo;
            state.dealerDataForm = action.payload.dealerDataForm;
            state.mainFeatures = action.payload.mainFeatures;
            state.priceDataForm = action.payload.priceDataForm;
            state.vehicleDescription = action.payload.vehicleDescription;
            state.vehicleType = action.payload.vehicleType;
            state.technicalDataForm = action.payload.technicalDataForm
        },
        saveImagesValues: (state, action: PayloadAction<OfferImagesForm[]>) => { 
            state.offerImages! = action.payload
        },
        saveAdditionalPropertiesValues: (state, action: PayloadAction<AdditionalPropertiesFormModel>) => {
            state.equipmentTypeForm = action.payload?.equipmentForm
        },
        saveAdditionalTechnicalData: (state, action: PayloadAction<AdditionalTechnicalDataForm>) => {
            state.additionalTechnicalDataForm = action.payload
        },
        clearCreateOfferForm: () => initialCreateOfferFormStateValue
    },
})

export const {saveFormValues, saveImagesValues, saveAdditionalPropertiesValues, saveAdditionalTechnicalData, clearCreateOfferForm} = createOfferFormSlice.actions;

export default createOfferFormSlice.reducer

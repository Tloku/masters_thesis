import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AdditionalPropertiesFormModel, CreateOfferFormStateModel, OfferImagesForm } from "../model/create-offer-form.model";

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
    additionalProperties: {
        equipmentForm: {
            equipmentTypes: []
        },
        additionalTechnicalDataForm: {
            drive: '',
            emission: '',
            colorType: '',
            numberOfSeats: '' 
        }
    }
}

const createOfferFormSlice = createSlice({
    name: "createOfferForm",
    initialState: initialCreateOfferFormStateValue,
    reducers: {
        saveFormValues: (state, action: PayloadAction<CreateOfferFormStateModel>) => state = action.payload,
        saveImagesValues: (state, action: PayloadAction<OfferImagesForm[]>) => { 
            state.offerImages! = action.payload
        },
        saveAdditionalPropertiesValues: (state, action: PayloadAction<AdditionalPropertiesFormModel>) => {
            state.additionalProperties = action.payload
        },
        clearCreateOfferForm: () => initialCreateOfferFormStateValue
    },
})

export const {saveFormValues, saveImagesValues, saveAdditionalPropertiesValues, clearCreateOfferForm} = createOfferFormSlice.actions;

export default createOfferFormSlice.reducer

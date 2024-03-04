import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateOfferFormStateModel } from "../model/create-offer-form.model";

const initialCreateOfferFormStateValue: CreateOfferFormStateModel = {
    dealerDataForm: undefined,
    offerImages: [],
    priceDataForm:undefined,
    equipmentTypeForm: undefined,
    additionalTechnicalDataForm: undefined,
    vehicleDescription: undefined,
    technicalDataForm: undefined,
    vehicleType: undefined,
    basicInfo: undefined,
    mainFeatures: {
        imported: false,
        destroyed: false
    } 
}

const createOfferFormSlice = createSlice({
    name: "createOfferForm",
    initialState: initialCreateOfferFormStateValue,
    reducers: {
        saveFormValues: (state, action: PayloadAction<CreateOfferFormStateModel>) => state = action.payload,
        getCreateOfferForm: (state) => state,
        clearCreateOfferForm: () => initialCreateOfferFormStateValue
    },
})

export const {saveFormValues, getCreateOfferForm, clearCreateOfferForm} = createOfferFormSlice.actions;

export default createOfferFormSlice.reducer

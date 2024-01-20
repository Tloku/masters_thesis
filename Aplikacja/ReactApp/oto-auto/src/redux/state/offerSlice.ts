import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OfferActivityComponentModel, OfferCardComponentModel, OfferCardComponentStateModel } from "../model/offer-card-component.model";
import { OfferRestService } from "../../api/rest-service/offer-rest-service";

const initialOfferStateValue: OfferCardComponentStateModel = {
        offerCardsComponent: [],
        offerImages: [],
        offer: {
            offerId: 0,
            offerImages: [],
            offerTitle: "",
            offerDescription: "",
            yearOfProduction: "",
            mileage: "",
            fuelType: "",
            engineCapacity: "",
            offerPrice: "",
            offerCurrency: "",
            equipments: [],
            vehicleAttributes: []
        }   
    }


const offerSlice = createSlice({
    name: "offerCard",
    initialState: initialOfferStateValue,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAwardedOffers.fulfilled, (state, { payload }) => {
            state.offerCardsComponent = payload
        }),
        builder.addCase(getOfferById.fulfilled, (state, { payload }) => {
            state.offer = payload
        })
    }
})

export const getAwardedOffers = createAsyncThunk(
    "offerCard/getAwardedOffers", 
    async () => {
        const response = await OfferRestService.getAwardedOffers();
        return response.data as OfferCardComponentModel[];
    }
)

export const getOfferById = createAsyncThunk(
    'offerCard/getOfferById',
    async (id: number) => {
        const response = await OfferRestService.getOfferById(id);
        return response.data as OfferActivityComponentModel;
    }
)

export default offerSlice.reducer

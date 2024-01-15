import { createSlice } from "@reduxjs/toolkit";
import { OfferCardComponentModel, OfferCardComponentStateModel } from "../model/offer-card-component.model";
import { OfferRestService } from "../../api/rest-service/offer-rest-service";
import { AxiosResponse } from "axios";

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
    reducers: {
        getAwardedOffers: (state) => {
            getAwardedOffersRequest(state)
        } 
    }
})


function getAwardedOffersRequest(state: OfferCardComponentStateModel) {
    OfferRestService.getAwardedOffers()
    .then((response: AxiosResponse<OfferCardComponentModel[]>) => {
       state.offerCardsComponent = response.data as OfferCardComponentModel[];
    }) 
}

export const { getAwardedOffers } = offerSlice.actions
export default offerSlice.reducer

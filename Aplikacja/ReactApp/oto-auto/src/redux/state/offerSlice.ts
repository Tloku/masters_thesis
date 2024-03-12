import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OfferActivityComponentModel, OfferCardComponentModel, OfferCardComponentStateModel } from "../model/offer-card-component.model";
import { OfferRestService } from "../../api/rest-service/offer-rest-service";
import { RedisCacheService } from "../../api/rest-service/redis-cache.service";
import { AxiosResponse } from "axios";

export enum RedisCacheKeys {
    OFFER = "offer:"
}

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
        },
        redisNotResponding: false
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
            state.offer = payload!
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
    async ({id, toast}: {id: number, toast: any}, { getState }) => {
        const state: OfferCardComponentStateModel = getState() as OfferCardComponentStateModel
        if (state.redisNotResponding) {
            return getOfferByIdFromServer(id)
        }

        try {
            const redisResp: AxiosResponse<OfferActivityComponentModel | undefined> = await RedisCacheService.get<OfferActivityComponentModel>(RedisCacheKeys.OFFER + id);
            if (redisResp.data) {
                return redisResp.data;
            }

            const offer = await getOfferByIdFromServer(id);
            cacheOfferDetails(offer, state.redisNotResponding);
            return offer;
        } catch (error) {
            if (!state.redisNotResponding) {
                toast.current.show({severity:'error', detail: "Redis nie odpowiada. Kolejna próba połączenia nastąpi za 5 minut"});
            }

            state.redisNotResponding = true;
            setTimeout(() => {
                state.redisNotResponding = false;
            }, 5 * 60 * 1000);

            try {
               return await getOfferByIdFromServer(id);
            } catch (e) {
                toast.current.show({severity:'error', detail:'Błąd podczas wyświetlania oferty'});
                throw e;
            }
        }
    }
)

const cacheOfferDetails = async (offer: OfferActivityComponentModel, redisNotResponding: boolean) => {
    if (redisNotResponding) {
        return;
    }
    RedisCacheService.set(RedisCacheKeys.OFFER + offer.offerId, offer);
}

const getOfferByIdFromServer = async (offerId: number): Promise<OfferActivityComponentModel> => {
    const response = await OfferRestService.getOfferById(offerId);
    return response.data as OfferActivityComponentModel;
}

export default offerSlice.reducer


import { configureStore } from "@reduxjs/toolkit"
import offerReducer from "../state/offerSlice"
import equipmentTypeReducer from "../state/equipmentSlice"
import createOfferFormReducer from "../state/create-offer-form.slice"

export const store = configureStore({
    reducer: { 
        offerCard: offerReducer,
        equipmentType: equipmentTypeReducer,
        createOfferForm: createOfferFormReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from "@reduxjs/toolkit"
import offerReducer from "../state/offerSlice"


export const store = configureStore({
    reducer: { 
        offerCard: offerReducer 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
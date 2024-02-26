
import { configureStore } from "@reduxjs/toolkit"
import offerReducer from "../state/offerSlice"
import equipmentTypeReducer from "../state/equipmentSlice"


export const store = configureStore({
    reducer: { 
        offerCard: offerReducer,
        equipmentType: equipmentTypeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
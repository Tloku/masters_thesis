import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EquipmentStateModel } from "../model/equipment-state.model";
import { EquipmentType } from "../model/create-offer-form.model";
import { EquipmentRestService } from "../../api/rest-service/equipment-rest.service";

const initialEquipmentStateValue: EquipmentStateModel = {
    equipmentTypes: []
}

const equipmentTypeSlice = createSlice({
    name: "equipmentTypes",
    initialState: initialEquipmentStateValue,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEquipmentTypes.fulfilled, (state, { payload }) => {
            state.equipmentTypes = payload
        })
    }
})

export const getEquipmentTypes = createAsyncThunk(
    "equipmentTypes/getEquipmentTypes", 
    async () => {
        const response = await EquipmentRestService.getEquipmentTypes();
        return response.data.equipmentTypes as EquipmentType[]
    }
)

export default equipmentTypeSlice.reducer

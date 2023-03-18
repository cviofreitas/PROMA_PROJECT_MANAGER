import { createSlice } from "@reduxjs/toolkit";
import getCurrentDate from "../../HelperFuncs/getCurrentDate";


let initialState = getCurrentDate()

export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        updateDate: (state, action) => {
            state.value = action.payload
        },

    }
})

export const { updateDate } = dateSlice.actions
export default dateSlice.reducer
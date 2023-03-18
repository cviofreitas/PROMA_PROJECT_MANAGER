import { createSlice } from "@reduxjs/toolkit";
import userData from "../../LocalData/userData";


const initialState = userData.profile


export const userProfileSlice = createSlice({
    name: 'User Profile',
    initialState,
    reducers: {
        updateUserProfile: (state, action) => {

            state.value = action.payload
        },

    }
})

export const { updateUserProfile } = userProfileSlice.actions
export default userProfileSlice.reducer
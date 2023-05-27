import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../modules/authAction";

const initialState = {
    loading: false,
    userInfo: {}, //user obj
    userToken: null, //storing jwt
    error: null,
    success: false, //monitoring registration proocess
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [ registerUser.pending ]: (state:any) => {
            state.loading = true
            state.error = null
        },
        [ registerUser.fulfilled ]: (state:any, { payload }:any) => {
            state.loading = false
            state.error = payload 
        }
    }
})

export default authSlice.reducer
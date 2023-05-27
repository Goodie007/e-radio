import { createSlice } from "@reduxjs/toolkit";

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
    extraReducers: {}
})

export default authSlice.reducer
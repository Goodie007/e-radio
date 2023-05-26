import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

export const store =  configureStore({
    reducer: {}
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ReturnType<typeof store.dispatch>
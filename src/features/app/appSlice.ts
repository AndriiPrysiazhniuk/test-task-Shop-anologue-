import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "app",
    initialState: {},
    reducers:{}
})

export const appSlice = slice.reducer
export const appActions = slice.actions
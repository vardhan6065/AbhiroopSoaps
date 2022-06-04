import { createSlice } from "@reduxjs/toolkit";

const mainareacontentSlice = createSlice({
    name: 'mainareacontent',
    initialState: {
        shopIsVisible: true,
        HomeIsVisible: false,
        contactIsVisible: false,
    },
    reducers : {
        showShop(state){
            state.shopIsVisible= true;
            state.HomeIsVisible= false;
            state.contactIsVisible= false;
        },
        showHome(state){
            state.shopIsVisible= false;
            state.HomeIsVisible= true;
            state.contactIsVisible= false;
        },
        showContact(state){
            state.shopIsVisible= false;
            state.HomeIsVisible= false;
            state.contactIsVisible= true;
        }
    }
});

export const mainareacontentActions = mainareacontentSlice.actions;

export default mainareacontentSlice;
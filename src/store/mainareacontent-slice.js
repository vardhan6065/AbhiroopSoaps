import { createSlice } from "@reduxjs/toolkit";

const mainareacontentSlice = createSlice({
    name: 'mainareacontent',
    initialState: {
        shopIsVisible: false,
        HomeIsVisible: true,
        contactIsVisible: false,
        cartIsVisible: false,
    },
    reducers : {
        showShop(state){
            state.shopIsVisible= true;
            state.HomeIsVisible= false;
            state.contactIsVisible= false;
            state.cartIsVisible= false;
        },
        showHome(state){
            state.shopIsVisible= false;
            state.HomeIsVisible= true;
            state.contactIsVisible= false;
            state.cartIsVisible= false;
        },
        showContact(state){
            state.shopIsVisible= false;
            state.HomeIsVisible= false;
            state.contactIsVisible= true;
            state.cartIsVisible= false;
        },
        showCart(state){
            state.shopIsVisible= false;
            state.HomeIsVisible= false;
            state.contactIsVisible= false;
            state.cartIsVisible= true;
        }
    }
});

export const mainareacontentActions = mainareacontentSlice.actions;

export default mainareacontentSlice;
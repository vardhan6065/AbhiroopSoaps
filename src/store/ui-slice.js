import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        soapsIsVisible: true,
        skinProductsIsVisible: false,
        sorryTextIsVisible: false,
    },
    reducers : {
        showSoaps(state){
            state.soapsIsVisible= true;
            state.skinProductsIsVisible=false;
            state.sorryTextIsVisible= false;
        },
        showSkinProducts(state){
            state.soapsIsVisible= false;
            state.skinProductsIsVisible=true;
            state.sorryTextIsVisible= false;
        },
        showSorryText(state){
            state.soapsIsVisible= false;
            state.skinProductsIsVisible=false;
            state.sorryTextIsVisible= true;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
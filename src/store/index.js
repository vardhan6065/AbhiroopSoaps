import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import mainareacontentSlice from "./mainareacontent-slice";

const store = configureStore({
    reducer : {ui : uiSlice.reducer, mainareacontent : mainareacontentSlice.reducer }
})

export default store;
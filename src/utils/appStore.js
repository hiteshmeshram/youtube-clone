import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice"

const appStore=configureStore({
    reducer:{
        toggle:toggleReducer

    }
})

export default appStore;
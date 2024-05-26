import { configureStore } from "@reduxjs/toolkit";
import authSliceRedux from "./Slices/Auth"

const store = configureStore({
    reducer:{
        auth : authSliceRedux,
    }
})

export default store
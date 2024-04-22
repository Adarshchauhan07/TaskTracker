import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Slices/dataSlice";
const store=configureStore({
    reducer:{
        'dataSlice':dataSlice,
    }
})
export default store;
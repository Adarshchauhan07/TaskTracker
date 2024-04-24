import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Slices/dataSlice";
import userArraySlice from "./Slices/userArraySlice";

const store=configureStore({
    reducer:{
        'dataSlice':dataSlice,
        'userArraySlice':userArraySlice,
    }
})
export default store;
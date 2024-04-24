import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../utils/data";

const userArraySlice=createSlice({
    name:"UserArraySlice",
    initialState:{
        userArrayFilteredData:data[0].users.reduce((acc,current)=>{
			acc[current.id]=current;
			return acc;
		},{})
    },
    reducers:{}
})

export default userArraySlice.reducer;
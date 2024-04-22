import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../utils/data";

const dataSlice = createSlice({
	name: "dataSlice",
	initialState: { data },
	reducers: {},
});

export default dataSlice.reducer;
// export const {addData, removeData}=dataSlice.actions;

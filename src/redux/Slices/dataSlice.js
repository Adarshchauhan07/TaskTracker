import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../utils/data";

const dataSlice = createSlice({
	name: "dataSlice",
	initialState: {
		data,
		heighestTicket_id: 10,
		heighestUser_id: 5,
	},
	reducers: {
		updateHeighestTicket_id: (state, action) => {
			state.heighestTicket_id = action.payload;
		},
		updateHeighestUser_id: (state, action) => {
			state.heighestUser_id = action.payload;
		},
		AddTicket: (state, action) => {
			console.log(data[0].tickets);

			const newData = [...state.data];

			const {  UserID, priority, status, tag, title } =
				action.payload;
			const newTicket = {
				id: `CAM-${state.heighestTicket_id+1}`,
				priority: priority,
				status: status,
				tag: [tag],
				title: title,
				userId: UserID,
			};

			state.heighestTicket_id+=1;

			newData[0].tickets.push(newTicket);

			state.data = newData;
			// console.log(action.payload);
		},
	},
});

export default dataSlice.reducer;
export const { updateHeighestTicket_id, updateHeighestUser_id, AddTicket } =
	dataSlice.actions;

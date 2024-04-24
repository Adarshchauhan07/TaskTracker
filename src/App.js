import React from "react";
import Filter from "./components/Filter";
import { useDispatch, useSelector } from "react-redux";
import {updateHeighestUser_id} from './redux/Slices/dataSlice'
import TicketForm from "./components/TicketForm";

const App = () => {

	return (
		<div>
			<Filter />
			{/* <TicketForm/> */}
		</div>
	);
};

export default App;

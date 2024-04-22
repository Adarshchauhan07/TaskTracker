import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateGroupBy } from "../redux/Slices/GroupByFormSlice";

const GroupByForm = () => {
	const [group, setGroup] = useState("Priority");

	useEffect(() => {
		console.log("group", group);
	}, [group]);

	// function submitHandler() {
	// 	dispatch(updateGroupBy(group));
	// }
	return (
		<div>
			
		</div>
	);
};

export default GroupByForm;

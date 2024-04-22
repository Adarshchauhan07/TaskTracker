import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import CardDesign from "./CardDesign";

const Card = ({ name, user, groupName, OrderingBy }) => {
	const priorityName = ["No priority", "Low", "Medium", "High", "Urgent"];


	if (OrderingBy === "Priority") {
		user.sort((a, b) => {
			const id1=parseInt(a.id.split(-1)[1]);
			const id2=parseInt(b.id.split(-1)[1]);

			return id1-id2;
		});
	} 
	else {
		user.sort((a, b) => {
			const titleA = a.title.toLowerCase();
			const titleB = b.title.toLowerCase();


			// Compare titles
			if (titleA < titleB) {
				return -1;
			}
			else{
				return 0; 
			}
		});
	}

	// console.log("after",user);

	return (
		<div className="flex flex-col gap-4">
			{groupName === "Priority" ? (
				<h2>{priorityName[name]}</h2>
			) : (
				<h2>{name}</h2>
			)}

			{user.map((data) => {
				return <CardDesign data={data}/>;
			})}
		</div>
	);
};

export default Card;

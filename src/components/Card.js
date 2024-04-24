import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import CardDesign from "./CardDesign";
import { MdAdd } from "react-icons/md";
import TicketForm from "./TicketForm";

const Card = ({ name, user, groupName, OrderingBy }) => {
	const [clicked, SetClicked] = useState(false);

	const priorityName = ["No priority", "Low", "Medium", "High", "Urgent"];


	if (OrderingBy === "Priority") {
		user.sort((a, b) => {
			const id1 = parseInt(a.id.split('-')[1]);
			const id2 = parseInt(b.id.split('-')[1]);

			return id1 - id2;
		});
	} else if (OrderingBy === "latest") {
		user.sort((a, b) => {
			const id1 = parseInt(a.id.split('-')[1]);
			const id2 = parseInt(b.id.split('-')[1]);

			return id2 - id1;
		});
	} 
	else {
		user.sort((a, b) => {
			const titleA = a.title.toLowerCase();
			const titleB = b.title.toLowerCase();

			// Compare titles
			if (titleA < titleB) {
				return -1;
			} else {
				return 0;
			}
		});
	}

	// console.log("after",user);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between">
				{groupName === "Priority" ? (
					<div>
						<h2>{priorityName[name]}</h2>
					</div>
				) : (
					<h2>{name}</h2>
				)}

				<MdAdd
					className=" cursor-pointer"
					onClick={() => {
						SetClicked(!clicked);
					}}
				/>
			</div>
			{clicked && (
				<TicketForm
					name={name}
					groupName={groupName}
					userID={user[0].userId.split('-')[1]}
				/>
			)}
			{user.map((data) => {
				return (
					<CardDesign
						key={nanoid()}
						data={data}
					/>
				);
			})}
		</div>
	);
};

export default Card;

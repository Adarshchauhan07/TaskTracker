import React, { useEffect, useState } from "react";
import Card from "./Card";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
	// variables declaration-------

	const data = useSelector((store) => store.dataSlice.data);
	const [groupName, setGroupName] = useState("Priority");
	const [OrderingBy, SetOrderingBy] = useState("Priority");

	const [groupByData, setGroupByData] = useState();

	// sort data function--------
	function groupByhandler() {
		if (groupName === "Priority") {
			// by Priority---
			const priority = data[0].tickets.reduce((acc, current) => {
				if (!acc[current.priority]) {
					acc[current.priority] = [];
				}

				acc[current.priority].push(current);

				return acc;
			}, {});

			console.log("priority👉", priority);
			setGroupByData(priority);
		} else if (groupName === "User") {
			// by user----
			const userData = {};
			data[0].users.forEach((user) => {
				userData[user.name] = [];
				data[0].tickets.forEach((ticket) => {
					if (user.id === ticket.userId) {
						userData[user.name].push(ticket);
					}
				});
			});
			console.log("user👉", userData);
			setGroupByData(userData);
		} else {
			// by status----

			const status = data[0].tickets.reduce((acc, current) => {
				if (!acc[current.status]) {
					acc[current.status] = [];
				}

				acc[current.status].push(current);

				return acc;
			}, {});

			console.log("status👉", status);
			setGroupByData(status);
		}
	}

	// useEffect function-----
	useEffect(() => {
		groupByhandler();
		// console.log("groupName", groupName);
		// console.log("groupByData", groupByData);
	}, [groupName, OrderingBy]);

	// return call------

	return (
		<div className="">

			<div className=" bg-slate-200 p-4 flex  gap-5">
				<form className="flex gap-5">
					<h2>Group By:</h2>
					<select
						id="groupName"
						type="text"
						value={groupName}
						onChange={(event) => {
							setGroupName(event.target.value);
						}}
					>
						<option value="Priority">Priority</option>
						<option value="User">User</option>
						<option value="Status">Status</option>
					</select>
				</form>

				<form className="flex gap-5">
					<h2>Ordering By:</h2>
					<select
						id="OrderingBy"
						type="text"
						value={OrderingBy}
						onChange={(event) => {
							SetOrderingBy(event.target.value);
						}}
					>
						<option value="Priority">Priority</option>
						<option value="Title">Title</option>
					</select>
				</form>

			</div>
			<div className="flex gap-20 m-5">
				{groupByData &&
					Object.values(groupByData).map((user, idx) => {
						return (
							<Card
								key={nanoid()}
								name={Object.keys(groupByData)[idx]}
								user={user}
								groupName={groupName}
								OrderingBy={OrderingBy}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Filter;

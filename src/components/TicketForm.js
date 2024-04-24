import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTicket } from "../redux/Slices/dataSlice";

const TicketForm = ({ name, groupName, userID }) => {
	const dispatch = useDispatch();
	const heighestUser_id = useSelector(
		(store) => store.dataSlice.heighestUser_id
	);

	const [formData, setFormData] = useState({
		title: "",
		tag: "",
		UserID: "",
		priority: "",
		status: "",
	});

	const [dataUpdatedByProps, setDataUpdatedByProps] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (isValidData()) {
			dispatch(AddTicket(formData));
			resetFormData();
		}
	};

	const isValidData = () => {
		return (
			formData.title.trim() !== "" &&
			formData.tag.trim() !== "" &&
			formData.UserID !== "" &&
			formData.priority !== "" &&
			formData.status !== ""
		);
	};

	const resetFormData = () => {
		setFormData({
			title: "",
			tag: "",
			UserID: "",
			priority: "",
			status: "",
		});
	};

	const userIdOptions = useMemo(() => {
		const options = [];
		for (let i = 1; i <= heighestUser_id; i++) {
			options.push(
				<option
					key={`usr-${i}`}
					value={`usr-${i}`}
				>
					{`usr-${i}`}
				</option>
			);
		}
		return options;
	}, [heighestUser_id]);

	useEffect(() => {
		// Update formData based on props only if it hasn't been modified by the form
		if (!dataUpdatedByProps) {
			if (groupName === "Priority") {
				setFormData((prevData) => ({
					...prevData,
					priority: name,
				}));
			} else if (groupName === "Status") {
				setFormData((prevData) => ({
					...prevData,
					status: name,
				}));
			} else if (groupName === "User") {
				setFormData((prevData) => ({
					...prevData,
					UserID: `usr-${userID}`,
				}));
			}
		}
	}, [groupName, name, userID, dataUpdatedByProps]);

	useEffect(() => {
		// Check if formData has been updated by props
		const formDataUpdated =
			(groupName === "Priority" && formData.priority === name) ||
			(groupName === "Status" && formData.status === name) ||
			(groupName === "User" && formData.UserID === `usr-${userID}`);
		setDataUpdatedByProps(formDataUpdated);
	}, [formData, groupName, name, userID]);

	return (
		<div
			style={{
				border: "1px solid #ccc",
				borderRadius: "8px",
				padding: "10px",
			}}
		>
			<form onSubmit={handleSubmit}>
				<div className="cardContainer flex-gap-10">
					<div className="cardHeading flex-sb">
						<span className="color-grey">Add New Ticket</span>
					</div>
					<div
						className="cardTitle"
						style={{ fontWeight: "200" }}
					>
						<input
							type="text"
							placeholder="Title"
							name="title"
							value={formData.title}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="cardTags">
						<input
							type="text"
							placeholder="Tag"
							name="tag"
							value={formData.tag}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<select
							name="UserID"
							value={formData.UserID}
							onChange={handleInputChange}
							required
						>
							<option value="">Select User ID</option>
							{userIdOptions}
						</select>
					</div>
					<div>
						<select
							name="priority"
							value={formData.priority}
							onChange={handleInputChange}
							required
						>
							<option value="">Select Priority</option>
							<option value="0">No priority</option>
							<option value="1">Low</option>
							<option value="2">Medium</option>
							<option value="3">High</option>
							<option value="4">Urgent</option>
						</select>
					</div>
					<div>
						<input
							type="radio"
							id="statusTodo"
							name="status"
							value="Todo"
							checked={formData.status === "Todo"}
							onChange={handleInputChange}
							required
						/>
						<label htmlFor="statusTodo">Todo</label>
					</div>
					<div>
						<input
							type="radio"
							id="statusInProgress"
							name="status"
							value="In progress"
							checked={formData.status === "In progress"}
							onChange={handleInputChange}
							required
						/>
						<label htmlFor="statusInProgress">In Progress</label>
					</div>
					<div>
						<input
							type="radio"
							id="statusBacklog"
							name="status"
							value="Backlog"
							checked={formData.status === "Backlog"}
							onChange={handleInputChange}
							required
						/>
						<label htmlFor="statusBacklog">Backlog</label>
					</div>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default TicketForm;

import React from "react";
import { useSelector } from "react-redux";
import { VscCircleLargeFilled } from "react-icons/vsc";

const CardDesign = ({ data }) => {
	const userArray = useSelector(
		(store) => store.userArraySlice.userArrayFilteredData
	);
	const userName = userArray[data.userId].name.split(" ");
	let initials = "";

	if (userName.length > 1) {
		initials = userName[0][0].toUpperCase();
		initials += userName[1][0].toUpperCase();
	} else {
		initials = userName[0][0].toUpperCase();
		initials += userName[0][1].toUpperCase();
	}
	const isAvailable = userArray[data.userId].available;

	return (
		<div className="border border-gray-300 rounded-lg p-4 relative overflow-hidden shadow-md hover:shadow-lg transition duration-300">
			<div className="flex items-center justify-between mb-2">
				<span className="text-gray-600 text-sm">{data.id}</span>
				<div className="flex items-center">
					<div className="relative w-8 h-8 mr-2">
						<img
							src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&amp;w=1000&amp;q=80"
							alt="UserImage"
							className="w-full h-full rounded-full filter blur-sm"
						/>
						<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
							<span className="text-sm font-bold">
								{initials}
							</span>
						</div>
						
						<div className="absolute top-0 -right-2 bg-white rounded-full flex items-center justify-center border border-gray-300">
							<span
								className={`text-xs ${
									isAvailable
										? "text-green-600"
										: "text-red-600"
								}`}
							>
								<VscCircleLargeFilled />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-2">
				<h3 className="text-lg font-semibold">{data.title}</h3>
			</div>
			<div className="flex flex-wrap">
				{data.tag.map((tag, index) => (
					<div
						key={index}
						className="mr-2 mb-1 bg-gray-200 text-gray-600 py-1 px-2 rounded-full text-xs"
					>
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};

export default CardDesign;

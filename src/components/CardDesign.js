import React from "react";

const CardDesign = ({ data }) => {
	return (
		<div
			style={{
				border: "1px solid #ccc",
				borderRadius: "8px",
				padding: "10px",
				position: "relative",
			}}
		>
			<div className="cardContainer flex-gap-10">
				<div className="cardHeading flex-sb">
					<span className="color-grey">{data.id}</span>
				</div>
				<div
					className="imageContainer relative"
					style={{
						position: "absolute",
						top: 2,
						right: 5,
						width: "30px",
						height: "30px",
					}}
				>
					<img
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&amp;w=1000&amp;q=80"
						alt="UserImage"
						style={{
							width: "100%",
							height: "100%",
							borderRadius: "50%",
						}}
					/>
					<div className="showStatus"></div>
				</div>
				<div
					className="cardTitle"
					style={{ fontWeight: "200" }}
				>
					<p>{data.title}</p>
				</div>
				<div className="cardTags">
					<div className="tags color-grey">...</div>
					<div className="tags color-grey">
						<span>•</span> {data.tag.map((tag) => tag)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDesign;

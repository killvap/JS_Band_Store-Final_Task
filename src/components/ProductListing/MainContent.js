import React, { useState, useEffect } from "react";

const MainContent = (props) => {
	return (
		<div className="main_content">
			{noResultMessage}
			{props.products.map((item) => (
				<div className="card" key={(item = Math.random().toString())}>
					<div className="card_img">
						<img src={`${process.env.PUBLIC_URL}/${item.imageLink}`} alt={item.title} />
					</div>
					<div className="card_header">
						<h2>{item.product_name}</h2>
						<p>{item.description}</p>
						<p className="price">
							${item.price}
							<span>{item.currency}</span>
						</p>
						<div className="btn">Add to cart</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default MainContent;

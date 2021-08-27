import React, { useState, useEffect } from "react";

const MainContent = (props) => {
	let noResultMessage = "";
	let testData = props.filteredPriceData;

	if (props.clickedTitle !== "") {
		testData = props.products.filter(
			(product) =>
				product.title.toLowerCase() === props.clickedTitle.toLowerCase()
		);
	}

	if (testData.length === 0) {
		noResultMessage = (
			<span className="no-result_message">
				No results has been found for "{props.clickedTitle}"
			</span>
		);
	}


	return (
		<div className="main_content">
			{noResultMessage}
			{testData.map((item) => (
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

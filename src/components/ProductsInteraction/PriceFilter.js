import React, { useState } from "react";

const priceRange = {
	"0:Infinity": "price",
	"0:25": "0 < price < 25",
	"25:50": "25 < price < 50",
	"50:Infinity": "price > 50",
};

const PriceFilter = (props) => {
	const selectHandle = (event) => {
		const range = event.target.value.split(":");
		const max = +range[1];
		const min = +range[0];

		let filteredPriceRange = props.data.filter((item) => {
			return item.price >= min && item.price <= max;
		});

		props.onFilteredPrice(filteredPriceRange);
	};

	return (
		<div className="price-filter">
			<label className="price-filter_label" htmlFor="price-filter">
				Filter By Price:
			</label>

			<select className="price-filter_button" onChange={selectHandle}>
				{Object.values(priceRange).map((item, index) => (
					<option key={item} value={Object.keys(priceRange)[index]}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};

export default PriceFilter;

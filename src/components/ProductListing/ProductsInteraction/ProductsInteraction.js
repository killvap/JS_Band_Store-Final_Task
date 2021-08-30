import React, { useState } from "react";
import PriceFilter from "./PriceFilter";
import ProductSearch from "./ProductSearch";
import productData from "../../../data/ProductData";
import "./ProductsInteraction.css";

const ProductsInteraction = (props) => {
	const clickedTitleHandler = (title) => {
		props.onClickedTitleSubmit(title);
	};

	const setClassHandler = (classname) => {
		props.onSetClassName(classname);
	};

	const filteredPriceHandler = (range) => {
		props.onFilterByPrice(range);
	}

	return (
		<div className="product_interactions">
			<ProductSearch
				data={productData}
				onClickedTitle={clickedTitleHandler}
				onSetClass={setClassHandler}
			/>
			<PriceFilter data={productData} onFilteredPrice={filteredPriceHandler}/>
		</div>
	);
};

export default ProductsInteraction;

import React, { useState } from "react";
import Header from "./Header";
import ProductsInteraction from "./ProductsInteraction";
import MainContent from "./MainContent";
import Footer from "./Footer";
import productData from "../../data/ProductData";
import "./ProductListing.css";

const ProductListing = () => {
	const [clickedTitleSubmit, setClickedTitleSubmit] = useState("");
	const [isActive, setIsActive] = useState("");
	const [filteredPrice, setFilteredPrice] = useState(productData);

	const clickedTitleSubmitHandler = (title) => {
		setClickedTitleSubmit(title);
	};

	const setClassNameHandler = (active) => {
		setIsActive(active);
	};

	const filterByPriceHandler= (range) => {
		setFilteredPrice(range);
	}
	


	return (
		<div className="container">
			<div className={`main_image ${isActive ? 'active' : ''}`}>
				<Header />
				<ProductsInteraction
					onClickedTitleSubmit={clickedTitleSubmitHandler}
					onSetClassName={setClassNameHandler}
					onFilterByPrice={filterByPriceHandler}
				/>
			</div>

			<div className="container">
				<MainContent
					products={productData}
					clickedTitle={clickedTitleSubmit}
					filteredPriceData={filteredPrice}				
				/>
				<Footer />
			</div>
		</div>
	);
};

export default ProductListing;

import React, { useState, useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainContent from "../ProductList/ProductList";
import ProductsInteraction from "../ProductsInteraction/ProductsInteraction";
import NotFound from "../NotFound/NotFound";
import productData from "../../data/ProductData";

import "./Catalog.scss";

const Catalog = () => {
	const [clickedTitleSubmit, setClickedTitleSubmit] = useState("");
	const [isActive, setIsActive] = useState("");
	const [productsList, setProductsList] = useState(productData);
	const [filteredByPrice, setFilteredByPrice] = useState(productsList);

	const clickedTitleSubmitHandler = (title) => {
		setClickedTitleSubmit(title);
	};

	const setClassNameHandler = (active) => {
		setIsActive(active);
	};

	const filterByPriceHandler = (range) => {
		setFilteredByPrice(range);
	};

	useEffect(() => {
		if (clickedTitleSubmit !== "") {
			setProductsList(
				productData.filter(
					(product) =>
						product.title.toLowerCase() === clickedTitleSubmit.toLowerCase()
				)
			);
		}
	}, [clickedTitleSubmit]);

	useEffect(() => {
		setProductsList(filteredByPrice);
	}, [filteredByPrice]);

	return (
		<>
			<div className={`main_image ${isActive ? "active" : ""}`}>
				<Header />
				<div className="container">
					<ProductsInteraction
						onClickedTitleSubmit={clickedTitleSubmitHandler}
						onSetClassName={setClassNameHandler}
						onFilterByPrice={filterByPriceHandler}
					/>
				</div>
			</div>

			<div className="container">
				{productsList.length === 0 ? (
					<NotFound clickedTitle={clickedTitleSubmit} />
				) : (
					<MainContent
						products={productsList}
						clickedTitle={clickedTitleSubmit}
						filteredPriceData={filteredByPrice}
					/>
				)}
				<Footer />
			</div>
		</>
	);
};

export default Catalog;

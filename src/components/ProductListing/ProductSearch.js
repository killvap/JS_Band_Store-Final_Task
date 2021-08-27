import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./ProductSearch.css";

const ProductSearch = (props) => {
	// States
	const [wordEntered, setWordEntered] = useState("");
	const [filteredData, setFilteredData] = useState("");

	const searchHandler = (e) => {
		setWordEntered(e.target.value);
		
		let filteredBooks = props.data.filter((book) => {
			return book.title.toLowerCase().includes(wordEntered.toLowerCase());
		});
		
		if (e.target.value.length === 0) {
			setFilteredData([]);
		} else {
			setFilteredData(filteredBooks);
		}		
		
		if (filteredBooks.length !== 0 && e.target.value.length !== 0) {
			props.onSetClass(true);
		} else {
			props.onSetClass(false);
		}		
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if(wordEntered.length !== 0) {
			props.onClickedTitle(wordEntered);
		}

		setFilteredData([]);
		setWordEntered("");
		props.onSetClass(false);
	};

	const clickHandler = (e) => {
		setWordEntered(e.target.innerText);
		setFilteredData([]);
		props.onSetClass(false);
	};

	return (
		<form className="search search-form" onSubmit={submitHandler}>
			<div className="search-form_group searchInputs">
				<input
					type="text"
					placeholder="Book Search..."
					value={wordEntered}
					onChange={searchHandler}
				/>

				<div className="search-form_group-append">
					<button type="submit" onClick={submitHandler}>
						<i className="fa fa-search"></i>
					</button>
				</div>
			</div>
			{filteredData.length != 0 && (
				<div className="dataResult">
					{filteredData.slice(0, 20).map((value, key) => {
						return (
							<a className="dataItem" onClick={clickHandler}>
								{value.title}
							</a>
						);
					})}
				</div>
			)}
		
		</form>
	);
};

export default ProductSearch;

import React from "react";

const ProductList = (props) => {
	return (
		<div className="main_content">
			{props.products.map((item) => (
				<div className="card" key={(item = Math.random().toString())}>
					<div className="card_img">
						<img
							src={`${process.env.PUBLIC_URL}/${item.imageLink}`}
							alt={item.title}
						/>
					</div>
					<div className="card_header">
						<span>{item.title}</span>
						<p>{item.author}</p>
					</div>
					<div className="card_body">
						<div className="price">
							${item.price}
							<span>{item.currency}</span>
						</div>
						<div className="btn">VIEW</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductList;

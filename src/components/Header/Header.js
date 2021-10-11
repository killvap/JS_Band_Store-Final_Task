import React from "react";
import "./Header.scss";

const Header = () => {
	return (
		<header>
			<nav>
				<div className="header_user-auth-info">
					<div className="container">
						<span>username</span>
						<img src="" alt="" />
						<button>Sign out</button>
					</div>
				</div>

				<div className="header_user-cart container">
					<div className="user-logo">JS Band Store</div>
					<div className="user-cart">
						<i className="fa fa-shopping-basket"> Cart (0)</i>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;

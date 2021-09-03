import React from 'react';
import './Header.scss';

const Header = () => {
    return (
			<nav>
				<div className="logo">JS Band Store</div>
				<ul>
					<li>Home</li>
					<li>Our Products</li>
					<li>About Us</li>
					<li>Contact</li>
				</ul>
				<div className="search">
					<i className="fa fa-shopping-basket"></i>
				</div>
			</nav>
		);
}

export default Header;
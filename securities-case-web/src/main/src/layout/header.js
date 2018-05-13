import React from 'react';

import './header.css';

const Header = () => {
	return(
		<div>
			<nav role="navigation" aria-label="Global Navigation">
				<div className="main-nav">
					<ul className="main-nav__list">
						<li className="main-nav__list-item">
							<a href="" className="main-nav__list-item-link">Home</a>
						</li>
						<li className="main-nav__list-item">
							<a href="" className="main-nav__list-item-link">Products</a>
						</li>
					</ul>
				</div>
			</nav>
			<div className="secondary-nav">
				<div className="secondary-nav__header">
					<span className="secondary-nav__header-text">Product Management</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
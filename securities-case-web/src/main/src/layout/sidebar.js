import React from 'react';

import './sidebar.css';

const Sidebar = () => {
	return(
		<aside className="sidebar">
			<ul className="sidebar__list">
				<li className="sidebar__list-item"><a href="" className="sidebar__list-item-link">Sublink 1</a></li>
				<li className="sidebar__list-item"><a href="" className="sidebar__list-item-link">Sublink 2</a></li>
				<li className="sidebar__list-item"><a href="" className="sidebar__list-item-link">Sublink 3</a></li>
				<li className="sidebar__list-item"><a href="" className="sidebar__list-item-link">Sublink 4</a></li>
				<li className="sidebar__list-item"><a href="" className="sidebar__list-item-link">Sublink 5</a></li>
			</ul>
		</aside>
	);
};

export default Sidebar;
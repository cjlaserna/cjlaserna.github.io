// Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import "react-creative-cursor/dist/styles.css";

const Navigation = () => {
	return (
		<nav className="p-4">
			<ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
				<li>
					<Link to="/">
						<div id="link">Profile</div>
					</Link>
				</li>

				<li>
					<Link to="/experiences">
						<div id="link">Experiences</div>
					</Link>
				</li>

				<li>
					<Link to="/achievements">
						<div id="link">Achievements</div>
					</Link>
				</li>

				<li>
					<Link to="/contact">
						<div id="link">Contact</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;

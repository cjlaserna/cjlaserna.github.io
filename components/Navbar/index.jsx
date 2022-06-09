import React from "react";

export function Navbar({ theme, setTheme }) {
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex="0"
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="text-primary-content" href="#experiences">
								Experiences
							</a>
						</li>
						<li>
							<a className="text-primary-content" href="#projects">
								Projects
							</a>
						</li>
						<li>
							<a className="text-primary-content" href="#skills">
								Skills
							</a>
						</li>
						<li>
							<a className="text-primary-content" href="#contact">
								Contact
							</a>
						</li>
						<li className="form-control">
							<label className="label">
								<span className="inline label-text">Light/Dark</span>
								<input
									type="checkbox"
									className="toggle mx-3 inline"
									onChange={(e) => {
										console.log(e);
										if (typeof window !== "undefined") {
											localStorage.setItem("color-theme", !theme);
											setTheme(!theme);
										}
									}}
									defaultChecked
								/>
							</label>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">Catherine Laserna</a>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal p-0 items-center justify-center flex">
					<li>
						<a className="text-primary-content" href="#experiences">
							Experiences
						</a>
					</li>
					<li>
						<a className="text-primary-content" href="#projects">
							Projects
						</a>
					</li>
					<li>
						<a className="text-primary-content" href="#skills">
							Skills
						</a>
					</li>
					<li>
						<a className="text-primary-content" href="#contact">
							Contact
						</a>
					</li>
					<input
						type="checkbox"
						className="toggle mx-3"
						onChange={(e) => {
							console.log(e);
							if (typeof window !== "undefined") {
								localStorage.setItem("color-theme", !theme);
								setTheme(!theme);
							}
						}}
						defaultChecked
					/>
				</ul>
			</div>
		</div>
	);
}

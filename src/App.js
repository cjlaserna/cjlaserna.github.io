import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Experiences from "./pages/Experiences";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

const App = () => {
	return (
		<Router>
			<>
				<div className="holy-grail-grid">
					{/* <HeartRain /> */}

					<Routes>
						<Route path="/" element={<Profile />} />
						<Route path="/experiences" element={<Experiences />} />
						<Route path="/achievements" element={<Achievements />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</>
		</Router>
	);
};

export default App;


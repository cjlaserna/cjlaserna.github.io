import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./base.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Cursor } from "react-creative-cursor";
// import "react-creative-cursor/dist/styles.css";
// import { convertAniBinaryToCSS } from "ani-cursor";
// import animatedCursor from "./component/Normal-Select.ani";
// import selectCursor from "./component/Link-Select.ani";
// import textCursor from "./component/Text-Select.ani";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<div
			className="wrapper min-h-[100vh] flex justify-center items-center flex-col pb-20"
			id="site"
		>
			<App />
			<footer className="footer flex justify-center items-center mt-5">
				<p> Made with Love - Catherine </p>
			</footer>
		</div>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


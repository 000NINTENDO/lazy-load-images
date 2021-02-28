import React from "react";
import "./Layout.css";

const Layout = () => {
	return (
		<div>
			<h2>Grid Layout Example</h2>
			<div className="container">
				<div className="container__box_1"></div>
				<div className="container__box_1"></div>
				<div className="container__box_1"></div>
				<div className="container__box_1"></div>
				{/* <div className="layout_box_1"></div>
				<div className="layout-box-1"></div>
				<div className="layout-box-1"></div> */}
			</div>
		</div>
	);
};

export default Layout;

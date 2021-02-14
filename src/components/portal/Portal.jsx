import React from "react";
import ReactDOM from "react-dom";

const Portal = () => {
	const root_1 = document.getElementById("root_1");
	console.log(root_1);

	return ReactDOM.createPortal(
		<h1>This Element is Rendered In Portal</h1>,
		root_1
	);
};

export default Portal;

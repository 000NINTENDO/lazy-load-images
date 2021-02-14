import React from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
	return (
		<div className="progress_bar">
			<h1>Progress Bar</h1>

			<div className="progress_bar__outer_circle">
				<svg className="progress_bar__circle"></svg>
			</div>
		</div>
	);
};

export default ProgressBar;

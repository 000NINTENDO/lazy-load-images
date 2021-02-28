import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PostMethod from "./HttpMethodPractice";
import Portal from "./components/portal/Portal";
import DragAndDrop from "./components/drag_drop/DragAndDrop";
import DragableElement from "./components/dragable_element/DragableElement";
import "./index.css";
import Layout from "./components/grid_layout/Layout";
import Calender from "./components/calender/Calender";

ReactDOM.render(
	<>
		<Calender />
	</>,
	document.getElementById("root")
);

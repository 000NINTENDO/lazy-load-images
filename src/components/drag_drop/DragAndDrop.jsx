import React, { useEffect, useRef } from "react";
import BackgroundImage from "../../images/back-img-1.jpg";
import "./DragAndDrop.css";

const DragAndDrop = () => {
	const dropzone_1 = useRef();
	// const dropzone_2 = useRef();
	const dragItem = useRef();

	useEffect(() => {
		const dropzone_2 = document.querySelector(".dropzone_2");
		dragItem.current.addEventListener("dragstart", (event) => {
			event.target.style.color = "red";
			event.target.style.opacity = "0.5";
			event.dataTransfer.setData("text/plain", event.target.id);
			console.log(event.dataTransfer);
		});
		// dragItem.current.addEventListener("drag", (event) => {
		// 	console.log("i'm dragging");
		// 	event.dataTransfer.setData("text/plain", event.target);
		// 	console.log(event.dataTransfer);
		// });

		// document.addEventListener("drag", (event) => {
		// 	event.preventDefault();
		// 	console.log("dragging");
		// 	event.dataTransfer.setData("text/plain", dragItem.current);
		// });

		// document.addEventListener("dragStart", (event) => {
		// 	event.preventDefault();
		// });

		dragItem.current.addEventListener("dragend", (event) => {
			event.target.style.color = "";
			event.target.style.opacity = "1";
		});

		// dropzone_1.current.addEventListener("dragenter", (event) => {
		// 	event.preventDefault();
		// 	event.stopPropagation();
		// 	dropzone_1.current.style.borderStyle = "solid";
		// });

		dropzone_1.current.addEventListener("dragenter", (event) => {
			event.preventDefault();
			event.stopPropagation();
			dropzone_1.current.style.borderStyle = "solid";
		});

		dropzone_1.current.addEventListener("dragleave", (event) => {
			event.preventDefault();
			event.stopPropagation();
			dropzone_1.current.style.borderStyle = "";
		});

		dropzone_1.current.addEventListener("dragover", (e) => {
			e.preventDefault();
		});

		dropzone_1.current.addEventListener("drop", (event) => {
			event.preventDefault();
			console.log("im dropped", event.dataTransfer.getData("text/plain"));
			const data = event.dataTransfer.getData("text");
			dropzone_1.current.appendChild(document.getElementById(data));
		});

		dropzone_2.addEventListener("dragenter", (event) => {
			event.preventDefault();
			event.stopPropagation();
			dropzone_2.style.borderStyle = "solid";
			dropzone_2.style.transform = "scale(1.05)";
		});

		dropzone_2.addEventListener("dragleave", (event) => {
			event.preventDefault();
			event.stopPropagation();
			dropzone_2.style.borderStyle = "";
			dropzone_2.style.transform = "";
		});

		dropzone_2.addEventListener("dragover", (e) => {
			e.preventDefault();
		});

		dropzone_2.addEventListener("drop", (event) => {
			event.preventDefault();
			console.log("im dropped", event.dataTransfer.getData("text/plain"));
			const data = event.dataTransfer.getData("text");
			dropzone_2.style.transform = "";
			dropzone_2.appendChild(document.getElementById(data));
		});
	});

	return (
		<>
			<div className="dropzone_1" ref={dropzone_1}>
				<img
					src={BackgroundImage}
					id="dragable_item"
					draggable="true"
					ref={dragItem}
					alt="dragable picture"
				/>
			</div>
			<div className="dropzone_2"></div>
		</>
	);
};

export default DragAndDrop;

import React, { useState, useEffect } from "react";
import "./DragableElement.css";
import taj_mahal from "../../images/taj-mahal.jpg";

const DragableElement = () => {
	// const [position_x, setPostion_x] = useState();
	// const [position_y, setPostion_y] = useState();

	useEffect(() => {
		const dragable_element = document.querySelector(".dragable_element");
		const element_width = dragable_element.clientWidth;
		const element_height = dragable_element.clientHeight;
		console.log(element_width);
		console.log(element_height);
		let position_x = 0;
		let position_y = 0;
		let offset_x = 0;
		let offset_y = 0;
		let mousedown = false;

		dragable_element.addEventListener("mousedown", (event) => {
			offset_x = event.offsetX;
			offset_y = event.offsetY;
			dragable_element.style.cursor = "move";
			mousedown = true;
			console.log("im start");
		});

		// dragable_element.addEventListener("drag", (event) => {
		// 	event.preventDefault();
		// });

		window.addEventListener("mousemove", (event) => {
			console.log("im dragging");
			event.preventDefault();
			if (mousedown === true) {
				const position_x = event.clientX - offset_x;
				const position_y = event.clientY - offset_y;
				dragable_element.style.left = `${position_x}px`;
				dragable_element.style.top = `${position_y}px`;
				console.log("client_y", event.clientY);
				dragable_element.style.cursor = "move";
			}
		});

		dragable_element.addEventListener("mouseup", (event) => {
			position_x = event.clientX - offset_x;
			position_y = event.clientY - offset_y;
			console.log("postion_x", position_x);
			console.log("offset_x", offset_x);
			dragable_element.style.left = `${position_x}px`;
			dragable_element.style.top = `${position_y}px`;
			mousedown = false;
		});
	});
	return (
		<>
			<h2>Dragable Element</h2>
			<div className="dragable_element" draggable="true">
				<div className="dragable_element__paragraph">Drag Me</div>
				<div className="dragable_element__img_section">
					<img
						src={taj_mahal}
						className="dragable_element__img_section__image"
						alt="taj mahal"
					/>
				</div>
				<div className="dragable_element__description_section">
					<div className="dragable_element__description_section__title">
						<h2 className="dragable_element__description_section__title">
							Taj Mahal
						</h2>
					</div>
					<div className="dragable_element__description_section__location">
						<div className="dragable_element__description_section__location__icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20"
								viewBox="0 0 28 28"
								width="20"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
							</svg>
						</div>
						<p className="dragable_element__description_section__location__name">
							Agra, India
						</p>
					</div>
					<div className="dragable_element__description_section__details">
						<p className="dragable_element__description_section__details__paragraph">
							The Taj Mahal was commissioned by Shah Jahan in 1631, to be built
							in the memory of his wife Mumtaz Mahal, who died on 17 June that
							year, while giving birth to their 14th child, Gauhara Begum.
							Construction started in 1632, and the mausoleum was completed in
							1648, while the surrounding buildings and garden were finished
							five years later. The imperial court documenting Shah Jahan's
							grief after the death of Mumtaz Mahal illustrates the love story
							held as the inspiration for the Taj Mahal.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default DragableElement;

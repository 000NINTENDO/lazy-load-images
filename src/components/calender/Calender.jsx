import React, { useEffect } from "react";
import "./Calender.css";

const Calender = () => {
	let current_year;
	let current_month;

	useEffect(() => {
		const daysInMonth = () => {
			const todays_date = new Date();
			console.log(todays_date);
			const today_miliSeconds = todays_date.getTime();
			let miliSecondsInDay = 86400 * 1000;
			const dates = [];
			const date = todays_date.getDate();
			console.log(date);
			let day = date;
			let last_date;
			for (day; day <= 31; day++) {
				// let current_miliSeconds = todays_date.getTime();
				const nextDay = today_miliSeconds + miliSecondsInDay;
				const next_day = new Date(nextDay);
				// console.log("day", day);
				// console.log("next day", next_day);
				// console.log(day);
				const next_date = next_day.getDate();
				// console.log("next date", next_date);
				if (day === 1) {
					continue;
				}
				last_date = day;
				if (next_date === 1) {
					break;
				}
				last_date = next_date;
				// console.log("last day", last_date);
				// console.log(day);
				miliSecondsInDay += 86400 * 1000;
			}
			return last_date;
		};

		const firstDay = () => {
			const date = new Date();
			const date_string = date.toDateString().slice(4);
			const first_date = date_string
				.slice(0, 4)
				.concat("01,")
				.concat(date_string.slice(6));
			const new_date = new Date(first_date);
			const first_day = new_date.toDateString().slice(0, 2);
			// console.log("first day", first_day);
			// console.log("new date", new_date);
			// console.log("first date", first_date);
			// console.log("month", date_string);
			return first_day;
		};

		const currentDate = () => {
			const date = new Date();
			const current_date = date.getDate();
			return current_date;
		};

		const currentMonth = () => {
			const months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			];
			const date = new Date();
			const month = date.getMonth();
			const monthName = months[month];
			// console.log("month", month);
			// console.log("month name", monthName);
			// console.log(months.length);
			return monthName;
		};

		const currentYear = () => {
			const date = new Date();
			const year = date.getFullYear();
			return year;
		};
		const lastDate = daysInMonth();
		const first_day = firstDay();
		const current_date = currentDate();
		current_month = currentMonth();
		current_year = currentYear();
		const yearContainer = document.querySelector(
			".calender_head_month_year__month__year"
		);
		const monthContainer = document.querySelector(
			".calender_head_month_year__month__month"
		);
		const year_text = document.createTextNode(current_year);
		const month_text = document.createTextNode(current_month);
		yearContainer.appendChild(year_text);
		monthContainer.appendChild(month_text);
		console.log("last date", lastDate);
		console.log("first day", first_day);

		const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
		const datesContainer = document.querySelector(".calender_body__dates");
		// const date_box = document.createElement("span");
		// date_box.className = "calender_body__dates_date";
		// console.log(date_box);
		for (let item of days) {
			if (first_day === item) {
				let i = 1;
				for (i; i <= lastDate; i++) {
					const date_box = document.createElement("span");
					date_box.className = "calender_body__dates_date";
					const dateText = document.createTextNode(i);
					date_box.classList.add("date_visible");
					if (i === current_date) {
						date_box.classList.add("current_date");
					}
					date_box.appendChild(dateText);
					datesContainer.appendChild(date_box);
				}
				break;
			}
			const date_box = document.createElement("span");
			date_box.className = "calender_body__dates_date";
			const dateText = document.createTextNode("");
			date_box.appendChild(dateText);
			datesContainer.appendChild(date_box);
			console.log("day", item);
		}
	}, []);

	return (
		<>
			<h2>React Calender</h2>
			<div className="calender_container">
				<div className="calender_head">
					<div className="calender_head__reverse_btn">
						<button className="calender_head__reverse_btn__button">
							{/* <svg
								className="calender_head__reverse_btn__button__reverse_arrow"
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
							</svg> */}

							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{/* <rect width="24" height="24" fill="#E5E5E5" /> */}
								<path
									d="M15.5 7H13.6154L9 12L13.6154 17H15.5L11 12L15.5 7Z"
									fill="black"
								/>
							</svg>
						</button>
					</div>
					<div className="calender_head_month_year">
						<div className="calender_head_month_year__month">
							<p className="calender_head_month_year__month__month">
								{current_year}
							</p>
						</div>
						<div className="calender_head_month_year__year">
							<p className="calender_head_month_year__month__year">
								{current_month}
							</p>
						</div>
					</div>
					<div className="calender_head__forward_btn">
						<button className="calender_head__forward_btn__button">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0)">
									<path
										d="M8.5 17H10.3846L15 12L10.3846 7.00005L8.5 7.00005L13 12L8.5 17Z"
										fill="black"
									/>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect
											width="24"
											height="24"
											fill="white"
											transform="translate(24 24) rotate(180)"
										/>
									</clipPath>
								</defs>
							</svg>
						</button>
					</div>
				</div>
				<div className="calender_days">
					<span className="calender_days__day calender_days__su">Su</span>
					<span className="calender_days__day calender_days__mo">Mo</span>
					<span className="calender_days__day calender_days__tu">Tu</span>
					<span className="calender_days__day calender_days__we">We</span>
					<span className="calender_days__day calender_days__th">Th</span>
					<span className="calender_days__day calender_days__fr">Fr</span>
					<span className="calender_days__day calender_days__sa">Sa</span>
				</div>
				<div className="calender_body">
					<div className="calender_body__dates"></div>
				</div>
			</div>
		</>
	);
};

export default Calender;

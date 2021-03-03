import React, { useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
	useEffect(() => {
		const navBar = document.querySelector(".navigation-bar");
		const navBarHeight = navBar.clientHeight;
		console.log("height", navBarHeight);
		// navBar.style.transform = `translateY(-${navBarHeight}px)`;
		let scrollForward = 0;
		let scrollBackward = 0;
		// let diff = 0;
		let diffReverse = 0;
		window.addEventListener("scroll", (event) => {
			const scrolled =
				document.body.scrollTop || document.documentElement.scrollTop;
			// let scrollForward = 0;
			// let scrollBackward = 0;
			if (scrolled < scrollForward) {
				scrollBackward = scrolled;
				let diff = scrollForward - scrollBackward;
				console.log("backward scroll", scrolled);
				if (diff > 100) {
					diffReverse = scrolled;
					navBar.style.transform = "";
					console.log("hide");
					// console.log("hi");
				}
				if (diff < 100) {
					navBar.style.transform = `translateY(-${navBarHeight}px)`;
				}
				// console.log("hi");
				if (scrolled === 0) {
					navBar.style.transform = "";
					scrollForward = 0;
					diff = 0;
				}
			}
			if (scrolled > scrollForward) {
				scrollForward = scrolled;
				if (scrolled > 100) {
					navBar.style.transform = `translateY(-${navBarHeight}px)`;
				}
				console.log("forward scroll", scrolled);
			}

			// console.log("scrolled", scrolled);
		});
	});
	return (
		<>
			<header className="navigation-bar">Navigation Bar</header>
		</>
	);
};

export default NavBar;

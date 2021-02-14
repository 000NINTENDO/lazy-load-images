import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
	const [image, setImage] = useState();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(true);

	let dog_img = useRef();

	const onSuccess = (
		<div>
			<h1>The Dog Api</h1>
			{isLoading ? (
				<h2>Loading....</h2>
			) : (
				<img ref={dog_img} src={image} className="dog_img" alt="dogs" />
			)}
		</div>
	);

	console.log("Image Node", dog_img);

	const onError = (
		<div>
			<h1> {error} Page not Found</h1>
		</div>
	);

	const fetchData = async () => {
		const response = await fetch("https://dog.ceo/api/breeds/image/random");
		const result = await response.json();
		if (response.status === 200 && response.ok) {
			setImage(result.message);
			setIsLoading(false);
			console.log("Request is successfull");
			console.log("fetched data is", result);
			return;
		}
		console.log("failed", response.status);
		setError(response.status);
	};
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		// let image = document.querySelector(".dog_img");
		console.log("Image Node", dog_img);
		if (isLoading === false) {
			// image.style.opacity = "1";
			dog_img.current.style.opacity = "1";
		}
	}, [isLoading, image]);

	if (error) {
		return onError;
	}

	return onSuccess;

	// return (
	//   <div className="App">
	//     <h1>Hello React</h1>
	//     <img className="test_img" src={image} alt="" />
	//   </div>
	// );
};

export default App;

import React, { useEffect, useState } from "react";

const PostMethod = () => {
	const [post, setPost] = useState({
		userId: 1,
		title: "",
		body: "",
	});

	const handleInput = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setPost({
			...post,
			[name]: value,
		});
	};

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts/1"
			);
			const posts = await response.json();
			console.log(posts);
		};
		fetchPosts();
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(post);
		fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			headers: {
				"content-type": "application/json ; chaset=utf-8",
			},
			body: JSON.stringify(post),
		})
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				console.log("response", json);
			});

		setPost({
			title: "",
			body: "",
		});
	};
	return (
		<>
			<h2>Http Methods</h2>
			<form className="practice_form" onSubmit={handleSubmit}>
				<input
					onChange={handleInput}
					value={post.title}
					className="practice_form__title_input"
					type="text"
					name="title"
				/>
				<textarea
					style={{
						resize: "none",
					}}
					value={post.body}
					onChange={handleInput}
					className="practice_form__details_input"
					name="body"
				/>
				<button className="practice_form__submit_button" type="submit">
					submit
				</button>
			</form>
		</>
	);
};

export default PostMethod;

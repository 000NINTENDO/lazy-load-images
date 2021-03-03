import React, { useEffect } from "react";
import "./LazyLoading.css";

const LazyLoading = () => {
	useEffect(() => {
		let timeOut_1;
		const images = document.querySelectorAll(".lazy-load");

		const options = {
			root: null,
			threshold: 0,
			rootMargin: "0px",
		};
		const imageObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entrie) => {
				// console.log("entrie", entrie.target);
				if (entrie.isIntersecting) {
					const imageContainer = entrie.target;
					const image = imageContainer.children[0];
					const src = image.dataset.src;
					image.src = src;
					timeOut_1 = setTimeout(() => {
						imageContainer.style.transform = "translateX(0)";
						imageContainer.style.opacity = "1";
					}, 200);

					// console.log("style", image.style);
					observer.unobserve(imageContainer);
					console.log("src", src);
					console.log("image container", imageContainer);
					console.log("image", image);
				}
				// console.log("entrie", entrie);
			});
		}, options);

		images.forEach((image) => {
			imageObserver.observe(image);
		});
		// console.log(images);

		return () => {
			clearInterval(timeOut_1);
		};
	}, []);
	return (
		<div className="lazy-loading">
			<div className="lazy-loading__top-image">
				<img
					src="https://source.unsplash.com/random"
					className="lazy-loading__top-image__image"
					alt="home"
				/>
			</div>
			<div className="lazy-loading__content">
				<div className="lazy-loading__content__section-1">
					<div className="lazy-loading__content__section-1__image lazy-load">
						<img
							className="lazy-loading__content__section-1__image_img lazy-load-image"
							data-src="https://source.unsplash.com/random"
							alt=""
						/>
					</div>
					<div className="lazy-loading__content__section-1_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						alias quidem ab veritatis dicta blanditiis nihil illum, ipsum porro
						quos dignissimos voluptate hic nemo velit tempore inventore
						molestiae reiciendis provident odio? Beatae natus non deserunt sunt
						temporibus totam itaque praesentium eius quaerat laboriosam dolore
						dolor corporis doloribus nobis autem aut nesciunt, amet dolorum?
						Illo tenetur esse maiores a ea atque odio fugit velit numquam
						ducimus alias iusto qui iure voluptate, vero architecto eveniet
						quas, sequi voluptatibus consectetur ipsum! Veniam cupiditate
						aspernatur libero in illo ut quibusdam modi, quas cumque hic
						blanditiis praesentium. Reprehenderit blanditiis, hic ratione
						suscipit atque illum animi iusto quod provident accusamus ut
						aspernatur at minima repellat nostrum facere eum aliquam doloremque
						velit fugiat consequatur fuga. Eum obcaecati architecto praesentium
						similique, tempora earum quo non laboriosam omnis incidunt nostrum
						voluptates doloribus, a ea perspiciatis illo veritatis nisi
						molestiae nam? Accusamus mollitia saepe cumque dolores nihil
						perferendis ea odit magni totam itaque? Cupiditate dolor quam sed
						distinctio vitae fugit quos voluptatibus, sapiente impedit
						dignissimos, quae enim eaque fuga exercitationem nulla libero atque
						eius dolore earum commodi velit, qui reiciendis. Natus sunt facere
						dolore harum commodi doloribus, corrupti maiores et ullam quis
						dolorem provident distinctio tempora quos consectetur, ipsam
						numquam!
					</div>
				</div>
				<div className="lazy-loading__content__section-2">
					<div className="lazy-loading__content__section-2__image lazy-load">
						<img
							className="lazy-loading__content__section-2__image_img "
							data-src="https://images.unsplash.com/photo-1607413130274-e858701702d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt=""
						/>
					</div>
					<div className="lazy-loading__content__section-2_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						alias quidem ab veritatis dicta blanditiis nihil illum, ipsum porro
						quos dignissimos voluptate hic nemo velit tempore inventore
						molestiae reiciendis provident odio? Beatae natus non deserunt sunt
						temporibus totam itaque praesentium eius quaerat laboriosam dolore
						dolor corporis doloribus nobis autem aut nesciunt, amet dolorum?
						Illo tenetur esse maiores a ea atque odio fugit velit numquam
						ducimus alias iusto qui iure voluptate, vero architecto eveniet
						quas, sequi voluptatibus consectetur ipsum! Veniam cupiditate
						aspernatur libero in illo ut quibusdam modi, quas cumque hic
						blanditiis praesentium. Reprehenderit blanditiis, hic ratione
						suscipit atque illum animi iusto quod provident accusamus ut
						aspernatur at minima repellat nostrum facere eum aliquam doloremque
						velit fugiat consequatur fuga. Eum obcaecati architecto praesentium
						similique, tempora earum quo non laboriosam omnis incidunt nostrum
						voluptates doloribus, a ea perspiciatis illo veritatis nisi
						molestiae nam? Accusamus mollitia saepe cumque dolores nihil
						perferendis ea odit magni totam itaque? Cupiditate dolor quam sed
						distinctio vitae fugit quos voluptatibus, sapiente impedit
						dignissimos, quae enim eaque fuga exercitationem nulla libero atque
						eius dolore earum commodi velit, qui reiciendis. Natus sunt facere
						dolore harum commodi doloribus, corrupti maiores et ullam quis
						dolorem provident distinctio tempora quos consectetur, ipsam
						numquam!
					</div>
				</div>
				{/* <div className="lazy-loading__content"> */}
				<div className="lazy-loading__content__section-1">
					<div className="lazy-loading__content__section-1__image lazy-load">
						<img
							className="lazy-loading__content__section-1__image_img "
							data-src="https://images.unsplash.com/photo-1608118961436-4aa6eb97cc43?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt=""
						/>
					</div>
					<div className="lazy-loading__content__section-1_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						alias quidem ab veritatis dicta blanditiis nihil illum, ipsum porro
						quos dignissimos voluptate hic nemo velit tempore inventore
						molestiae reiciendis provident odio? Beatae natus non deserunt sunt
						temporibus totam itaque praesentium eius quaerat laboriosam dolore
						dolor corporis doloribus nobis autem aut nesciunt, amet dolorum?
						Illo tenetur esse maiores a ea atque odio fugit velit numquam
						ducimus alias iusto qui iure voluptate, vero architecto eveniet
						quas, sequi voluptatibus consectetur ipsum! Veniam cupiditate
						aspernatur libero in illo ut quibusdam modi, quas cumque hic
						blanditiis praesentium. Reprehenderit blanditiis, hic ratione
						suscipit atque illum animi iusto quod provident accusamus ut
						aspernatur at minima repellat nostrum facere eum aliquam doloremque
						velit fugiat consequatur fuga. Eum obcaecati architecto praesentium
						similique, tempora earum quo non laboriosam omnis incidunt nostrum
						voluptates doloribus, a ea perspiciatis illo veritatis nisi
						molestiae nam? Accusamus mollitia saepe cumque dolores nihil
						perferendis ea odit magni totam itaque? Cupiditate dolor quam sed
						distinctio vitae fugit quos voluptatibus, sapiente impedit
						dignissimos, quae enim eaque fuga exercitationem nulla libero atque
						eius dolore earum commodi velit, qui reiciendis. Natus sunt facere
						dolore harum commodi doloribus, corrupti maiores et ullam quis
						dolorem provident distinctio tempora quos consectetur, ipsam
						numquam!
					</div>
				</div>
				<div className="lazy-loading__content__section-2">
					<div className="lazy-loading__content__section-2__image lazy-load">
						<img
							className="lazy-loading__content__section-2__image_img "
							data-src="https://images.unsplash.com/photo-1609780919523-87c2d6dc0be2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt=""
						/>
					</div>
					<div className="lazy-loading__content__section-2_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						alias quidem ab veritatis dicta blanditiis nihil illum, ipsum porro
						quos dignissimos voluptate hic nemo velit tempore inventore
						molestiae reiciendis provident odio? Beatae natus non deserunt sunt
						temporibus totam itaque praesentium eius quaerat laboriosam dolore
						dolor corporis doloribus nobis autem aut nesciunt, amet dolorum?
						Illo tenetur esse maiores a ea atque odio fugit velit numquam
						ducimus alias iusto qui iure voluptate, vero architecto eveniet
						quas, sequi voluptatibus consectetur ipsum! Veniam cupiditate
						aspernatur libero in illo ut quibusdam modi, quas cumque hic
						blanditiis praesentium. Reprehenderit blanditiis, hic ratione
						suscipit atque illum animi iusto quod provident accusamus ut
						aspernatur at minima repellat nostrum facere eum aliquam doloremque
						velit fugiat consequatur fuga. Eum obcaecati architecto praesentium
						similique, tempora earum quo non laboriosam omnis incidunt nostrum
						voluptates doloribus, a ea perspiciatis illo veritatis nisi
						molestiae nam? Accusamus mollitia saepe cumque dolores nihil
						perferendis ea odit magni totam itaque? Cupiditate dolor quam sed
						distinctio vitae fugit quos voluptatibus, sapiente impedit
						dignissimos, quae enim eaque fuga exercitationem nulla libero atque
						eius dolore earum commodi velit, qui reiciendis. Natus sunt facere
						dolore harum commodi doloribus, corrupti maiores et ullam quis
						dolorem provident distinctio tempora quos consectetur, ipsam
						numquam!
					</div>
				</div>
				<div className="lazy-loading__content__section-1">
					<div className="lazy-loading__content__section-1__image lazy-load">
						<img
							className="lazy-loading__content__section-1__image_img "
							data-src="https://images.unsplash.com/photo-1608309082424-23fccff44797?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt=""
						/>
					</div>
					<div className="lazy-loading__content__section-1_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						alias quidem ab veritatis dicta blanditiis nihil illum, ipsum porro
						quos dignissimos voluptate hic nemo velit tempore inventore
						molestiae reiciendis provident odio? Beatae natus non deserunt sunt
						temporibus totam itaque praesentium eius quaerat laboriosam dolore
						dolor corporis doloribus nobis autem aut nesciunt, amet dolorum?
						Illo tenetur esse maiores a ea atque odio fugit velit numquam
						ducimus alias iusto qui iure voluptate, vero architecto eveniet
						quas, sequi voluptatibus consectetur ipsum! Veniam cupiditate
						aspernatur libero in illo ut quibusdam modi, quas cumque hic
						blanditiis praesentium. Reprehenderit blanditiis, hic ratione
						suscipit atque illum animi iusto quod provident accusamus ut
						aspernatur at minima repellat nostrum facere eum aliquam doloremque
						velit fugiat consequatur fuga. Eum obcaecati architecto praesentium
						similique, tempora earum quo non laboriosam omnis incidunt nostrum
						voluptates doloribus, a ea perspiciatis illo veritatis nisi
						molestiae nam? Accusamus mollitia saepe cumque dolores nihil
						perferendis ea odit magni totam itaque? Cupiditate dolor quam sed
						distinctio vitae fugit quos voluptatibus, sapiente impedit
						dignissimos, quae enim eaque fuga exercitationem nulla libero atque
						eius dolore earum commodi velit, qui reiciendis. Natus sunt facere
						dolore harum commodi doloribus, corrupti maiores et ullam quis
						dolorem provident distinctio tempora quos consectetur, ipsam
						numquam!
					</div>
				</div>
				<div className="lazy-loading__content__section-2">
					<div className="lazy-loading__content__section-2__image lazy-load">
						<img
							className="lazy-loading__content__section-2__image_img "
							data-src="
                            https://images.unsplash.com/photo-1609769621098-e4879adc4885?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt=""
						/>
					</div>
					<div className="lazy-loading__content__section-2_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						alias quidem ab veritatis dicta blanditiis nihil illum, ipsum porro
						quos dignissimos voluptate hic nemo velit tempore inventore
						molestiae reiciendis provident odio? Beatae natus non deserunt sunt
						temporibus totam itaque praesentium eius quaerat laboriosam dolore
						dolor corporis doloribus nobis autem aut nesciunt, amet dolorum?
						Illo tenetur esse maiores a ea atque odio fugit velit numquam
						ducimus alias iusto qui iure voluptate, vero architecto eveniet
						quas, sequi voluptatibus consectetur ipsum! Veniam cupiditate
						aspernatur libero in illo ut quibusdam modi, quas cumque hic
						blanditiis praesentium. Reprehenderit blanditiis, hic ratione
						suscipit atque illum animi iusto quod provident accusamus ut
						aspernatur at minima repellat nostrum facere eum aliquam doloremque
						velit fugiat consequatur fuga. Eum obcaecati architecto praesentium
						similique, tempora earum quo non laboriosam omnis incidunt nostrum
						voluptates doloribus, a ea perspiciatis illo veritatis nisi
						molestiae nam? Accusamus mollitia saepe cumque dolores nihil
						perferendis ea odit magni totam itaque? Cupiditate dolor quam sed
						distinctio vitae fugit quos voluptatibus, sapiente impedit
						dignissimos, quae enim eaque fuga exercitationem nulla libero atque
						eius dolore earum commodi velit, qui reiciendis. Natus sunt facere
						dolore harum commodi doloribus, corrupti maiores et ullam quis
						dolorem provident distinctio tempora quos consectetur, ipsam
						numquam!
					</div>
				</div>
				<div className="lazy-loading__content__section-1">
					<div className="lazy-loading__content__section-1__image lazy-load">
						<img
							className="lazy-loading__content__section-1__image_img "
							data-src="https://images.unsplash.com/photo-1608146121332-6f41fbd54616?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt=""
						/>
					</div>
					<div className="lazy-loading__content__section-1_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						alias quidem ab veritatis dicta blanditiis nihil illum, ipsum porro
						quos dignissimos voluptate hic nemo velit tempore inventore
						molestiae reiciendis provident odio? Beatae natus non deserunt sunt
						temporibus totam itaque praesentium eius quaerat laboriosam dolore
						dolor corporis doloribus nobis autem aut nesciunt, amet dolorum?
						Illo tenetur esse maiores a ea atque odio fugit velit numquam
						ducimus alias iusto qui iure voluptate, vero architecto eveniet
						quas, sequi voluptatibus consectetur ipsum! Veniam cupiditate
						aspernatur libero in illo ut quibusdam modi, quas cumque hic
						blanditiis praesentium. Reprehenderit blanditiis, hic ratione
						suscipit atque illum animi iusto quod provident accusamus ut
						aspernatur at minima repellat nostrum facere eum aliquam doloremque
						velit fugiat consequatur fuga. Eum obcaecati architecto praesentium
						similique, tempora earum quo non laboriosam omnis incidunt nostrum
						voluptates doloribus, a ea perspiciatis illo veritatis nisi
						molestiae nam? Accusamus mollitia saepe cumque dolores nihil
						perferendis ea odit magni totam itaque? Cupiditate dolor quam sed
						distinctio vitae fugit quos voluptatibus, sapiente impedit
						dignissimos, quae enim eaque fuga exercitationem nulla libero atque
						eius dolore earum commodi velit, qui reiciendis. Natus sunt facere
						dolore harum commodi doloribus, corrupti maiores et ullam quis
						dolorem provident distinctio tempora quos consectetur, ipsam
						numquam!
					</div>
				</div>
				<div className="lazy-loading__content__section-2">
					<div className="lazy-loading__content__section-2__image lazy-load">
						<img
							className="lazy-loading__content__section-2__image_img "
							data-src="
                            https://images.unsplash.com/photo-1607413130274-e858701702d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt=""
						/>
					</div>
					<div className="lazy-loading__content__section-2_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						alias quidem ab veritatis dicta blanditiis nihil illum, ipsum porro
						quos dignissimos voluptate hic nemo velit tempore inventore
						molestiae reiciendis provident odio? Beatae natus non deserunt sunt
						temporibus totam itaque praesentium eius quaerat laboriosam dolore
						dolor corporis doloribus nobis autem aut nesciunt, amet dolorum?
						Illo tenetur esse maiores a ea atque odio fugit velit numquam
						ducimus alias iusto qui iure voluptate, vero architecto eveniet
						quas, sequi voluptatibus consectetur ipsum! Veniam cupiditate
						aspernatur libero in illo ut quibusdam modi, quas cumque hic
						blanditiis praesentium. Reprehenderit blanditiis, hic ratione
						suscipit atque illum animi iusto quod provident accusamus ut
						aspernatur at minima repellat nostrum facere eum aliquam doloremque
						velit fugiat consequatur fuga. Eum obcaecati architecto praesentium
						similique, tempora earum quo non laboriosam omnis incidunt nostrum
						voluptates doloribus, a ea perspiciatis illo veritatis nisi
						molestiae nam? Accusamus mollitia saepe cumque dolores nihil
						perferendis ea odit magni totam itaque? Cupiditate dolor quam sed
						distinctio vitae fugit quos voluptatibus, sapiente impedit
						dignissimos, quae enim eaque fuga exercitationem nulla libero atque
						eius dolore earum commodi velit, qui reiciendis. Natus sunt facere
						dolore harum commodi doloribus, corrupti maiores et ullam quis
						dolorem provident distinctio tempora quos consectetur, ipsam
						numquam!
					</div>
				</div>
				<div className="lazy-loading__content__section-1">
					<div className="lazy-loading__content__section-1__image lazy-load">
						<img
							className="lazy-loading__content__section-1__image_img "
							data-src="https://images.unsplash.com/photo-1608146121332-6f41fbd54616?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt=""
						/>
					</div>
					<div className="lazy-loading__content__section-1_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						alias quidem ab veritatis dicta blanditiis nihil illum, ipsum porro
						quos dignissimos voluptate hic nemo velit tempore inventore
						molestiae reiciendis provident odio? Beatae natus non deserunt sunt
						temporibus totam itaque praesentium eius quaerat laboriosam dolore
						dolor corporis doloribus nobis autem aut nesciunt, amet dolorum?
						Illo tenetur esse maiores a ea atque odio fugit velit numquam
						ducimus alias iusto qui iure voluptate, vero architecto eveniet
						quas, sequi voluptatibus consectetur ipsum! Veniam cupiditate
						aspernatur libero in illo ut quibusdam modi, quas cumque hic
						blanditiis praesentium. Reprehenderit blanditiis, hic ratione
						suscipit atque illum animi iusto quod provident accusamus ut
						aspernatur at minima repellat nostrum facere eum aliquam doloremque
						velit fugiat consequatur fuga. Eum obcaecati architecto praesentium
						similique, tempora earum quo non laboriosam omnis incidunt nostrum
						voluptates doloribus, a ea perspiciatis illo veritatis nisi
						molestiae nam? Accusamus mollitia saepe cumque dolores nihil
						perferendis ea odit magni totam itaque? Cupiditate dolor quam sed
						distinctio vitae fugit quos voluptatibus, sapiente impedit
						dignissimos, quae enim eaque fuga exercitationem nulla libero atque
						eius dolore earum commodi velit, qui reiciendis. Natus sunt facere
						dolore harum commodi doloribus, corrupti maiores et ullam quis
						dolorem provident distinctio tempora quos consectetur, ipsam
						numquam!
					</div>
				</div>
				<div className="lazy-loading__content__section-2">
					<div className="lazy-loading__content__section-2__image lazy-load">
						<img
							className="lazy-loading__content__section-2__image_img "
							data-src="
                            https://images.unsplash.com/photo-1607817981676-7ea18ca576bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
							alt=""
						/>
					</div>
					<div className="lazy-loading__content__section-2_text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						alias quidem ab veritatis dicta blanditiis nihil illum, ipsum porro
						quos dignissimos voluptate hic nemo velit tempore inventore
						molestiae reiciendis provident odio? Beatae natus non deserunt sunt
						temporibus totam itaque praesentium eius quaerat laboriosam dolore
						dolor corporis doloribus nobis autem aut nesciunt, amet dolorum?
						Illo tenetur esse maiores a ea atque odio fugit velit numquam
						ducimus alias iusto qui iure voluptate, vero architecto eveniet
						quas, sequi voluptatibus consectetur ipsum! Veniam cupiditate
						aspernatur libero in illo ut quibusdam modi, quas cumque hic
						blanditiis praesentium. Reprehenderit blanditiis, hic ratione
						suscipit atque illum animi iusto quod provident accusamus ut
						aspernatur at minima repellat nostrum facere eum aliquam doloremque
						velit fugiat consequatur fuga. Eum obcaecati architecto praesentium
						similique, tempora earum quo non laboriosam omnis incidunt nostrum
						voluptates doloribus, a ea perspiciatis illo veritatis nisi
						molestiae nam? Accusamus mollitia saepe cumque dolores nihil
						perferendis ea odit magni totam itaque? Cupiditate dolor quam sed
						distinctio vitae fugit quos voluptatibus, sapiente impedit
						dignissimos, quae enim eaque fuga exercitationem nulla libero atque
						eius dolore earum commodi velit, qui reiciendis. Natus sunt facere
						dolore harum commodi doloribus, corrupti maiores et ullam quis
						dolorem provident distinctio tempora quos consectetur, ipsam
						numquam!
					</div>
				</div>
				<div className="lazy-loading__content__section-3"></div>
				<div className="lazy-loading__content__section-4"></div>
				<div className="lazy-loading__content__section-4"></div>
			</div>
		</div>
	);
};

export default LazyLoading;

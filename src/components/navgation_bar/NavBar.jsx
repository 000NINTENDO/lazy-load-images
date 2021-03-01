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
			<div className="some-content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
				aliquid? Aliquid, nemo sunt blanditiis maxime tenetur quo repudiandae
				eos enim harum id nulla laudantium totam iure, distinctio expedita
				magnam a deleniti! Eveniet est mollitia exercitationem debitis
				laboriosam quod rem aliquid expedita in corporis pariatur deleniti quam
				ullam magnam temporibus officiis, beatae, ut nisi sit, voluptas quis!
				Quia sequi totam fugit officia! Illum doloribus itaque architecto magnam
				dolores fugiat earum reiciendis commodi. Adipisci, corporis hic.
				Delectus quibusdam, debitis ullam aut nam autem ea ratione aspernatur,
				non error eaque ducimus explicabo, recusandae totam itaque sed quo
				asperiores a. Deleniti labore reiciendis error iure amet et, autem nulla
				possimus a eligendi sequi impedit vel, earum pariatur, praesentium qui
				sapiente incidunt! Laudantium a earum adipisci necessitatibus est,
				aliquid minima beatae itaque temporibus consectetur quas debitis facilis
				quod ab nostrum quibusdam perspiciatis, architecto dolores at! Nulla
				eveniet deserunt recusandae voluptatum laborum accusamus explicabo
				itaque ipsa a voluptates aliquid rerum qui, perspiciatis quidem officia,
				magnam perferendis iure nostrum ratione ducimus est quia maiores odio!
				Suscipit assumenda ipsa a iure veniam facere, mollitia voluptatum
				delectus facilis dicta! Magnam molestias quam sit officiis cupiditate
				minus qui incidunt ipsam tempora dicta, doloribus quasi suscipit alias
				veniam quos nam iure! Cum, saepe soluta non corporis at eveniet iste
				libero, a iure mollitia ex sequi aspernatur alias blanditiis, deserunt
				accusantium sit quibusdam. Saepe, rem est! Quibusdam minus odio delectus
				neque atque ab vero? Alias debitis repellat labore explicabo cupiditate
				consequuntur dolorum quas natus mollitia itaque? Voluptate atque ab ut,
				laborum, iste asperiores repudiandae ipsum praesentium a magni vitae
				maiores expedita quod voluptatem cumque explicabo veniam deleniti
				exercitationem eligendi. Nemo a expedita, suscipit quidem at molestias.
				Quas hic aliquam officiis ut explicabo dolorum corrupti aperiam soluta
				at corporis modi sequi impedit maiores magnam dolore minus eum animi
				nam, id ipsam illum sed voluptatum! Laboriosam voluptas accusamus
				expedita amet nobis. Dolor nemo debitis, dignissimos architecto dicta
				veniam placeat blanditiis enim provident! Dolore temporibus quae porro
				eius, quas ullam maiores ipsam consequuntur atque quaerat labore,
				accusantium consectetur eaque omnis. Fugiat sint esse labore, culpa
				repellat itaque ullam necessitatibus sunt. Temporibus libero repudiandae
				non ipsa modi consequatur obcaecati et illo, iure voluptates eos
				quibusdam ab, porro exercitationem deserunt maiores nisi at.
				Reprehenderit consectetur necessitatibus quasi nemo architecto hic fuga,
				nesciunt sit modi rerum deleniti nam animi non doloribus placeat illum?
				Deleniti, incidunt molestias cumque explicabo laborum voluptas iure!
				Ducimus, quibusdam vel laudantium ratione expedita nemo. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Tempore doloribus dolores
				officiis, ratione reprehenderit odit consequuntur ipsa eius explicabo,
				corrupti tenetur, dolor sit. Placeat veniam quos possimus fugit
				dignissimos. Tempora, soluta quibusdam? Debitis nisi eligendi quia, quod
				pariatur esse ab quis deserunt aliquid! Dolorum praesentium aliquam
				culpa. Asperiores sed illum culpa error, aspernatur deserunt impedit eum
				mollitia quos quo nulla, beatae maxime optio consectetur commodi placeat
				iusto cumque et veniam inventore! Obcaecati iste animi quidem, quam,
				voluptatum quis ipsam dolorum ut assumenda dolores, aut libero
				asperiores ipsa neque natus reiciendis maiores unde iure praesentium
				dolore facere atque. Iste maxime soluta minus voluptas nemo veritatis,
				quasi reprehenderit adipisci, reiciendis quo deleniti, est provident
				illum repellendus non iusto! Ducimus consequatur labore delectus
				perferendis nam quo aut cumque facere temporibus officia, commodi rerum
				ipsam est quis corrupti, quasi minima, voluptates explicabo! Iusto
				facilis accusamus est quidem architecto at consectetur dignissimos
				libero, ut optio repellendus beatae asperiores enim accusantium neque
				officiis unde minima eum quas quis nulla! Quaerat pariatur excepturi
				reiciendis dignissimos fuga animi voluptatum, sapiente tempore
				repudiandae nam, mollitia vitae eos odit numquam voluptas porro sit
				sequi in inventore labore aliquam? Dolor exercitationem accusantium
				ratione rem necessitatibus porro atque soluta tempora, amet temporibus
				illo, nihil dolorem modi cum iste tenetur. Unde inventore, quae
				dignissimos, dolorem facere omnis pariatur voluptate quam nemo ipsa
				quaerat ad animi delectus quibusdam odio iure sequi consequatur. Maiores
				rerum minima fugit dignissimos qui itaque, voluptate repellendus
				quisquam error, blanditiis aperiam temporibus inventore deleniti
				nesciunt iure similique ratione. Cum minus dolor illo amet, eius dolorem
				quia iusto consequuntur maiores libero odit sit tenetur nisi fugit ea
				at, totam quas consectetur, sint doloremque magnam mollitia eveniet
				facilis! Accusamus vel quod sint assumenda nisi cum obcaecati aspernatur
				blanditiis sapiente nulla incidunt ex maiores aperiam quibusdam itaque
				nemo laudantium porro maxime eum, dolorem doloribus quo. Sunt deserunt
				perferendis nihil exercitationem molestiae? Totam quia, deserunt sequi
				asperiores quod amet voluptate in nemo iusto ad neque iure incidunt
				natus voluptatum quibusdam, id harum unde debitis facilis est animi.
				Officiis, odio. Assumenda ratione aliquid sapiente esse eius tempore
				cumque non vitae optio! Tenetur, nam quae. Sunt vitae ipsum neque
				praesentium perferendis atque harum, ea dolore iure illum corrupti!
				Suscipit doloribus porro temporibus quam tempora, dolor quisquam
				repellendus accusamus iure ab maiores, molestias itaque fugit veritatis
				alias sint iusto totam incidunt saepe fugiat! Voluptates quia officia
				voluptatem perspiciatis odit nemo, facilis atque expedita dolorum
				voluptate fuga consequuntur, quo ad maxime sunt debitis eligendi,
				consectetur consequatur corporis veniam ullam tempora. Nam corporis aut
				veniam delectus necessitatibus, sed ullam similique doloribus enim dolor
				ratione incidunt voluptate suscipit laboriosam quod libero placeat
				asperiores perferendis odit consequatur id. Fuga fugiat saepe cumque
				facere placeat id, perferendis inventore nostrum labore laboriosam
				libero mollitia temporibus eveniet odio quam numquam. Laboriosam
				asperiores corporis odit delectus eaque quasi est quibusdam aspernatur
				voluptate sed omnis molestias dicta eum id iste magni perspiciatis
				sapiente, suscipit cupiditate aliquid labore! Placeat rerum nesciunt
				vero id et mollitia dicta, quaerat vel! Hic voluptatibus, expedita
				aperiam aspernatur id consequatur necessitatibus! Minus?
			</div>
			<div className="some-content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
				aliquid? Aliquid, nemo sunt blanditiis maxime tenetur quo repudiandae
				eos enim harum id nulla laudantium totam iure, distinctio expedita
				magnam a deleniti! Eveniet est mollitia exercitationem debitis
				laboriosam quod rem aliquid expedita in corporis pariatur deleniti quam
				ullam magnam temporibus officiis, beatae, ut nisi sit, voluptas quis!
				Quia sequi totam fugit officia! Illum doloribus itaque architecto magnam
				dolores fugiat earum reiciendis commodi. Adipisci, corporis hic.
				Delectus quibusdam, debitis ullam aut nam autem ea ratione aspernatur,
				non error eaque ducimus explicabo, recusandae totam itaque sed quo
				asperiores a. Deleniti labore reiciendis error iure amet et, autem nulla
				possimus a eligendi sequi impedit vel, earum pariatur, praesentium qui
				sapiente incidunt! Laudantium a earum adipisci necessitatibus est,
				aliquid minima beatae itaque temporibus consectetur quas debitis facilis
				quod ab nostrum quibusdam perspiciatis, architecto dolores at! Nulla
				eveniet deserunt recusandae voluptatum laborum accusamus explicabo
				itaque ipsa a voluptates aliquid rerum qui, perspiciatis quidem officia,
				magnam perferendis iure nostrum ratione ducimus est quia maiores odio!
				Suscipit assumenda ipsa a iure veniam facere, mollitia voluptatum
				delectus facilis dicta! Magnam molestias quam sit officiis cupiditate
				minus qui incidunt ipsam tempora dicta, doloribus quasi suscipit alias
				veniam quos nam iure! Cum, saepe soluta non corporis at eveniet iste
				libero, a iure mollitia ex sequi aspernatur alias blanditiis, deserunt
				accusantium sit quibusdam. Saepe, rem est! Quibusdam minus odio delectus
				neque atque ab vero? Alias debitis repellat labore explicabo cupiditate
				consequuntur dolorum quas natus mollitia itaque? Voluptate atque ab ut,
				laborum, iste asperiores repudiandae ipsum praesentium a magni vitae
				maiores expedita quod voluptatem cumque explicabo veniam deleniti
				exercitationem eligendi. Nemo a expedita, suscipit quidem at molestias.
				Quas hic aliquam officiis ut explicabo dolorum corrupti aperiam soluta
				at corporis modi sequi impedit maiores magnam dolore minus eum animi
				nam, id ipsam illum sed voluptatum! Laboriosam voluptas accusamus
				expedita amet nobis. Dolor nemo debitis, dignissimos architecto dicta
				veniam placeat blanditiis enim provident! Dolore temporibus quae porro
				eius, quas ullam maiores ipsam consequuntur atque quaerat labore,
				accusantium consectetur eaque omnis. Fugiat sint esse labore, culpa
				repellat itaque ullam necessitatibus sunt. Temporibus libero repudiandae
				non ipsa modi consequatur obcaecati et illo, iure voluptates eos
				quibusdam ab, porro exercitationem deserunt maiores nisi at.
				Reprehenderit consectetur necessitatibus quasi nemo architecto hic fuga,
				nesciunt sit modi rerum deleniti nam animi non doloribus placeat illum?
				Deleniti, incidunt molestias cumque explicabo laborum voluptas iure!
				Ducimus, quibusdam vel laudantium ratione expedita nemo. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Tempore doloribus dolores
				officiis, ratione reprehenderit odit consequuntur ipsa eius explicabo,
				corrupti tenetur, dolor sit. Placeat veniam quos possimus fugit
				dignissimos. Tempora, soluta quibusdam? Debitis nisi eligendi quia, quod
				pariatur esse ab quis deserunt aliquid! Dolorum praesentium aliquam
				culpa. Asperiores sed illum culpa error, aspernatur deserunt impedit eum
				mollitia quos quo nulla, beatae maxime optio consectetur commodi placeat
				iusto cumque et veniam inventore! Obcaecati iste animi quidem, quam,
				voluptatum quis ipsam dolorum ut assumenda dolores, aut libero
				asperiores ipsa neque natus reiciendis maiores unde iure praesentium
				dolore facere atque. Iste maxime soluta minus voluptas nemo veritatis,
				quasi reprehenderit adipisci, reiciendis quo deleniti, est provident
				illum repellendus non iusto! Ducimus consequatur labore delectus
				perferendis nam quo aut cumque facere temporibus officia, commodi rerum
				ipsam est quis corrupti, quasi minima, voluptates explicabo! Iusto
				facilis accusamus est quidem architecto at consectetur dignissimos
				libero, ut optio repellendus beatae asperiores enim accusantium neque
				officiis unde minima eum quas quis nulla! Quaerat pariatur excepturi
				reiciendis dignissimos fuga animi voluptatum, sapiente tempore
				repudiandae nam, mollitia vitae eos odit numquam voluptas porro sit
				sequi in inventore labore aliquam? Dolor exercitationem accusantium
				ratione rem necessitatibus porro atque soluta tempora, amet temporibus
				illo, nihil dolorem modi cum iste tenetur. Unde inventore, quae
				dignissimos, dolorem facere omnis pariatur voluptate quam nemo ipsa
				quaerat ad animi delectus quibusdam odio iure sequi consequatur. Maiores
				rerum minima fugit dignissimos qui itaque, voluptate repellendus
				quisquam error, blanditiis aperiam temporibus inventore deleniti
				nesciunt iure similique ratione. Cum minus dolor illo amet, eius dolorem
				quia iusto consequuntur maiores libero odit sit tenetur nisi fugit ea
				at, totam quas consectetur, sint doloremque magnam mollitia eveniet
				facilis! Accusamus vel quod sint assumenda nisi cum obcaecati aspernatur
				blanditiis sapiente nulla incidunt ex maiores aperiam quibusdam itaque
				nemo laudantium porro maxime eum, dolorem doloribus quo. Sunt deserunt
				perferendis nihil exercitationem molestiae? Totam quia, deserunt sequi
				asperiores quod amet voluptate in nemo iusto ad neque iure incidunt
				natus voluptatum quibusdam, id harum unde debitis facilis est animi.
				Officiis, odio. Assumenda ratione aliquid sapiente esse eius tempore
				cumque non vitae optio! Tenetur, nam quae. Sunt vitae ipsum neque
				praesentium perferendis atque harum, ea dolore iure illum corrupti!
				Suscipit doloribus porro temporibus quam tempora, dolor quisquam
				repellendus accusamus iure ab maiores, molestias itaque fugit veritatis
				alias sint iusto totam incidunt saepe fugiat! Voluptates quia officia
				voluptatem perspiciatis odit nemo, facilis atque expedita dolorum
				voluptate fuga consequuntur, quo ad maxime sunt debitis eligendi,
				consectetur consequatur corporis veniam ullam tempora. Nam corporis aut
				veniam delectus necessitatibus, sed ullam similique doloribus enim dolor
				ratione incidunt voluptate suscipit laboriosam quod libero placeat
				asperiores perferendis odit consequatur id. Fuga fugiat saepe cumque
				facere placeat id, perferendis inventore nostrum labore laboriosam
				libero mollitia temporibus eveniet odio quam numquam. Laboriosam
				asperiores corporis odit delectus eaque quasi est quibusdam aspernatur
				voluptate sed omnis molestias dicta eum id iste magni perspiciatis
				sapiente, suscipit cupiditate aliquid labore! Placeat rerum nesciunt
				vero id et mollitia dicta, quaerat vel! Hic voluptatibus, expedita
				aperiam aspernatur id consequatur necessitatibus! Minus?
			</div>
		</>
	);
};

export default NavBar;

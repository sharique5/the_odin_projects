const genMenu = function(n = 6) {
	const div = document.createElement("div");
	div.id = "menu";
	div.classList.add("flex");

	// for (let id = 0; id < n; ++id) {
	// 	const item = document.createElement("div");
	// 	item.id = id;
	// 	item.classList.add("item");

	// 	const name = document.createElement("p");
	// 	name.classList.add("name");
	// 	name.textContent = `Combo ${id+1}`;
	// 	const price = document.createElement("p");
	// 	price.classList.add("price");
	// 	price.textContent = Math.ceil(Math.random() * 10) + " $";

	// 	item.appendChild(name);
	// 	item.appendChild(price);

	// 	div.appendChild(item);
	// }

	return div;
}

export default genMenu;

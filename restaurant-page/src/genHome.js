const genHome = function(header="Indian Cuisine", description="The only thing we're serious about is food.") {
	const div = document.createElement("div");
	div.id = "home";
	div.classList.add("tab");

	const h1 = document.createElement("h1");
	h1.textContent = header;
	const p = document.createElement("p");
	p.textContent = description;

	div.appendChild(h1);
	div.appendChild(p);
	return div;
}

export default genHome;

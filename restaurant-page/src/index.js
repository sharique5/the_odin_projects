import genHome from './genHome';
import genContact from './genContact';
import genMenu from './genMenu';

const content = (function () {
	const root = document.querySelector("#content");
	const tab = (function() {
		const div = document.createElement("div");
		div.id = "display";
		div.appendChild(genHome());
		return div;
	})();
	const nav = (function() {
		const update = function(e) {
			while (tab.firstChild) {
				tab.removeChild(tab.firstChild);
			}

			const siblings = e.target.parentNode.children;
			for (let i = 0; i < siblings.length; ++i) {
				siblings[i].classList.remove("current");
			}

			e.target.classList.add("current");
			switch (e.target.dataset.name) {
				case "contact":
					tab.appendChild(genContact());
					break;
				case "menu":
					tab.appendChild(genMenu());
					break;
				default:
					tab.appendChild(genHome());
			}
		}

		// Nav tag
		const div = document.createElement("div");
		const brand = document.createElement("div");
		const tabs = document.createElement("ul");
		const home = document.createElement("li");
		const contact = document.createElement("li");
		const menu = document.createElement("li");
		div.id = "nav";
		div.classList.add("flex");
		brand.id = "brand";
		brand.textContent = "Indian Cusinie";
		brand.addEventListener("click", update);
		home.dataset.name = "home";
		home.textContent = "Home";
		home.classList.add("current");
		home.addEventListener("click", update);
		contact.dataset.name = "contact";
		contact.textContent = "Contact";
		contact.addEventListener("click", update);
		menu.dataset.name = "menu";
		menu.textContent = "Menu";
		menu.addEventListener("click", update);
		tabs.appendChild(home);
		tabs.appendChild(menu);
		tabs.appendChild(contact);
		div.appendChild(brand);
		div.appendChild(tabs);
		return div;
	})();
	
	const show = function() {
		root.appendChild(nav);
		root.appendChild(tab);
	}

	return { show };
})();

content.show();


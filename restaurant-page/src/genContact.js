const genContact = function(phone = "0123456789", address = "123 ABC Str, Defgh, Ikl") {
	const div = document.createElement("div");
	div.id = "contact";
	div.classList = "tab";

	const pPhone = document.createElement("p");
	pPhone.textContent = "Phone: " + phone;

	const pAddress = document.createElement("p");
	pAddress.textContent = "Address: " + address;

	div.appendChild(pPhone);
	div.appendChild(pAddress);
	return div;
}

export default genContact;

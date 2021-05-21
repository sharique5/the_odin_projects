console.log("hllo")

var myLibrary = [];

function Book(title, author, num_pages, isRead) {
	this.title = title
	this.author = author
	this.pages = parseInt(num_pages, 10)
	this.read = isRead
}

const addABook = {
	button: document.getElementById('add-book'),
	title: document.getElementById('book-title'),
	author: document.getElementById('book-author'),
	pages: document.getElementById('book-pages'),
	read: document.getElementById('book-read')
}

const validateBookInput = bookData => {
	if (bookData.title.length === 0) {
		document.getElementById('title-error').textContent = "Required";
		return false;
	}
	document.getElementById('title-error').textContent = "";
	if (bookData.author.length === 0) {
		document.getElementById('author-error').textContent = "Required";
		return false;
	}
	document.getElementById('author-error').textContent = "";
	if (bookData.pages.length === 0) {
		document.getElementById('page-error').textContent = "Required";
		return false;
	}
	document.getElementById('page-error').textContent = "";
	const pageCount = parseInt(bookData.pages, 10)
	if (pageCount < 0) {
		document.getElementById('page-error').textContent = "Should be positive";
		return false;
	}
	document.getElementById('page-error').textContent = "";
	return true;
}

const addBookToLibrary = bookData => {
	myLibrary.push(bookData);
	showSnackBar("Book Added");
	populateLibrary();
}

const removeBookFromLibrary = bookIndex => {
	myLibrary = [...myLibrary.slice(0, bookIndex), ...myLibrary.slice(bookIndex+1)]
	populateLibrary();
}

const toggleBookReadStatus = (bookIndex) => {
	myLibrary = [...myLibrary.slice(0, bookIndex), {
		...myLibrary[bookIndex],
		read: !myLibrary[bookIndex].read
	}, ...myLibrary.slice(bookIndex+1)]
	populateLibrary();	
}

const vacateLibrary = () => {
	myLibrary = []
	populateLibrary();
}

addABook.button.addEventListener('click', evt => {
	console.log("evet: ", evt)
	const newBook = {
		title: addABook.title.value || "",
		author: addABook.author.value || "",
		pages: addABook.pages.value || "",
		read: addABook.read.checked || false
	}
	if (validateBookInput(newBook)) {
		const book = new Book(newBook.title, newBook.author, newBook.pages, newBook.read)
		addBookToLibrary(book);
		addABook.title.value = "";
		addABook.author.value = "";
		addABook.pages.value = "";
		addABook.read.checked = false;
	}
})


const showSnackBar = snackMessage => {
	const toast = document.getElementById('snackbar')
	toast.textContent = snackMessage || ""
	toast.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

const getBookCardElement = (bookData, bookIndex) => {
	const div = document.createElement("div");
	div.setAttribute("class", "book-card");
	div.setAttribute("data-index", bookIndex);
	
	const h1 = document.createElement("h1");
	h1.textContent = bookData.title;
	
	const span = document.createElement("span");
	span.textContent = "By";
	
	const authorP = document.createElement("p");
	authorP.textContent = bookData.author;
	authorP.setAttribute("class", "author");

	const pageP = document.createElement("p");
	pageP.textContent = `with ${bookData.pages} pages`

	const checkbox = document.createElement("INPUT");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("checked", bookData.read);

	const readButton = document.createElement("button");
	readButton.innerHTML = bookData.read ? "Mark as Unread" : "Mark as read";
	readButton.addEventListener("click", evt => {
		const thisBookIndex = evt.target.parentElement.dataset.index
		toggleBookReadStatus(thisBookIndex)
	})

	const deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Remove";
	deleteButton.setAttribute("class", "delete-button");
	deleteButton.addEventListener("click", evt => {
		const thisBookIndex = evt.target.parentElement.dataset.index
		removeBookFromLibrary(thisBookIndex)
	})

	div.appendChild(h1);
	div.appendChild(span);
	div.appendChild(authorP);
	div.appendChild(pageP);
	div.appendChild(readButton);
	div.appendChild(deleteButton);

	return div;
}

const populateLibrary = () => {
	const booksContainer = document.getElementsByClassName('books')[0]
	document.getElementById('no-book').style.display = myLibrary.length === 0 ? 'flex' : 'none';
	document.querySelectorAll('.book-card').forEach(e => e.remove());
	myLibrary.forEach((book, bookIndex) => {
		booksContainer.appendChild(getBookCardElement(book, bookIndex))
	});
}
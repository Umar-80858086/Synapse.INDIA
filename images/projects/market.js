// Add event listener to the add book form
document.getElementById("add-book").addEventListener("submit", addBook);

// Add event listener to the search books form
document.getElementById("search-books").addEventListener("submit", searchBooks);

// Function to add a book
function addBook(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const region = document.getElementById("region").value;
    const price = document.getElementById("price").value;
    // Add the book to the database or a local storage
    console.log(`Added book: ${title} by ${author} from ${region} for ${price}`);
}

// Function to search for books
function searchBooks(event) {
    event.preventDefault();
    const region = document.getElementById("region").value;
    // Search for books in the database or a local storage
    const books = [
        { title: "Book 1", author: "Author 1", region: "North", price: 10 },
        { title: "Book 2", author: "Author 2", region: "South", price: 20 },
        { title: "Book 3", author: "Author 3", region: "East", price: 30 },
        { title: "Book 4", author: "Author 4", region: "West", price: 40 },
    ];
    const filteredBooks = books.filter((book) => book.region === region);
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    filteredBooks.forEach((book) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${book.title}</h3>
            <p>By ${book.author}</p>
            <p>From ${book.region}</p>
            <p>Price: ${book.price}</p>
        `;
        bookList.appendChild(li);
    });
}

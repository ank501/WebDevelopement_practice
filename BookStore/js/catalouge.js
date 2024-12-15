// navbar
fetch("/html/navbar.html")
.then((response) => response.text())
.then((html) => {
  document.getElementById("navbar").innerHTML = html;
})
.catch((error) => console.error("Error loading navbar:", error));


// Render books from LocalStorage
const books = JSON.parse(localStorage.getItem("books"));
const bookList = document.getElementById("book-list");
console.log(books);

books.forEach((book) => {
  const bookItem = document.createElement("div");
  bookItem.classList.add("book");
  bookItem.innerHTML = `
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Price: $${book.price.toFixed(2)}</p>
    <button data-id="${book.id}">Add to Cart</button>
  `;

  // Add click event to Add to Cart button
  bookItem.querySelector("button").addEventListener("click", () => {
    addToCart(book);
  });

  bookList.appendChild(bookItem);
});

// Add to cart and save in LocalStorage
function addToCart(book) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${book.title} added to cart!`);
}
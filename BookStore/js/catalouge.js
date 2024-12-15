// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
    // Fetch navbar content
    fetch("./navbar.html")
        .then((response) => {
            if (!response.ok) throw new Error("Network response was not ok.");
            return response.text();
        })
        .then((html) => {
            // Inject navbar content
            document.getElementById("navbar").innerHTML = html;

            // Highlight the active link
            const currentPath = window.location.pathname;
            const links = document.querySelectorAll("#navbar a");
            links.forEach(link => {
                if ("/html/"+link.getAttribute("href") == currentPath) {
                    link.style.backgroundColor = "teal";
                    link.style.color = "white";
                    link.style.borderRadius = "5px";
                    link.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;";
                    // console.log("Current path:", currentPath,link.borderRadius);
                }
                // console.log("Current path:", currentPath,"/html/"+link.getAttribute("href"));
            });

            // console.log("Current path:", currentPath);
        })
        .catch((error) => console.error("Error loading navbar:", error));
    });



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
// navbar
fetch("./html/navbar.html")
.then((response) => response.text())
.then((html) => {
  document.getElementById("navbar").innerHTML = html;
})
.catch((error) => console.error("Error loading navbar:", error));

// Initialize data if not already in LocalStorage
if (!localStorage.getItem("books")) {
  const books = [
    { id: 1, title: "Book A", author: "Author A", price: 10.99 ,branch:"ECE" },
    { id: 2, title: "Book B", author: "Author B", price: 15.99 },
    { id: 3, title: "Book C", author: "Author C", price: 8.99 }
  ];
  localStorage.setItem("books", JSON.stringify(books));
}

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

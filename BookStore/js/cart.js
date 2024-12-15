// navbar
fetch("/html/navbar.html")
.then((response) => response.text())
.then((html) => {
  document.getElementById("navbar").innerHTML = html;
})
.catch((error) => console.error("Error loading navbar:", error));

// Render cart items from LocalStorage
const cart = JSON.parse(localStorage.getItem("cart"));
const cartList = document.getElementById("cart-list");

cart.forEach((item, index) => {
  const cartItem = document.createElement("li");
  cartItem.classList.add("cart-item");
  cartItem.innerHTML = `
    <h3>${item.title}</h3>
    <p>Author: ${item.author}</p>
    <p>Price: $${item.price.toFixed(2)}</p>
    <button data-index="${index}">Remove</button>
  `;

  // Add click event to Remove button
  cartItem.querySelector("button").addEventListener("click", () => {
    removeFromCart(index, cartItem);
  });

  cartList.appendChild(cartItem);
});

// Remove from cart and update LocalStorage
function removeFromCart(index, cartItemElement) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(index, 1); // Remove item
  localStorage.setItem("cart", JSON.stringify(cart)); // Update LocalStorage
  cartItemElement.remove(); // Remove from DOM
  alert("Item removed from cart!");
}
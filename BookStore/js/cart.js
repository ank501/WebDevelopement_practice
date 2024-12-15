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
// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
  // Fetch navbar content
  fetch("./html/navbar.html")
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
              if (link.getAttribute("href") == currentPath) {
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

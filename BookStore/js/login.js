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

    // Login validation;

    document.addEventListener("DOMContentLoaded", () => {
        const loginForm = document.getElementById("loginForm");
        const messageDiv = document.getElementById("message");
    
        // Mock user data (replace this with a proper backend or LocalStorage)
        const users = [
            { email: "ank123@gmail.com", password: "Ank@@123" },
            { email: "user2@example.com", password: "SecurePass456!" }
        ];
    
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
    
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
    
            // Validate email and password
            const user = users.find(u => u.email === email && u.password === password);
    
            if (user) {
                messageDiv.textContent = "Login successful!";
                messageDiv.style.color = "green";
    
                // Redirect to homepage or another page
                setTimeout(() => {
                    window.location.href = "/html/catalouge.html";
                }, 1000);
            } else {
                messageDiv.textContent = "Invalid email or password!";
                messageDiv.style.color = "red";
            }
        });
    });
    
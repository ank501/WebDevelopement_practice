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
                    link.style.backgroundColor = "gray";
                    link.style.color = "white";
                    link.style.borderRadius = "5px";
                    link.style.boxshadow = "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;";
                    // console.log("Current path:", currentPath,link.borderRadius);
                }
                // console.log("Current path:", currentPath,"/html/"+link.getAttribute("href"));
            });

            // console.log("Current path:", currentPath);
        })
        .catch((error) => console.error("Error loading navbar:", error));
});





// Handle Registration Form Submission
const form = document.querySelector("form");
 form.addEventListener("submit", (e) => {
 e.preventDefault(); 

// Collect Form Data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value.trim();

// Validate Form Data
    if (!name || !email || !password || !phone) {
        alert("All fields are required!");
        return;
    }
    if (!validatePassword(password)) {
        alert(
            "Password must meet the following criteria:\n" +
            "1.At least 8 characters long\n" +
            "2.Contains at least one uppercase letter\n" +
            "3.Contains at least one lowercase letter\n" +
            "4.Contains at least one special character (!@#$%^&* etc.)\n" +
            "5.Contains at least one number"
        );
        return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        return;
    }

    alert(`Registration Successful!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    
    form.reset();
});

// Password validation function .
function validatePassword(password) {
    const minLength = /.{8,}/; // At least 8 characters
    const hasUpperCase = /[A-Z]/; // At least one uppercase letter
    const hasLowerCase = /[a-z]/; // At least one lowercase letter
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character
    const hasNumber = /[0-9]/; // At least one number

    return (
        minLength.test(password) &&
        hasUpperCase.test(password) &&
        hasLowerCase.test(password) &&
        hasSpecialChar.test(password) &&
        hasNumber.test(password)
    );
}
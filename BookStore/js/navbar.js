document.addEventListener("DOMContentLoaded", () => {
    // Fetch navbar content
// Highlight the active link
const currentPath = window.location.pathname;
const links = document.querySelectorAll("#nav1 a");
links.forEach(link => {
    if ("/html/"+link.getAttribute("href") == currentPath) {
        link.style.backgroundColor = "gray";
        link.style.color = "white";
        link.style.borderRadius = "5px";
        link.style.boxshadow = "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;";
        console.log("Current path:", currentPath,link.borderRadius);
    }
    console.log("Current path:", currentPath,"/html/"+link.getAttribute("href"));
});
});
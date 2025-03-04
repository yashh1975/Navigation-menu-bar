window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let pageTitle = document.getElementById("page-title");
    if (window.location.pathname.includes("about.html")) {
        pageTitle.textContent = "You are on the About Page";
    } else if (window.location.pathname.includes("services.html")) {
        pageTitle.textContent = "You are on the Services Page";
    } else if (window.location.pathname.includes("portfolio.html")) {
        pageTitle.textContent = "You are on the Portfolio Page";
    } else if (window.location.pathname.includes("contact.html")) {
        pageTitle.textContent = "You are on the Contact Page";
    } else {
        pageTitle.textContent = "You are on the Home Page";
    }
});
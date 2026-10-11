/* =========================
   1. MOBILE NAVIGATION MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close the menu when the button is clicked
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    // Update accessibility information
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change the menu icon
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu when a navigation link is clicked
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Close the menu when the Escape key is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    }
});


/* =========================
   2. AUTOMATIC FOOTER YEAR
========================= */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


/* =========================
   3. CONSOLE MESSAGE
========================= */

console.log("Portfolio website loaded successfully!");
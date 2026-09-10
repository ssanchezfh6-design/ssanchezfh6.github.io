/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


/* =========================================
   CLOSE MOBILE NAV AFTER CLICK
========================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* =========================================
   STICKY HEADER
========================================= */

const header = document.getElementById("site-header");

function updateHeader() {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);


/* =========================================
   SMOOTH SCROLLING
========================================= */

navigationLinks.forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (!targetId.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight = header.offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =========================================
   INITIAL HEADER STATE
========================================= */

updateHeader();

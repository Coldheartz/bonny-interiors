/* Mobile Navigation */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
const navLinkItems = document.querySelectorAll(".nav-links a");

navLinkItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});


/* Contact Form */

const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all required fields.";
        formMessage.className = "form-message error";
        return;
    }

    formMessage.textContent =
        "✓ Thank you, " + name + "! Your message has been received.";

    formMessage.className = "form-message success";

    contactForm.reset();
});
/* Scroll Reveal */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(function (element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
/* Back to Top Button */

const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/* Active Navigation Link */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});
/* Loading Screen */

const loader = document.querySelector(".loader-wrapper");

window.addEventListener("load", function () {
    setTimeout(function () {
        loader.classList.add("hidden");
    }, 800);
});
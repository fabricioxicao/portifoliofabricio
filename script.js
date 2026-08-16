// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Fechar menu ao clicar em um link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ===============================
// EFEITO DE DIGITAÇÃO
// ===============================

const typingElement = document.getElementById("typing");

const words = [
    "Full Stack",
    "Front-End",
    "Web",
    "Tecnologia"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 100
    );
}

typingEffect();


// ===============================
// ANIMAÇÃO AO ROLAR
// ===============================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


// Adiciona animação aos cards

document
    .querySelectorAll(
        ".section-title, .about, .education-card, .skill-card, .project-card"
    )
    .forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


// ===============================
// EFEITO NO HEADER
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 5, 5, 0.97)";

    } else {

        header.style.background =
            "rgba(5, 5, 5, 0.85)";

    }

});
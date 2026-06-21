// ===============================
// MENÚ RESPONSIVE
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ===============================
// SCROLL SUAVE EN EL MENÚ
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

        // cerrar menú en móviles
        nav.classList.remove("active");

    });

});


// ===============================
// BOTÓN "VER INTRODUCCIÓN"
// ===============================

const btnIntroduccion = document.querySelector(".btn-primary");

btnIntroduccion.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector("#desigualdad").scrollIntoView({
        behavior: "smooth"
    });

});


// ===============================
// CAMBIAR COLOR DE LA NAVBAR
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ===============================
// ANIMACIÓN DE APARICIÓN DE SECCIONES
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});


// ===============================
// BOTÓN PLAY
// ===============================

const playButton = document.querySelector(".play-button");

playButton.addEventListener("click", () => {

    window.open(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "_blank"
    );

});


// ===============================
// INDICADOR DE SCROLL DESAPARECE
// ===============================

window.addEventListener("scroll", () => {

    const indicador = document.querySelector(".scroll-indicator");

    if (window.scrollY > 100) {
        indicador.style.opacity = "0";
    } else {
        indicador.style.opacity = "1";
    }

});


// ===============================
// EFECTO DE CONTADOR PARA LOS DATOS
// ===============================

const numeros = document.querySelectorAll(".stat-card h3");

numeros.forEach(numero => {

    let valorFinal = numero.innerText;
    let numeroLimpio = parseFloat(valorFinal.replace(/[^\d.]/g, ""));
    let contador = 0;

    let intervalo = setInterval(() => {

        contador += numeroLimpio / 50;

        if (contador >= numeroLimpio) {
            numero.innerText = valorFinal;
            clearInterval(intervalo);
        } else {

            if (valorFinal.includes("%")) {
                numero.innerText = Math.floor(contador) + "%";
            }
            else if (valorFinal.includes("x")) {
                numero.innerText = contador.toFixed(1) + "x";
            }
            else if (valorFinal.includes("min")) {
                numero.innerText = Math.floor(contador) + " min";
            }
            else {
                numero.innerText = Math.floor(contador);
            }

        }

    }, 30);

});
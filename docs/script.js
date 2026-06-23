/* ══════════════════════════════════════════════════════════
   SCRIPT PRINCIPAL — Desigualdad en el Sistema RED
   ══════════════════════════════════════════════════════════

   Funciones incluidas:
   1. Navbar — cambio de estilo al hacer scroll (.scrolled)
   2. Indicador de scroll — desaparece al bajar
   3. Menú hamburguesa — abrir/cerrar en móvil
   4. Scroll suave — para los enlaces del menú y botones
   5. Animación de entrada de secciones — IntersectionObserver
   6. Contador animado de números — se activa al ser visible
   7. Botón Créditos — acción al hacer clic

   Todas las funciones verifican que el elemento exista en el
   DOM antes de añadir listeners, para evitar errores si el
   HTML cambia.
   ══════════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════════
   1. NAVBAR — CAMBIO DE ESTILO AL HACER SCROLL
   Cuando el usuario baja más de 60px desde el tope,
   el navbar recibe la clase .scrolled → fondo oscuro
   (definido en .navbar.scrolled en style.css).
   ══════════════════════════════════════════════════════════ */

const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}


/* ══════════════════════════════════════════════════════════
   2. INDICADOR DE SCROLL — DESAPARECE AL BAJAR
   El texto "Scroll para comenzar" se oculta suavemente
   cuando el usuario ya ha bajado más de 100px.
   ══════════════════════════════════════════════════════════ */

const indicador = document.querySelector(".scroll-indicator");

if (indicador) {
    window.addEventListener("scroll", () => {
        indicador.style.opacity = window.scrollY > 100 ? "0" : "1";
    });
}


/* ══════════════════════════════════════════════════════════
   3. MENÚ HAMBURGUESA — MÓVIL
   El botón #menu-btn alterna la clase .active en el <nav>.
   El CSS muestra el menú desplegable cuando tiene .active.
   Al hacer clic fuera del menú o del botón, se cierra.
   ══════════════════════════════════════════════════════════ */

const menuBtn = document.querySelector("#menu-btn");
const mainNav = document.querySelector("#main-nav");

if (menuBtn && mainNav) {

    /* Abrir / cerrar al clicar el botón hamburguesa */
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation(); /* evita que el clic se propague al document */
        mainNav.classList.toggle("active");
    });

    /* Cerrar al clicar fuera del menú */
    document.addEventListener("click", (e) => {
        if (!mainNav.contains(e.target) && e.target !== menuBtn) {
            mainNav.classList.remove("active");
        }
    });

}


/* ══════════════════════════════════════════════════════════
   4. SCROLL SUAVE
   Los enlaces del menú y el botón "Ver introducción"
   desplazan suavemente la página hasta la sección destino,
   en lugar de saltar bruscamente.
   ══════════════════════════════════════════════════════════ */

document.querySelectorAll("nav a, .btn-primary").forEach(link => {
    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        /* Solo actuar si el href apunta a una sección interna (#) */
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const destino = document.querySelector(href);
            if (destino) {
                destino.scrollIntoView({ behavior: "smooth" });
            }
        }

        /* Cerrar el menú desplegable en móvil */
        if (mainNav) {
            mainNav.classList.remove("active");
        }

    });
});


/* ══════════════════════════════════════════════════════════
   5. ANIMACIÓN DE ENTRADA DE SECCIONES
   IntersectionObserver detecta cuándo cada .section entra
   en el viewport. Al entrar, se le agrega la clase .show
   → CSS activa la transición de opacidad y desplazamiento.
   Una vez animada, se deja de observar (unobserve) para
   no repetir la animación y mejorar el rendimiento.
   ══════════════════════════════════════════════════════════ */

const sections = document.querySelectorAll(".section");

if (sections.length > 0) {

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                sectionObserver.unobserve(entry.target); /* no repetir */
            }
        });
    }, {
        threshold: 0.15 /* se activa cuando el 15% de la sección es visible */
    });

    sections.forEach(section => sectionObserver.observe(section));

}


/* ══════════════════════════════════════════════════════════
   6. CONTADOR ANIMADO DE DATOS ESTADÍSTICOS
   Anima los números de las tarjetas (.stat-number) desde 0
   hasta su valor final cuando la sección entra en pantalla.

   Se activa con un IntersectionObserver propio, independiente
   del observer de secciones, para mayor precisión.

   Formatos soportados en el texto del elemento:
     "+45 min"  → extrae 45, anima, devuelve "+45 min"
     "2,5x"     → extrae 2.5, anima, devuelve "2,5x"
     "36%"      → extrae 36, anima, devuelve "36%"
   ══════════════════════════════════════════════════════════ */

/**
 * Anima el conteo de un número desde 0 hasta el valor final.
 * @param {HTMLElement} elemento - El .stat-number a animar.
 */
function animarContador(elemento) {

    /* Guardar el texto original como atributo data para no perderlo */
    const textoOriginal = elemento.dataset.valor || elemento.innerText.trim();
    if (!elemento.dataset.valor) {
        elemento.dataset.valor = textoOriginal;
    }

    /* Extraer el número del texto (entero o decimal con coma) */
    const match = textoOriginal.match(/[\d]+[,.]?[\d]*/);
    if (!match) return;

    const valorFinal = parseFloat(match[0].replace(",", "."));
    if (isNaN(valorFinal) || valorFinal === 0) return;

    const duracion = 1500; /* ms totales de la animación */
    const pasos    = 60;
    const incremento = valorFinal / pasos;
    const intervalo  = duracion / pasos;
    let contador = 0;

    const timer = setInterval(() => {

        contador += incremento;

        /* Al llegar al final, mostrar el texto original exacto y parar */
        if (contador >= valorFinal) {
            elemento.innerText = textoOriginal;
            clearInterval(timer);
            return;
        }

        /* Formatear el número según el tipo de dato */
        if (textoOriginal.includes("%")) {
            elemento.innerText = Math.floor(contador) + "%";
        } else if (textoOriginal.includes("x")) {
            elemento.innerText = contador.toFixed(1).replace(".", ",") + "x";
        } else if (textoOriginal.includes("min")) {
            elemento.innerText = "+" + Math.floor(contador) + " min";
        } else {
            elemento.innerText = Math.floor(contador);
        }

    }, intervalo);

}


/* Observer que activa el contador cuando la tarjeta es visible */
const tarjetas = document.querySelectorAll(".stat-number");

if (tarjetas.length > 0) {

    const contadorObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarContador(entry.target);
                contadorObserver.unobserve(entry.target); /* animar solo una vez */
            }
        });
    }, {
        threshold: 0.5 /* se activa cuando el 50% de la tarjeta es visible */
    });

    tarjetas.forEach(tarjeta => contadorObserver.observe(tarjeta));

}


/* ══════════════════════════════════════════════════════════
   7. BOTÓN CRÉDITOS
   Al hacer clic en el botón "Créditos" del footer,
   se muestra un mensaje con la información del equipo.
   Reemplaza el alert() por un modal más elaborado si lo deseas.
   ══════════════════════════════════════════════════════════ */

const btnCreditos = document.querySelector("#btn-creditos");

if (btnCreditos) {
    btnCreditos.addEventListener("click", () => {
        /* Reemplaza este alert con un modal o sección de créditos real */
        alert("Créditos: Proyecto de periodismo de datos sobre la desigualdad en el Sistema RED de Santiago.");
    });
}

/* ══════════════════════════════════════════════════════════
   8. VIDEO SECCIÓN 03 — REPRODUCCIÓN AUTOMÁTICA AL HACER SCROLL
   IntersectionObserver detecta cuando el video entra en pantalla.
   Se reproduce automáticamente y se pausa al salir del viewport.
   ══════════════════════════════════════════════════════════ */

const videoSec3 = document.getElementById('video-seccion3');

if (videoSec3) {

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoSec3.play();
            } else {
                videoSec3.pause();
            }
        });
    }, {
        threshold: 0.4 /* se activa cuando el 40% del video es visible */
    });

    videoObserver.observe(videoSec3);

}

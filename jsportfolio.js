setTimeout(function () {
    document.getElementById("splash-screen").classList.add("ocultar");
}, 0);

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        } else {
            entrada.target.classList.remove("mostrar");
        }

    });
}, {
    threshold: 0.1
});

const elementosAocultar = document.querySelectorAll(".oculto");

elementosAocultar.forEach((el) => observador.observe(el));



const contacto = document.querySelector(".contacto");
const lista = document.querySelector(".listadrop");

if (contacto && lista) {
    contacto.addEventListener("click", () => {
        lista.classList.toggle("activo");
    });
}
let posicionCarrusel = 0;

function moverCarrusel(direccion) {
    let track = document.getElementById("carrusel-track");
    let tarjetas = track.querySelectorAll(".tarjeta-producto");
    let totalTarjetas = tarjetas.length;
    let visibles;
    if (window.innerWidth <= 480) {
        visibles = 1;
    } else if (window.innerWidth <= 900) {
        visibles = 2;
    } else {
        visibles = 3;
    }

    posicionCarrusel += direccion;

    if (posicionCarrusel > totalTarjetas - visibles) {
        posicionCarrusel = 0;
    }

    if (posicionCarrusel < 0) {
        posicionCarrusel = totalTarjetas - visibles;
    }

    let ancho = tarjetas[0].offsetWidth + 18;
    track.style.transform = "translateX(-" + (posicionCarrusel * ancho) + "px)";
}

function toggleMenu(id, boton) {

    const menu = document.getElementById(id);
    const imagen = boton.querySelector("img");

    // Animación
    imagen.classList.remove("animar");
    void imagen.offsetWidth;
    imagen.classList.add("animar");

    if (menu.style.display === "block") {

        menu.style.display = "none";
        imagen.src = "Imagenes/Flecha_Derecha.png";

    } else {

        menu.style.display = "block";
        imagen.src = "Imagenes/Flecha_Abajo.png";

    }
}

if (window.innerWidth <= 768 && !window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
    window.scrollTo({
        top: document.querySelector('.area-productos').offsetTop,
        behavior: 'smooth'
    });
}
let indiceActual = 0;
const imagenes = document.querySelectorAll('.galeria-miniaturas img');

function cambiarFoto(img) {
    document.getElementById('galeria-principal').src = img.src;
    document.querySelectorAll('.galeria-miniaturas img').forEach(m => m.classList.remove('activa'));
    img.classList.add('activa');
    indiceActual = Array.from(imagenes).indexOf(img);
}

function siguiente() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    cambiarFoto(imagenes[indiceActual]);
}

function anterior() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    cambiarFoto(imagenes[indiceActual]);
}

function toggleMenu(id, boton) {
    const menu = document.getElementById(id);
    const imagen = boton.querySelector("img");

    imagen.classList.remove("animar");
    void imagen.offsetWidth;
    imagen.classList.add("animar");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        imagen.src = "../Imagenes/Flecha_Derecha.png";
    } else {
        menu.style.display = "block";
        imagen.src = "../Imagenes/Flecha_Abajo.png";
    }
}

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

const imagenAmpliada = document.createElement("img");
imagenAmpliada.id = "imagen-ampliada";

const botonCerrar = document.createElement("span");
botonCerrar.id = "cerrar-lightbox";
botonCerrar.innerHTML = "&times;";

const flechaIzquierda = document.createElement("button");
flechaIzquierda.innerHTML = "❮";
flechaIzquierda.id = "flecha-lightbox-izquierda";

const flechaDerecha = document.createElement("button");
flechaDerecha.innerHTML = "❯";
flechaDerecha.id = "flecha-lightbox-derecha";

lightbox.appendChild(botonCerrar);
lightbox.appendChild(flechaIzquierda);
lightbox.appendChild(imagenAmpliada);
lightbox.appendChild(flechaDerecha);

document.body.appendChild(lightbox);

const imagenPrincipal = document.getElementById("galeria-principal");

imagenPrincipal.addEventListener("click", () => {
    imagenAmpliada.src = imagenPrincipal.src;
    lightbox.style.display = "flex";
});

botonCerrar.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

flechaDerecha.addEventListener("click", (e) => {
    e.stopPropagation();
    siguiente();
    imagenAmpliada.src = imagenPrincipal.src;
});

flechaIzquierda.addEventListener("click", (e) => {
    e.stopPropagation();
    anterior();
    imagenAmpliada.src = imagenPrincipal.src;
});

document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }

        if (e.key === "ArrowRight") {
            siguiente();
            imagenAmpliada.src = imagenPrincipal.src;
        }

        if (e.key === "ArrowLeft") {
            anterior();
            imagenAmpliada.src = imagenPrincipal.src;
        }
    }
});
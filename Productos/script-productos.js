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
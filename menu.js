fetch("/sidebar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("sidebar-contenedor").innerHTML = html;

    const paginaActual = window.location.pathname.split("/").pop();
    document.querySelectorAll(".sidebar-link").forEach(link => {
      const hrefPagina = link.getAttribute("href").split("/").pop();
      if (hrefPagina === paginaActual) {
        link.classList.add("activo");
      }
    });
  })
  .catch(err => console.error("Error cargando el sidebar:", err));
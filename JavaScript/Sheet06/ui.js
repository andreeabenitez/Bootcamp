export function mostrarPeliculas(peliculas) {
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = ""; // Limpia resultados previos

  peliculas.forEach((pelicula) => {
    const div = document.createElement("div");
    div.classList.add("pelicula");

    const img = document.createElement("img");
    img.src = pelicula.Poster !== "N/A" ? pelicula.Poster : "placeholder.jpg";
    img.alt = pelicula.Title;

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.Title;

    div.appendChild(img);
    div.appendChild(titulo);
    resultados.appendChild(div);
  });
}

export function mostrarError(mensaje) {
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = <p class="error">${mensaje}</p>;
}


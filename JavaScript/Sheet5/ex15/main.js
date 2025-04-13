import { buscarPeliculas } from "./api.js";
import { mostrarPeliculas } from "./ui.js";

document.getElementById("formulario").addEventListener("submit", async (e) => {
  e.preventDefault();

const query = document.getElementById("busqueda").value.trim();
if (!query) {
  alert("Por favor, ingresa un término de búsqueda.");
  return;
}

try {
  const peliculas = await buscarPeliculas(query);
  mostrarPeliculas(peliculas);
} catch (error) {
  console.error("No se pudieron obtener los resultados. Intenta nuevamente.");
}
});
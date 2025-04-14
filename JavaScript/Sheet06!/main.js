import { buscarPokemon } from "./api.js";
import { mostrarPokemon } from "./ui.js";

document.getElementById("formulario").addEventListener("submit", async (e) => {
  e.preventDefault();

const query = document.getElementById("busqueda").value.trim();
if (!query) {
  alert("Por favor, ingresa un término de búsqueda.");
  return;
}

try {
  const pokemon = await buscarPokemon(query);
  mostrarPokemon(pokemon);
} catch (error) {
  console.error("No se pudieron obtener los resultados. Intenta nuevamente.");
}
});
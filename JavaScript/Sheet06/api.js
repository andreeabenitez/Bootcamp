export async function buscarPokemon(query) {
  try {
    const response = await fetch("https://pokeapi.com/api/v2/pokemon/" + query);
    const data = await response.json();

    if (data.Response === "True") {
      return data.Search; // Retorna los resultados de búsqueda
    } else {
      throw new Error(data.Error); // Maneja errores de la API
    }
  } catch (error) {
    console.error("Error al buscar películas:", error);
    throw error;
  }
}
    
    
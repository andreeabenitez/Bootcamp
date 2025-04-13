export async function buscarPeliculas(query) {
  try {
    const response = await fetch("https://www.omdbapi.com/?apikey=7c7f65ac&s=" + query);
    const data = await response.json();    

    if (data.Response === "True") {
      return data.Search; 
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error("Error al buscar películas:", error);
  }
}
    
    

/* export function mostrarPokemon(pokemon) {
  const resultados = document.getElementById("resultados");
  resultados.innerHTML = "";

  const pokemonData = [];
  const pokemons = data.results;

  pokemons.forEach((pokemon) => {
    const div = document.createElement("div");
    div.classList.add("pokemon");

    const img = document.createElement("img");
    img.src = pokemon.Poster !== "N/A" ? pokemon.Poster : "placeholder.jpg";
    img.alt = pokemon.Title;

    const titulo = document.createElement("h3");
    titulo.textContent = pokemon.Title;

    div.appendChild(img);
    div.appendChild(titulo);
    resultados.appendChild(div);
  });
}
  */

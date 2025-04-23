const pokemonContainer = document.querySelector(".pokemon-container");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let limit = 8;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 9;
  removeChildNodes(pokemonContainer);
  fetchPokemons(offset, limit);
});

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
}

function fetchPokemons(offset, limit) {
  for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
  }
}

function createPokemon(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const typesContainer = document.createElement("div");
  typesContainer.classList.add("types");

  const types = pokemon.types.map((typeInfo) => typeInfo.type.name).join(" ");
  typesContainer.textContent = types;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(typesContainer);

  const evolutionContainer = document.createElement("div");
  evolutionContainer.classList.add("evolution-container");

  const evolutionTitle = document.createElement("p");
  evolutionTitle.textContent = "Evolución:";
  evolutionContainer.appendChild(evolutionTitle);

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`)
    .then((res) => res.json())
    .then((speciesData) => {
      if (speciesData.evolves_from_species) {
        const evolutionName = document.createElement("p");
        evolutionName.textContent = speciesData.evolves_from_species.name;
        evolutionContainer.appendChild(evolutionName);
      }
    })
    .catch((error) => {
      console.error("Error al obtener la evolución:", error);
    });

  card.appendChild(evolutionContainer);
  pokemonContainer.appendChild(card);

  function removeChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}

fetchPokemons(offset, limit);

/* import { buscarPokemon } from "./api.js";
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
}); */

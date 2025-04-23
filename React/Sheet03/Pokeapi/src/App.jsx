import React, { useState, useEffect } from "react";

import { getPokemon, getAllPokemon } from "./pokeService";
import PokemonList from "./pokemonList";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiURL = "https://pokeapi.co/api/v2/pokemon";

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setPokemonData(data.results);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonGet = await getPokemon(pokemon);
        return pokemonGet;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <>
      <Router>
        <div className="gridContainer">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <Route exact path="/">
              {pokemonData.map((pokemon, i) => {
                return <PokemonList key={i} pokemon={pokemon} />;
              })}
            </Route>
          )}
        </div>
      </Router>
    </>
  );
}
export default App;

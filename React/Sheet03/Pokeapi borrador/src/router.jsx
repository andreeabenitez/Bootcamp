import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonList from "./pokemonList";

const AppRouter = ({ pokemonData, loading }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="gridContainer">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              pokemonData.map((pokemon, i) => (
                <PokemonList key={i} pokemon={pokemon} />
              ))
            )}
          </div>
        </Route>
        {}
      </Switch>
    </Router>
  );
};

export default AppRouter;
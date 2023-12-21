import GlobalContext from "./GlobalContext";
import Router from "../Router/Router";
import { useState } from "react";
import usePokemonData from "../hooks/usePokemonData";
import usePokemonDetails from "../hooks/usePokemonDetails";

const GlobalState = () => {
  const [pokemonData] = usePokemonData("pokemon", []);
  const [pokemons, setPokemons] = usePokemonDetails(pokemonData.results);
  const [pokedex, setPokedex] = useState([]);
  

  const data = {
    getters: {
      pokemons,
      pokedex,
    },
    setters: {
      setPokemons,
      setPokedex,
    },
  };
 

  return (
    <GlobalContext.Provider value={data}>
      <Router />
    </GlobalContext.Provider>
  );
};

export default GlobalState;

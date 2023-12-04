import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import Router from "../Router/Router";

const GlobalState = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokedex, setPokedex] = useState([]);

    const getPokemonList = () => {
      
   };

  useEffect(() => {
    getPokemonList();
  }, []);

  const data = {
    getters: {
      pokemonList,
      pokedex,
    },
    setters: {
      setPokedex,
      setPokemonList,
    },
  };

  return (
    <GlobalContext.Provider value={data}>
      <Router />
    </GlobalContext.Provider>
  );
};

export default GlobalState;

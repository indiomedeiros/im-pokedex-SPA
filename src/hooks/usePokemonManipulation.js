import { useContext } from "react";
import GlobalContext from "../global/GlobalContext";
import { findPokemonById, removePokemonFromList } from "../utils/pokemonUtils";

const usePokemonManipulation = () => {
  const { getters, setters } = useContext(GlobalContext);

  const removePokemonFromPage = (idToRemovePokemon) => {
    const filteredPokemon = findPokemonById(idToRemovePokemon, getters.pokedex);

    if (getters.pokemons.length === 0) {
      setters.setPokemons(filteredPokemon);
    } else {
      setters.setPokemons([...getters.pokemons, ...filteredPokemon]);
    }

    const newList = removePokemonFromList(idToRemovePokemon, getters.pokedex);

    setters.setPokedex(newList);
    setters.setShowModal(true)
  };

  const addPokemonToPage = (idToRemovePokemon) => {
    const filteredPokemon = findPokemonById(
      idToRemovePokemon,
      getters.pokemons
    );

    if (getters.pokedex.length === 0) {
      setters.setPokedex(filteredPokemon);
    } else {
      setters.setPokedex([...getters.pokedex, ...filteredPokemon]);
    }
    const newList = removePokemonFromList(idToRemovePokemon, getters.pokemons);

    setters.setPokemons(newList);
    setters.setShowModal(true)
  };

  return [removePokemonFromPage, addPokemonToPage];
};

export default usePokemonManipulation;

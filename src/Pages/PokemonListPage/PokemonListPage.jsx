import { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import { DivHome, DivPokeList, TitlePage } from "./PokemonListPageStyles";
import { mapPokemons, sortPokemons } from "../../utils/pokemonUtils";

const PokemonListPage = () => {
  const { getters } = useContext(GlobalContext);

  const pokemonsSorted = sortPokemons(getters.pokemons);

  const pokemonsMapped = mapPokemons(pokemonsSorted);

  return (
    <DivHome>
      <TitlePage>Todos Pokémons</TitlePage>

      <DivPokeList>{pokemonsMapped}</DivPokeList>
    </DivHome>
  );
};

export default PokemonListPage;

import { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import PokemonListPageTemplate from "../../components/PokemonListPageTemplate/PokemonListPageTemplate";

const PokedexPage = () => {
  const { getters } = useContext(GlobalContext);

  return (
    <PokemonListPageTemplate
      pokemons={getters.pokedex}
      pageTitle={"Meus Pokémons"}
    />
  );
};

export default PokedexPage;

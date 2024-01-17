import { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import PokemonListPageTemplate from "../../components/PokemonListPageTemplate/PokemonListPageTemplate";

const HomePage = () => {
  const { getters } = useContext(GlobalContext);

  return (
    <>
      <PokemonListPageTemplate
        pokemons={getters.pokemons}
        pageTitle={"Todos os Pokémons"}
      />
    </>
  );
};

export default HomePage;

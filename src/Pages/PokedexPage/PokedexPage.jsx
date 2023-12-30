import { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import { mapPokemons, sortPokemons } from "../../utils/pokemonUtils";
import { DivHome, DivPokeList, TitlePage } from "./PokedexPageStyles";

const PokedexPage = () => {
    const { getters } = useContext(GlobalContext);

  const pokemonsSorted = sortPokemons(getters.pokedex);

  const pokemonsMapped = mapPokemons(pokemonsSorted);



    return ( <DivHome>
        <TitlePage>Meus Pokémons</TitlePage>
  
        <DivPokeList>{pokemonsMapped}</DivPokeList>
      </DivHome>);
}

export default PokedexPage;
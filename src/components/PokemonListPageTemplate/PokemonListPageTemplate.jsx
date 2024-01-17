import { useContext} from "react";
import { mapPokemons, sortPokemons } from "../../utils/pokemonUtils";
import {
  GridContainer,
  MainContainer,
  PokeListContainer,
  TitlePage,
} from "./PokemonListPageTemplateStyles";
import Modal from "../Modal/Modal";
import GlobalContext from "../../global/GlobalContext";
import { createPortal } from "react-dom";

const PokemonListPageTemplate = ({ pokemons, pageTitle }) => {
  const {getters} = useContext(GlobalContext) 

  const pokemonsSorted = sortPokemons(pokemons);

  const pokemonsMapped = mapPokemons(pokemonsSorted);
  


  return (
    <MainContainer>
      {getters.showModal && createPortal(<Modal/>, document.body)}
      <GridContainer>
        <TitlePage>{pageTitle}</TitlePage>
        <PokeListContainer>{pokemonsMapped}</PokeListContainer>
      </GridContainer>
    </MainContainer>
  );
};

export default PokemonListPageTemplate;

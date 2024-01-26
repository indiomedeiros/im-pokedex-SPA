import { mapPokemons, sortPokemons } from "../../utils/pokemonUtils";
import Modal from "../Modal/Modal";
import {
  GridContainer,
  MainContainer,
  PokeListContainer,
  TitlePage,
} from "./PokemonListPageTemplateStyles";



const PokemonListPageTemplate = ({ pokemons, pageTitle }) => {

  const pokemonsSorted = sortPokemons(pokemons);

  const pokemonsMapped = mapPokemons(pokemonsSorted);
  


  return (
    <MainContainer>
      <Modal/>
      <GridContainer>
        <TitlePage>{pageTitle}</TitlePage>
        <PokeListContainer>{pokemonsMapped}</PokeListContainer>
      </GridContainer>
    </MainContainer>
  );
};

export default PokemonListPageTemplate;

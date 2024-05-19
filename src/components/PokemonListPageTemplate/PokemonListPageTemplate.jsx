import { useState } from "react";
import { mapPokemons, sortPokemons } from "../../utils/pokemonUtils";
import Filters from "../Filters/Filters";
import Modal from "../Modal/Modal";
import {
  GridContainer,
  MainContainer,
  PokeListContainer,
  TitlePage,
} from "./PokemonListPageTemplateStyles";

const PokemonListPageTemplate = ({ pokemons, pageTitle }) => {
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
  
  const pokemonsSorted = sortPokemons(pokemonsFiltered);
  const pokemonsMapped = mapPokemons(pokemonsSorted);
  

  return (
    <MainContainer>
      <Filters pokemons={pokemons} setPokemonsFiltered={setPokemonsFiltered} />
      <Modal />
      <GridContainer>
        <TitlePage>{pageTitle}</TitlePage>
        <PokeListContainer>{pokemonsMapped}</PokeListContainer>
      </GridContainer>
    </MainContainer>
  );
};

export default PokemonListPageTemplate;

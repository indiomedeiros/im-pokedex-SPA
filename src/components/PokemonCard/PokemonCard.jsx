/* eslint-disable react/prop-types */
import {
  ButtonCardRemover,
  ButtonCardAdd,
  ButtonCardDetail,
  CardContainer,
  ElementalTypesContainer,
  ImageCard,
  ImagePokebol,
  Order,
  PokemonElementImage,
  Title,
} from "./PokemonCardStyles";
import pokebolBackgroun from "../../assets/pokebol-background.png";
import { useLocation, useNavigate } from "react-router-dom";
import { getPokemonElementImage } from "../../utils/pokemonElementImage";
import { goToDetails } from "../../router/coordinator";
import usePokemonManipulation from "../../hooks/usePokemonManipulation";
import {
  applyPokemonOrderPattern,
  changeFirstLetterToCapital,
} from "../../utils/pokemonUtils";

const PokemonCard = ({ id, name, types, image }) => {
  const [removePokemon, addPokemon] = usePokemonManipulation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <CardContainer type={types[0]?.type.name}>
      <ImagePokebol src={pokebolBackgroun} />

      <div>
        <Order>{applyPokemonOrderPattern(id)}</Order>
        <Title>{changeFirstLetterToCapital(name)}</Title>
        <ElementalTypesContainer>
          <PokemonElementImage
            src={getPokemonElementImage(types[0]?.type.name)}
            alt="primeiro elemento do pokémon"
          />

          {types[1]?.type.name && (
            <PokemonElementImage
              src={getPokemonElementImage(types[1]?.type.name)}
              alt={"segundo elemento do pokémon"}
            />
          )}
        </ElementalTypesContainer>
      </div>

      <ImageCard src={image} />

      <ButtonCardDetail onClick={() => goToDetails(navigate, name)}>
        Detalhes
      </ButtonCardDetail>

      {pathname === "/pokedex" ? (
        <ButtonCardRemover onClick={() => removePokemon(id)}>
          Excluir
        </ButtonCardRemover>
      ) : (
        <ButtonCardAdd onClick={() => addPokemon(id)}>Capturar!</ButtonCardAdd>
      )}
    </CardContainer>
  );
};

export default PokemonCard;

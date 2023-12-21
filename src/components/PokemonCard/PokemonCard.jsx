/* eslint-disable react/prop-types */
import {
  ButtonCardAddRemove,
  ButtonCardDetail,
  CardContainer,
  DivElementalTypes,
  ImageCard,
  ImagePokebol,
  Order,
  PokemonElementImage,
  Title,
} from "./PokemonCardStyles";
import pokebolBackgroun from "../../assets/pokebol-background.png";
import { useLocation, useNavigate } from "react-router-dom";
import { getPokemonElementImage } from "../../utils/pokemonElementImage";
import { goToDetails } from "../../Router/coordinator";
import usePokemonManipulation from "../../hooks/usePokemonManipulation";

const PokemonCard = ({ id, name, types, image }) => {
  const [removePokemon, addPokemon] = usePokemonManipulation();
  const navigate = useNavigate();
  const { pathname } = useLocation();


  const nameFirstLetterCapital = name[0].toUpperCase() + name.substring(1);
  const mainPokemonType = types[0].type.name;

  const mainElementImage =
    types[0] && getPokemonElementImage(types[0].type.name);

  const secondaryElementImage =
    types[1] && getPokemonElementImage(types[1].type.name);

  const pokemonOrderNumber = `#${id.toString().padStart(2, "0")}`;

  return (
    <CardContainer type={mainPokemonType}>
      <ImagePokebol src={pokebolBackgroun} />

      <div>
        <Order>{pokemonOrderNumber}</Order>
        <Title>{nameFirstLetterCapital}</Title>
        <DivElementalTypes>
          <PokemonElementImage src={mainElementImage} alt="" />

          {secondaryElementImage && (
            <PokemonElementImage src={secondaryElementImage} alt={"elemento"} />
          )}
        </DivElementalTypes>
      </div>

      <ImageCard src={image} />

      <ButtonCardDetail onClick={() => goToDetails(navigate, name)}>
        Detalhes
      </ButtonCardDetail>

      {pathname === "/pokedex" ? (
        <ButtonCardAddRemove onClick={() => removePokemon(id)}>
          Remover
        </ButtonCardAddRemove>
      ) : (
        <ButtonCardAddRemove onClick={() => addPokemon(id)}>
          Capturar!
        </ButtonCardAddRemove>
      )}
    </CardContainer>
  );
};

export default PokemonCard;

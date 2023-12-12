import {
    ButtonCardAddRemove,
    ButtonCardDetail,
  CardContainer,
  DivElementalTypes,
  ImageCard,
  ImagePokebol,
  Order,
  Title,
} from "./PokemonCardStyles";
import pokebolBackgroun from "../../assets/pokebol-background.png";
import { useLocation } from "react-router-dom";
import { getPokemonElementImage } from "../../utils/pokemonElementImage";

const PokemonCard = ({ id, name, types, image }) => {
    const {path} = useLocation


  const nameFirstLetterCapital = name[0].toUpperCase() + name.substring(1);
  const mainPokemonType = types[0].type.name;

  const mainElementImage = types[0] && getPokemonElementImage (types[0].type.name);

  const secondaryElementImage =
    types[1] && getPokemonElementImage(types[1].type.name);

  

  return (
    <CardContainer type={mainPokemonType}>
      <ImagePokebol src={pokebolBackgroun} />
      <div>
          {id < 10 ? (
            <Order>#0{id}</Order>
          ) : (
            <Order>#{id}</Order>
          )}
          <Title>{nameFirstLetterCapital}</Title>
              <DivElementalTypes>
                  <img src={mainElementImage} alt=""/>
            
                 { secondaryElementImage && <img src={secondaryElementImage} alt={"elemento"} />}
            
          </DivElementalTypes>
        </div>
          <ImageCard src={image} />
          
          <ButtonCardDetail>
          Detalhes
        </ButtonCardDetail>
        {path === "/pokedex" ? (
          <ButtonCardAddRemove
           
          >
            Remover
          </ButtonCardAddRemove>
        ) : (
          <ButtonCardAddRemove
          >
            Capturar!
          </ButtonCardAddRemove>
        )}
    </CardContainer>
  );
};

export default PokemonCard;

import { useParams } from "react-router-dom";
import {
  PokemonStatsBox,
  ElementalTypesContainer,
  MainContainer,
  PokemonCardImage,
  PokebolImage,
  PokemonMovesList,
  PokemonMovesBox,
  OrderText,
  PokemonAttributeGrid,
  PokemonElementImage,
  PokemonImageBox,
  TitleText,
  PageTitle,
  SubTitleText,
  PokemonMoves,
} from "./PokemonDetailPageStyles";
import usePokemonData from "../../hooks/usePokemonData";
import { getPokemonElementImage } from "../../utils/pokemonElementImage";
import bigPokebolBackground from "../../assets/big-pokeball-background.svg";
import BaseStats from "../../components/BaseStats/BaseStats";

const PokemonDetailPage = () => {
  const { pokename } = useParams();
  const [pokemonDetails] = usePokemonData(`pokemon/${pokename}`);
  

  const nameFirstLetterCapital = `${pokemonDetails?.name[0].toUpperCase()}${pokemonDetails?.name.substring(
    1
  )}`;
  const mainPokemonType = pokemonDetails?.types[0].type.name;

  const mainElementImage =
    pokemonDetails?.types[0] &&
    getPokemonElementImage(pokemonDetails?.types[0].type.name);

  const secondaryElementImage =
    pokemonDetails?.types[1] &&
    getPokemonElementImage(pokemonDetails?.types[1].type.name);

  const pokemonOrderNumber = `#${pokemonDetails?.id
    .toString()
    .padStart(2, "0")}`;
  const pokemonOficialArtworkImage =
    pokemonDetails?.sprites.other["official-artwork"]["front_default"];

  

  return (
    <MainContainer>
      <PageTitle>Detalhes</PageTitle>
      {pokemonDetails && <PokemonAttributeGrid type={mainPokemonType}>
        <PokemonImageBox>
          <img src={pokemonDetails?.sprites["front_default"]} />
        </PokemonImageBox>

        <PokemonImageBox>
          <img src={pokemonDetails?.sprites["back_default"]} />
        </PokemonImageBox>
        <PokemonStatsBox>
          
          <BaseStats
            stats={pokemonDetails?.stats}
          />
            
        </PokemonStatsBox>
        <PokebolImage src={bigPokebolBackground} />
        <PokemonMovesBox>
          <div>
            <OrderText>{pokemonOrderNumber}</OrderText>
            <TitleText>{nameFirstLetterCapital}</TitleText>
            <ElementalTypesContainer>
              <PokemonElementImage src={mainElementImage} />
              <PokemonElementImage src={secondaryElementImage} />
            </ElementalTypesContainer>
          </div>
          <PokemonMovesList>
            <SubTitleText>Moves:</SubTitleText>
            {pokemonDetails?.moves.map((item, index) => {
              if (index < 4) {
                return <PokemonMoves key={item.move.name}>{item.move.name}</PokemonMoves>;
              }
            })}
          </PokemonMovesList>
          
        </PokemonMovesBox>
        
        <PokemonCardImage src={pokemonOficialArtworkImage} />
        
      </PokemonAttributeGrid>
      }
    
    </MainContainer>
  );
};

export default PokemonDetailPage;

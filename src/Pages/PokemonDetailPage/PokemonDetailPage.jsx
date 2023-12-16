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
} from "./PokemonDetailPageStyles";
import usePokemonData from "../../hooks/usePokemonData";
import { getPokemonElementImage } from "../../utils/pokemonElementImage";
import bigPokebolBackground from "../../assets/big-pokeball-background.svg";
import BaseStats from "../../components/BaseStats/BaseStats";

const PokemonDetailPage = () => {
  const { pokename } = useParams();
  const [pokemonDetails] = usePokemonData(`pokemon/${pokename}`);

  console.log(pokemonDetails);

  const nameFirstLetterCapital =
    `${pokemonDetails?.name[0].toUpperCase()}${pokemonDetails?.name.substring(1)}`;
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
      <PokemonAttributeGrid type={mainPokemonType}>
        <PokemonImageBox>
          <img src={pokemonDetails?.sprites["front_default"]} />
        </PokemonImageBox>

        <PokemonImageBox>
          <img src={pokemonDetails?.sprites["back_default"]} />
        </PokemonImageBox>
        <PokemonStatsBox>
          <SubTitleText>Base Stats:</SubTitleText>
          {pokemonDetails?.stats.map(atribute=> {
            return <BaseStats key={atribute.stat.name} nameStats={ atribute.stat.name} value={ atribute['base_stat']} />
          })}
          <p>Total: </p>
          
        </PokemonStatsBox>

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
                return <p key={item.move.name}>{ item.move.name}</p>
              }
              
            })}
          </PokemonMovesList>
        </PokemonMovesBox>
        <PokebolImage src={bigPokebolBackground} />
        <PokemonCardImage src={pokemonOficialArtworkImage} />
      </PokemonAttributeGrid>
    </MainContainer>
  );
};

export default PokemonDetailPage;

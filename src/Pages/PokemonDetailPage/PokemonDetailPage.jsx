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

import { getPokemonElementImage } from "../../utils/pokemonElementImage";
import bigPokebolBackground from "../../assets/big-pokeball-background.svg";
import BaseStats from "../../components/BaseStats/BaseStats";
import {
  applyPokemonOrderPattern,
  changeFirstLetterToCapital,
  validatePropertiesPokemonDetails,
} from "../../utils/pokemonUtils";
import usePokemonData from "../../hooks/usePokemonData";

const PokemonDetailPage = () => {
  const { pokename } = useParams();
  const [pokemonDetails] = usePokemonData(`pokemon/${pokename}`);
  const { id, name, moves, sprites, stats, types } =
    validatePropertiesPokemonDetails(pokemonDetails);

  const mappedMovements =
    moves &&
    moves.map((item, index) => {
      if (index < 4) {
        return (
          <PokemonMoves key={item.move.name}>{item.move.name}</PokemonMoves>
        );
      }
    });

  return (
    <MainContainer>
      <PageTitle>Detalhes</PageTitle>
      {pokemonDetails && (
        <PokemonAttributeGrid type={types[0]?.type.name}>
          <PokemonImageBox>
            <img
              src={sprites["front_default"]}
              alt="image of the pokemon from the front"
            />
          </PokemonImageBox>

          <PokemonImageBox>
            <img
              src={sprites["back_default"]}
              alt="image of the pokemon from the back"
            />
          </PokemonImageBox>
          <PokemonStatsBox>
            <BaseStats stats={stats} />
          </PokemonStatsBox>
          <PokebolImage src={bigPokebolBackground} />
          <PokemonMovesBox>
            <div>
              <OrderText>{applyPokemonOrderPattern(id)}</OrderText>
              <TitleText>{changeFirstLetterToCapital(name)}</TitleText>
              <ElementalTypesContainer>
                <PokemonElementImage
                  src={getPokemonElementImage(types[0]?.type.name)}
                />
                <PokemonElementImage
                  src={getPokemonElementImage(types[1]?.type.name)}
                />
              </ElementalTypesContainer>
            </div>
            <PokemonMovesList>
              <SubTitleText>Moves:</SubTitleText>
              {mappedMovements}
            </PokemonMovesList>
          </PokemonMovesBox>

          <PokemonCardImage
            src={sprites.other["official-artwork"]["front_default"]}
          />
        </PokemonAttributeGrid>
      )}
    </MainContainer>
  );
};

export default PokemonDetailPage;

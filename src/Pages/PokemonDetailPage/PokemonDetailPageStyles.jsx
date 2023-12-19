import styled from "styled-components";
import { getColorElementalType } from "../../utils/colorUtils";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: #737373;
  align-items: center;
  min-height: 100vh;
`;

export const PageTitle = styled.h1`
  color: white;
  padding: 60px 0px 56px 150px;
  text-align: left;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  font-family: sans-serif;
  align-self: flex-start;
`;

export const PokemonAttributeGrid = styled.section`
  display: grid;
  width: 1389.143px;
  height: 663px;
  flex-shrink: 0;
  border-radius: 37.886px;
  background: ${(props) => getColorElementalType(props.type)};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  margin-bottom: 26vh;
  position: relative;
  column-gap: 34px;
`;

export const PokemonImageBox = styled.div`
  background-color: white;
  width: 282px;
  height: 282px;
  grid-column: 1/1;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
  }
`;

export const PokemonStatsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 343px;
  height: 613px;
  grid-column: 2/2;
  grid-row: 1/3;
  border-radius: 8px;
  padding: 18px;
  
`;

export const PokemonMovesBox = styled.div`
  width: 292px;
  height: 613px;
  grid-column: 3/3;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 34px;
`;

export const PokemonMovesList = styled.div`
  width: 292px;
  height: 453px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 18px;
  gap: 10px;
`;

//texts
const GeneralTextAttributes = styled.p`
  font-family: "Open Sans", sans-serif;
  color: white;
  grid-column: 3/4;
  grid-row: 1/2;
`;
export const OrderText = styled(GeneralTextAttributes)`
  font-size: 1.2rem;
`;
export const TitleText = styled(GeneralTextAttributes)`
  font-size: 2rem;
`;

export const SubTitleText = styled.h2`
  color: black;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  align-self: self-start;
  margin-bottom: 20px;
  
  
`;

//image
export const ElementalTypesContainer = styled.div`
  display: flex;
  column-gap: 18px;
  margin-top: 10px;
`;
export const PokemonElementImage = styled.img``;

export const PokemonCardImage = styled.img`
  grid-column: 4/5;
  grid-row: 1/1;
  width: 270px;
  height: 270px;
  position: absolute;
  top: 0;
  margin-top: -130px;
`;

export const PokebolImage = styled.img`
  width: 78%;
  height: 99%;
  grid-column: 2/5;
  position: relative;
  object-fit: cover;
  right: 0;
  position: absolute;
`;

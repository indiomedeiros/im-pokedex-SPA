import styled from "styled-components";
import { getColorElementalType } from "../../utils/colorUtils";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  grid-template-rows: 1fr 1fr;
  height: 210px;
  width: 440px;
  margin: 30px 15px;
  border-radius: 12px;
  background: ${(props) => getColorElementalType(props.type)};
  position: relative;
`;

//texts
const GeneralTextAttributes = styled.p`
  margin-left: 20px;
  font-family: "Open Sans", sans-serif;
  color: white;
`;
export const Order = styled(GeneralTextAttributes)`
  grid-column: 1/2;
  grid-row: 1/2;

  margin-top: 20px;
  font-size: 1.2rem;
`;
export const Title = styled(GeneralTextAttributes)`
  grid-column: 1/2;
  grid-row: 1/2;
  font-size: 2rem;
`;

//image
export const DivElementalTypes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 80%;
  margin-top: 10px;
  margin-left: 20px;
  gap: 5px;
`;

export const ImageCard = styled.img`
  grid-column: 2/3;
  grid-row: 1/2;
  width: 193px;
  height: 193px;
  margin-top: -52px;
  justify-self: center;
  position: absolute;
`;

export const ImagePokebol = styled.img`
  height: 180px;
  grid-column: 2/3;
  justify-self: center;
  grid-row: 1/2;
  opacity: 0.2;
  filter: brightness(800%);
  width: 290px;
  position: absolute;
  object-fit: cover;
  margin-right: 20px;
`;

export const PokemonElementImage = styled.img`
 
  
`
//buttons
const GeneralButtonAttributes = styled.button`
  margin: 20px;
  height: 38px;
  font-size: 1.2rem;
  border: none;

  :hover {
    cursor: pointer;
  }
  font-family: "Open Sans", sans-serif;
`;

export const ButtonCardDetail = styled(GeneralButtonAttributes)`
  grid-column: 1/2;
  grid-row: 3/4;

  width: 74px;
  justify-self: start;
  background: none;
  text-decoration: underline;
  color: white;
`;
export const ButtonCardAddRemove = styled(GeneralButtonAttributes)`
  grid-column: 2/3;
  grid-row: 3/4;
  width: 146px;
  justify-self: end;
  border-radius: 8px;
  background: #ffffff;
  font-weight: 400;
  position: absolute;
`;

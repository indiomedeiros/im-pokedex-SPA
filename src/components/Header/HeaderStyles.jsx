import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  height: 160px;
 
  
`;

export const ButtonPokedex = styled.button`
  grid-column: 3/4;
  justify-self: end;
  align-self: center;
  width: 287px;
  height: 74px;
  background: #33a4f5;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  color: white;
  font-family: "Open Sans", sans-serif;
  margin: 41px;
 
`;

export const ButtonDelete = styled(ButtonPokedex)`
  height: 57px;
  width: 226px;
  font-size: 1rem;


`;
export const ButtonHome = styled.button`
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: start;
  align-self: center;
  width: 287px;
  height: 74px;
  background: none;
  font-size: 1.5rem;
  border: none;
  font-family: "Open Sans", sans-serif;
  margin: 41px;

`;

export const LogoStyle = styled.img`
  grid-column: 2/3;
  width: 307px;
  height: 113px;
  align-self: center;
  justify-self: center;
  margin: 21px;

`;

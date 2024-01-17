import styled from "styled-components";

export const MainContainer = styled.main`
  background: #737373;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 0.15fr 1fr;
  max-width: 1440px;
`;
export const TitlePage = styled.div`
  color: white;
  padding: 60px 0px 25px 30px;
  text-align: left;
  font-size: 3rem;
  font-family: sans-serif;
  font-weight: 700;
`;

export const PokeListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

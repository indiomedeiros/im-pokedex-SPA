import styled from "styled-components";

export const MainContainer = styled.main`
  background: #737373;
  min-height: 90vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 140px 1fr;
  width: 100%;
  max-width: 1440px;
  justify-content: left;
  height: 100%;
`;
export const TitlePage = styled.h1`
  color: white;
  padding: 60px 0px 25px 30px;
  text-align: left;
  font-size: 2.6rem;
  font-family: sans-serif;
  font-weight: 700;
`;

export const PokeListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

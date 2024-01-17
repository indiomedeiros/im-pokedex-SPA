import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: gray;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

export const ModalStyled = styled.div`
  background: white;
  width: 50%;
  height: 50%;
`;

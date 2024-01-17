import { useContext } from "react";
import { Container, ModalStyled } from "./ModalStyles";
import GlobalContext from "../../global/GlobalContext";


const Modal = () => {
    const {setters} = useContext(GlobalContext)
  return (
    <Container onClick={()=> setters.setShowModal(false)}>
      <ModalStyled>
        <h1>Olá mundo!</h1>
      </ModalStyled>
    </Container>
  );
};

export default Modal;
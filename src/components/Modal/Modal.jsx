import { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import ReactModal from "react-modal";
import { ModalText, ModalTitle } from "./ModalStyles";
import { useLocation } from "react-router-dom";

const Modal = () => {
  const { getters, setters } = useContext(GlobalContext);
  const { pathname } = useLocation();

  const modalTitle = pathname.includes("pokedex") ? "Oh, no!" : "Gotcha!";
  const modalText = pathname.includes("pokedex")
    ? "O Pokémon foi removido da sua Pokedéx"
    : "O Pokémon foi adicionado na sua Pokedéx";

  const onCloseModal = () => {
    setters.setShowModal(false);
  };

  return (
    <>
      {getters.showModal && (
        <ReactModal
          isOpen
          onRequestClose={onCloseModal}
          style={{
            content: {
              position: "absolute",
              top: "40%",
              left: "35%",
              right: "35%",
              bottom: "25%",
              border: "none",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "20px",
              outline: "none",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "451px",
              minHeight: "222px",
            },
          }}
        >
          <ModalTitle>{modalTitle}</ModalTitle>
          <ModalText>{ modalText}</ModalText>
        </ReactModal>
      )}
    </>
  );
};

export default Modal;

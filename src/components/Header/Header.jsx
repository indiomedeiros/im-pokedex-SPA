import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../Router/coordinator";
import logo from "../../assets/pokemon-logo.png";
import {
  ButtonDelete,
  ButtonHome,
  ButtonPokedex,
  HeaderContainer,
  LogoStyle,
} from "./HeaderStyles";

const Header = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <LogoStyle src={logo} />

      {(pathname === "/pokedex" || pathname.includes("/details")) && (
        <ButtonHome onClick={() => goToHome(navigate)}>
         ❮ <u>Todos os Pokémons</u>
        </ButtonHome>
      )}
      {pathname === "/" && (
        <ButtonPokedex onClick={() => goToPokedex(navigate)}>
          Pokédex
        </ButtonPokedex>
      )}
      {pathname.includes("/details") && (
        <ButtonDelete>Excluir da Pokédex</ButtonDelete>
      )}
    </HeaderContainer>
  );
};

export default Header;

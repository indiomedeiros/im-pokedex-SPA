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
import usePokemonManipulation from "../../hooks/usePokemonManipulation";
import { useContext } from "react";
import GlobalContext from "../../global/GlobalContext";
import { checkPokemonExistsOnPage } from "../../utils/pokemonUtils";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { getters } = useContext(GlobalContext);
  const [removePokemonFromPage] = usePokemonManipulation();

  const pokemonName = pathname.replace("/details/", "");
  const checkResults = checkPokemonExistsOnPage(pokemonName, getters.pokedex);

  return (
    <HeaderContainer>
      <LogoStyle src={logo} />

      {(pathname === "/pokedex" || pathname.includes("/details")) && (
        <ButtonHome onClick={() => goToHome(navigate)}>
          ❮ <u>Todos os Pokémons</u>
        </ButtonHome>
      )}
      {(pathname === "/" || (!checkResults && pathname !== "/pokedex")) && (
        <ButtonPokedex onClick={() => goToPokedex(navigate)}>
          Pokédex
        </ButtonPokedex>
      )}
      {checkResults && (
        <ButtonDelete onClick={() => removePokemonFromPage(checkResults.id)}>
          Excluir da Pokédex
        </ButtonDelete>
      )}
    </HeaderContainer>
  );
};

export default Header;

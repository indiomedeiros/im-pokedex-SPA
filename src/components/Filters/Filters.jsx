import { useEffect, useState } from "react";
import pokemonElements from "../../utils/pokemonElements";
import { FiltersConainer } from "./FiltersStyles";

const Filters = ({ pokemons, setPokemonsFiltered }) => {
  const [search, setSearch] = useState({
    element: "nenhum",
    name: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };

  const pokemonsFiltered = pokemons
    .filter((pokemon) => {
      if (search.element === "nenhum") {
        return true;
      }

      return pokemon.types.some(
        (typeInfo) => typeInfo.type.name === search.element
      );
    })
    .filter((pokemon) =>
      pokemon.name.includes(search.name.toLocaleLowerCase())
    );

  useEffect(() => {
    setPokemonsFiltered(pokemonsFiltered);
  }, [search, pokemons]);

  return (
    <FiltersConainer>
      <label htmlFor="name">Nome</label>
      <input name="name" id="name" onChange={handleInput} value={search.name} />
      <label htmlFor="element">Tipo:</label>
      <select
        name="element"
        id="element"
        onChange={handleInput}
        value={search.element}
      >
        <option value="nenhum">nenhum</option>
        {pokemonElements.map((element) => (
          <option key={element} name={"element"}>
            {element}
          </option>
        ))}
      </select>
    </FiltersConainer>
  );
};

export default Filters;

import PokemonCard from "../components/PokemonCard/PokemonCard";

export const sortPokemons = (pokemons) => {
  return pokemons.sort((a, b) => {
    return a.id - b.id;
  });
};

export const mapPokemons = (pokemons) => {
  return pokemons.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        id={pokemon.id}
        name={pokemon.name}
        types={pokemon.types}
        image={pokemon.sprites.other["official-artwork"]["front_default"]}
      />
    );
  });
};

export const findPokemonById = (id, sourcePokemons) => {
  const filteredPokemon = sourcePokemons.filter((pokemon) => {
    return pokemon.id === id;
  });

  return filteredPokemon;
};

export const removePokemonFromList = (id, sourcePokemons) => {
  const newList = sourcePokemons.filter((pokemon) => {
    return pokemon.id !== id;
  });

  return newList;
};

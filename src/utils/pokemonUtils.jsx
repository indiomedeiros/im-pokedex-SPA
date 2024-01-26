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

export const checkPokemonExistsOnPage = (pokeName, sourcePokemons) => {
  return sourcePokemons.find((pokemon) => pokemon.name === pokeName);
};

export const changeFirstLetterToCapital = (name) => {
  return name[0].toUpperCase() + name.substring(1);
};

export const applyPokemonOrderPattern = (id) => {
  return `#${id.toString().padStart(2, "0")}`;
};

export const validatePropertiesPokemonDetails = (pokemonDetails) => {
  const id = pokemonDetails?.id;
  const sprites = pokemonDetails?.sprites;
  const moves = pokemonDetails?.moves;
  const name = pokemonDetails?.name;
  const stats = pokemonDetails?.stats;
  const types = pokemonDetails?.types;

  if (id && name && moves && sprites && stats && types) {
    return pokemonDetails;
  } else {
    return [];
  }
};


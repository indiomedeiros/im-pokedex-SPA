import axios from "axios";
import { useEffect, useState } from "react";

const usePokemonDetails = (pokeApiResults) => {
  const [details, setDetails] = useState([]);

  const getPokemonDetails = async () => {
    try {
      const pokemonDetailsPromises = pokeApiResults.map((data) =>
        axios.get(data.url)
      );
      const response = await Promise.all(pokemonDetailsPromises);
      const rearrangedResponse = response.map((response) => {
        return response.data;
      });
      setDetails(rearrangedResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pokeApiResults && getPokemonDetails();
  }, [pokeApiResults]);

  return [details, setDetails];
};

export default usePokemonDetails;

import { useEffect, useState } from "react";
import { PokeApi } from "../global/ApiRequestConfig";

const usePokemonData = (path, initialState) => {
  const [data, setData] = useState(initialState);

  const getPokemonData = async () => {
    try {
      const response = await PokeApi.get(path);
      setData(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, [path]);

  return [data];
};

export default usePokemonData;

import { client } from "../../config/axios";

// Function that fetch initial pokemon list from pokeapi
export function fetchPokemon() {
  const url = async () => {
    try {
      const endPointList = await client.get(`pokemon?offset=${10}&limit=10`);
      const endPointResponse = await Promise.all(
        endPointList.data.result.map((link) => client.get(link.url))
      );
      const pokeData = await Promise.all(
        endPointResponse.map((res) => res.data)
      );

      return pokeData;
    } catch (error) {
      console.log(error);
    }
  };

  return url;
}

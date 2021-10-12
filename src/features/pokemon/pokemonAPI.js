import { client } from "../../config/axios";

// Function that fetch initial pokemon list from pokeapi
export async function fetchPokemon() {
  try {
    const endPointList = await client.get(`pokemon?offset=${10}&limit=10`);
    const endPointResponse = await Promise.all(
      endPointList.data.results.map((link) => client.get(link.url))
    );
    const pokeData = await Promise.all(endPointResponse.map((res) => res.data));
    return pokeData;
  } catch (error) {
    throw new Error();
  }
}

// Fetch only one pokemon
export async function fetchOnePokemon(id) {
  try {
    const endPoint = await client.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const endPointResponse = await endPoint.data;
    return endPointResponse;
  } catch (error) {}
  throw new Error();
}

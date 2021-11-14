import { client } from "../../config/axios";

// Function that fetch initial pokemon list from pokeapi
export async function fetchPokemon(offsetValue) {
  try {
    const endPointList = await client.get(
      `pokemon?offset=${offsetValue === 10 ? 0 : offsetValue}&limit=10`
    );
    const endPointResponse = await Promise.all(
      endPointList.data.results.map((link) => client.get(link.url))
    );
    const pokeData = await Promise.all(endPointResponse.map((res) => res.data));

    return pokeData;
  } catch (error) {
    throw new Error();
  }
}

// Fetch one pokemon
export async function fetchOnePokemon(id) {
  try {
    const endPoint = await Promise.all(
      [`pokemon/${id}`, `pokemon-species/${id}`].map((link) => client.get(link))
    );

    const endPointResponse = await Promise.all(endPoint.map((res) => res.data));

    const evolutionsAndWeaknesses = await Promise.all(
      [
        endPointResponse[1]["evolution_chain"]["url"],
        endPointResponse[0].types[0]["type"]["url"],
      ].map((link) => client(link))
    );
    const evolutionsAndWeaknessesResponse = await Promise.all(
      evolutionsAndWeaknesses.map((res) => res.data)
    );

    return [...endPointResponse, ...evolutionsAndWeaknessesResponse];
  } catch (error) {
    throw new Error();
  }
}

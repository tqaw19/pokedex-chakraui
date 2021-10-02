import { Grid, Heading } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import CardPokemon from "./CardPokemon";

import { fetchInitialPokemonList } from "../features/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ListPokemon() {
  const dispatch = useDispatch(fetchInitialPokemonList);
  const pokemonStatus = useSelector((state) => state.pokemon.status);
  const pokemonData = useSelector((state) => state.pokemon.pokemon);

  useEffect(() => {
    if (pokemonStatus === "idle") {
      dispatch(fetchInitialPokemonList());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Heading size="lg" textAlign="center" mt="9">
        Pokemon List
      </Heading>
      <Grid
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={4}
        py="16"
        px={["6", null, null, "28", "44"]}
      >
        {pokemonData?.map((pokemon) => (
          <CardPokemon key={pokemon.id} {...pokemon} />
        ))}
      </Grid>
    </>
  );
}

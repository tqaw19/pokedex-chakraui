import { Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import CardPokemon from "./CardPokemon";

import { fetchInitialPokemonList } from "../features/pokemon/pokemonSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/spinner";

export default function ListPokemon() {
  const dispatch = useDispatch();
  // const pokemonStatus = useSelector((state) => state.pokemon.status);
  const pokemonData = useSelector((state) => state.pokemon.pokemon);
  const status = useSelector((state) => state.pokemon.status);

  useEffect(() => {
    if (pokemonData.length === 0) {
      dispatch(fetchInitialPokemonList());
    }
    // eslint-disable-next-line
  }, []);

  const SpinnerComponent = () => (
    <Flex align="center" direction="column" m="36">
      <Spinner />
      <Text m="4" fontSize="smaller">
        Loading
      </Text>
    </Flex>
  );

  return (
    <>
      <Heading size="lg" textAlign="center" mt="9">
        Pokemon List
      </Heading>
      {status === "loading" ? (
        <SpinnerComponent />
      ) : (
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
      )}
    </>
  );
}

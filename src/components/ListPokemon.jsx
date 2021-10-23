import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Grid, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import CardPokemon from "./CardPokemon";
import {
  fetchInitialPokemonList,
  nextOffset,
} from "../features/pokemon/pokemonSlice";
import SpinnerComponent from "./SpinnerComponent";

export default function ListPokemon() {
  const dispatch = useDispatch();
  // const pokemonStatus = useSelector((state) => state.pokemon.status);
  const pokemonData = useSelector((state) => state.pokemon.pokemon);
  const status = useSelector((state) => state.pokemon.status);
  const offsetValue = useSelector((state) => state.pokemon.offset);

  useEffect(() => {
    console.log(offsetValue);
    if (pokemonData.length !== offsetValue) {
      dispatch(fetchInitialPokemonList(offsetValue));
    }
    // eslint-disable-next-line
  }, [offsetValue]);

  return (
    <>
      <Heading size="lg" textAlign="center" mt="9">
        Pokemon List
      </Heading>
      {status === "loading" && pokemonData.length === 0 ? (
        <SpinnerComponent />
      ) : (
        <>
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
          <Flex justify="center">
            <Button
              onClick={() => dispatch(nextOffset())}
              colorScheme="brand.200"
              bg="brand.200"
              _hover={{ background: "#04aaa5" }}
              mb="16"
              mx="auto"
            >
              Load More
            </Button>
          </Flex>
        </>
      )}
    </>
  );
}

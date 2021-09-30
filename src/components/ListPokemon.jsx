import { Grid, Heading } from "@chakra-ui/layout";
import React from "react";
import CardPokemon from "./CardPokemon";

export default function ListPokemon() {
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
        <CardPokemon />
      </Grid>
    </>
  );
}

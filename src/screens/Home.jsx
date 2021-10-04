import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import ListPokemon from "../components/ListPokemon";
import SearchPokemon from "../components/SearchPokemon";

export function Home() {
  return (
    <Box
      bg="brand.300"
      minH="100vh"
      d="flex"
      justifyContent="center"
      marginBottom="0"
    >
      <Container bg="brand.800" maxW="container.xl" p="0">
        <SearchPokemon />
        <ListPokemon />
      </Container>
    </Box>
  );
}

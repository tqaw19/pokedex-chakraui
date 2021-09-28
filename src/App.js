import { Box, Text, Container, Heading } from "@chakra-ui/layout";
import React from "react";
import SearchPokemon from "./components/SearchPokemon";
import { Counter } from "./features/counter/Counter";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <>
      <AppLayout />
      <Box
        bg="brand.300"
        minH="100vh"
        d="flex"
        justifyContent="center"
        marginBottom="0"
      >
        <Container bg="brand.800" maxW="container.xl" p="0">
          {/* <Heading>Welcome</Heading> */}
          <SearchPokemon />
        </Container>
      </Box>
    </>
  );
}

export default App;

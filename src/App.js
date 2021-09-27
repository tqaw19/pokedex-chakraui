import { Image } from "@chakra-ui/image";
import { Box, Text, Container } from "@chakra-ui/layout";
import React from "react";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <Box
        bg="brand.300"
        minH="100vh"
        d="flex"
        justifyContent="center"
        marginBottom="0"
      >
        <Container bg="brand.800" maxW="container.xl">
          <Text
            fontSize="5xl"
            color="brand.300"
            fontWeight="bold"
            marginTop="1rem"
          >
            Welcome #
          </Text>

          <Box
            borderWidth="1px"
            borderColor="brand.400"
            borderRadius="lg"
            overflow="hidden"
            marginTop="2rem"
            maxW="sm"
          >
            <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
            <Text fontSize="2xl">Segun</Text>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default App;

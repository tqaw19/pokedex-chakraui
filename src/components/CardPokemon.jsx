import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import React from "react";

export default function CardPokemon() {
  return (
    <Box
      borderWidth="1px"
      borderColor="brand.400"
      borderRadius="lg"
      overflow="hidden"
      marginTop="2rem"
      maxW="xs"
    >
      <Image
        src="https://images.unsplash.com/photo-1561994508-07f91d13a9ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
        alt="frontside batman"
      />
      <Text fontSize="2xl">Bruce W.</Text>
    </Box>
  );
}

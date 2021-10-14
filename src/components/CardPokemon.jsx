import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import React from "react";

import BadgePokemon from "./BadgePokemon";

export default function CardPokemon(pokemon) {
  const { name, order, sprites, types } = pokemon;

  const pokemonImage = sprites.other["official-artwork"]["front_default"];

  return (
    // {/**Pokemon Card */}
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      bg="gray.200"
    >
      <Image src={pokemonImage} alt={pokemonImage} />

      <Box p="6">
        {/**Order number */}
        <Box as="span" color="gray.600" fontSize="sm">
          #{order}
        </Box>

        {/**Name */}
        <Box
          my="2"
          fontWeight="semibold"
          fontSize="sm"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>

        {/**Pokemon Types goes here */}
        <Box d="flex" flexDirection="column" alignItems="baseline">
          <BadgePokemon types={types} />
        </Box>
      </Box>
    </Box>
  );
}

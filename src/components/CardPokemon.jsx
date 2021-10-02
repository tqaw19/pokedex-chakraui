import { Image } from "@chakra-ui/image";
import { Badge, Box } from "@chakra-ui/layout";
import React from "react";

export default function CardPokemon(pokemon) {
  const { name, order, sprites, types } = pokemon;
  const pokemonImage = sprites.other["official-artwork"]["front_default"];

  const property = {
    imageUrl:
      "https://images.unsplash.com/photo-1578010872116-3cc2ab1a8ed3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=825&q=80",
    imageAlt: "Rear view of modern home with pool",
    name: "Charizard",
  };

  return (
    // {/**Pokemon Card */}
    <Box
      // key={pokemon.id}
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      bg="gray.100"
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
          <Badge
            // variant="outline"
            fontSize="9"
            borderRadius="full"
            px="2"
            py="0.5"
            mb="1"
            colorScheme="teal"
          >
            Grass
          </Badge>
          <Badge
            // variant="outline"
            fontSize="9"
            borderRadius="full"
            px="2"
            py="0.5"
            mb="1"
            colorScheme="orange"
          >
            Fire
          </Badge>
        </Box>
      </Box>
    </Box>
  );
}

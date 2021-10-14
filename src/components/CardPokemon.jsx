import { Image } from "@chakra-ui/image";
import { Badge, Box } from "@chakra-ui/layout";
import React from "react";

import { badgeTypeColor } from "../utils/badgeTypeColor";

export default function CardPokemon(pokemon) {
  const { name, order, sprites, types } = pokemon;

  const pokemonImage = sprites.other["official-artwork"]["front_default"];

  const badgePokemonTypes = () => {
    return types.map((pk) => (
      <Badge
        key={pk.type.name}
        // variant="outline"
        fontSize="9"
        borderRadius="full"
        px="2"
        py="0.5"
        mb="1"
        backgroundColor={badgeTypeColor[pk.type.name]}
        color="gray.700"
      >
        {pk.type.name}
      </Badge>
    ));
  };

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
          {badgePokemonTypes()}
        </Box>
      </Box>
    </Box>
  );
}

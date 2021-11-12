import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

export default function EvolutionsComponent({ pokemonImage, name }) {
  return (
    <>
      <Text>Evolution Chain</Text>
      <Flex direction="row" justify="space-between" my="4">
        <Image src={pokemonImage} alt={name} boxSize="100px" mx="auto" />
        <Image src={pokemonImage} boxSize="100px" alt={name} mx="auto" />
        <Image src={pokemonImage} boxSize="100px" alt={name} mx="auto" />
      </Flex>
    </>
  );
}

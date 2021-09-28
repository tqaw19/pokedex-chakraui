import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

export default function SearchPokemon() {
  return (
    <Flex bg="brand.300" color="brand.100" p="7" alignItems="center">
      <FormControl id="name" flex="1">
        <FormLabel>Name or Number</FormLabel>
        <Input type="text" my="3" />
        <FormHelperText fontSize="smaller" px="4" lineHeight="5">
          Use the Advanced Search to explore Pokemon by type, weakness, Ability,
          and more!
        </FormHelperText>
      </FormControl>
      <Flex
        bg="brand.200"
        flex="1"
        ml="4"
        p="16"
        rounded="lg"
        flexDirection="column"
        justifyContent="center"
      >
        <Text textAlign="justify">
          Search for a Pokemon by name or using its National Pokedex number
        </Text>
      </Flex>
    </Flex>
  );
}

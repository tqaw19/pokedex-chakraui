import React from "react";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Search2Icon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";

export default function SearchPokemon() {
  return (
    <Flex bg="brand.300" color="brand.100" p="7" alignItems="center">
      <FormControl id="name" w="50%">
        <FormLabel>Name or Number</FormLabel>
        <Box position="relative">
          <Input type="text" my="3" placeholder="Type here" />
          <Search2Icon
            position="absolute"
            bottom="6"
            right="4"
            _hover={{ color: "#00C6C1", cursor: "pointer" }}
            zIndex="tooltip"
          />
        </Box>
        <FormHelperText fontSize="smaller" px="4" lineHeight="5">
          Use the Advanced Search to explore Pokemon by type, weakness, Ability,
          and more!
        </FormHelperText>
      </FormControl>
      <Flex
        w="50%"
        bg="brand.200"
        h="3"
        ml="4"
        p="16"
        rounded="lg"
        flexDirection="column"
        justifyContent="center"
      >
        <Text fontSize="xs" textAlign="justify">
          Search for a Pokemon by name or using its National Pokedex number
        </Text>
      </Flex>
    </Flex>
  );
}

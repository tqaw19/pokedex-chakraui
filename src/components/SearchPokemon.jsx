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
    <Flex
      bg="brand.300"
      color="brand.100"
      py="16"
      px="40"
      flexDirection={["column", null, null, "row"]}
      alignItems="center"
    >
      <FormControl id="name" width="1/2" minW="300px">
        <FormLabel>Name or Number</FormLabel>
        <Box position="relative">
          <Input
            type="text"
            my="3"
            placeholder="Type here"
            borderColor="gray.400"
            _focus={{ border: "2px solid #00c6c1" }}
          />
          <Button
            position="absolute"
            bottom="3"
            bg="none"
            right="0"
            zIndex="tooltip"
            _hover={{ color: "#00C6C1" }}
          >
            <Search2Icon />
          </Button>
        </Box>
        <FormHelperText fontSize="smaller" px="4" lineHeight="5">
          Use the Advanced Search to explore Pokemon by type, weakness, Ability,
          and more!
        </FormHelperText>
      </FormControl>
      <Box width="1/2" minW="300px" ml={[null, null, "4"]} mt={["7", null]}>
        <Text
          fontSize="xs"
          textAlign="justify"
          bg="brand.200"
          px={["6", null, "16"]}
          py={["5", null, "8"]}
          rounded="lg"
        >
          Search a Pokemon by name or using its National Pokedex number
        </Text>
      </Box>
    </Flex>
  );
}

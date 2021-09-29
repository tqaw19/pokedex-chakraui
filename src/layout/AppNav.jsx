import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/layout";
import React from "react";

export default function AppNav() {
  return (
    <Box
      sx={{ position: "sticky", top: 0, zIndex: 9 }}
      bg="brand.300"
      color="brand.100"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px="9"
      h="16"
    >
      <Text flex="1">PokedexApp</Text>
      <UnorderedList
        display={["none", null, "flex"]}
        flexDir="row"
        listStyleType="none"
      >
        <Box>
          {/* This is not showing */}
          <Box display={["block", "none"]}> - </Box>
        </Box>
        <ListItem m="6">Home</ListItem>
        <ListItem m="6">My Pokemons</ListItem>
        <ListItem my="6" ml="6">
          Categories
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

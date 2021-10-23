import React from "react";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

export default function AppNav() {
  const routes = [
    { name: "My Pokemons", route: "/mypokemons" },
    { name: "Categories", route: "/categories" },
  ];

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
      <Box flex="1">
        <Link to="/">
          <Text>PokedexApp</Text>
        </Link>
      </Box>
      <UnorderedList
        display={["none", null, "flex"]}
        flexDir="row"
        listStyleType="none"
      >
        <Box>
          {/* This is not showing */}
          <Box display={["block", "none"]}> - </Box>
        </Box>

        {routes.map((route) => (
          <Link to={route.route} key={route.name}>
            <ListItem m="6">{route.name}</ListItem>
          </Link>
        ))}
      </UnorderedList>
    </Box>
  );
}

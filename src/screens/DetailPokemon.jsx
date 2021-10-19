import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOnePokemonDetail } from "../features/pokemon/pokemonSlice";
import { Spinner } from "@chakra-ui/spinner";

import BadgePokemon from "../components/BadgePokemon";

export default function DetailPokemon({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.pokemonDetails);
  const status = useSelector((state) => state.pokemon.status);

  const { name, order, sprites, types } = pokemonData[0] ?? [];
  const { flavor_text_entries } = pokemonData[1] ?? [];
  // const [{ name, order, sprites }, { flavor_text_entries }] = pokemonData ?? [];

  const pokemonImage = sprites?.other["official-artwork"]["front_default"];
  const pokemonDescription = flavor_text_entries?.[1]["flavor_text"];

  useEffect(() => {
    dispatch(fetchOnePokemonDetail(id));
    // eslint-disable-next-line
  }, []);

  // console.log(pokemonData[1]);
  // console.log(id);

  const PokemonDataRendered = () => (
    <>
      {/** Pokemon Name and Order No. */}
      <Heading size="lg" mt="8" textAlign="center">
        {name?.toUpperCase()} <Text display="inline">#{order}</Text>
      </Heading>

      <Flex
        mt="16"
        px={[null, null, null, "44"]}
        flexDirection={["column", null, "row"]}
      >
        <Box
          width={["full", null, "50%"]}
          display="flex"
          justifyContent="center"
        >
          <Image
            // boxSize="fit-content"
            src={pokemonImage}
            alt={name}
            borderRadius="lg"
            shadow="md"
            background="gray.200"
          />
        </Box>

        {/** Short Descrioption */}
        <Box width={["full", null, "50%"]} p={["10", null, null, "4"]}>
          <Text fontSize="sm">{pokemonDescription}</Text>

          {/** Pokemon Attributes */}
          <Flex
            bg="blue.400"
            mt="4"
            borderRadius="lg"
            fontSize="sm"
            color="white"
          >
            <Text as="span" m="4">
              Height{" "}
              <Text mb="4" color="black">
                2 04
              </Text>
              Weight{" "}
              <Text mb="4" color="black">
                200
              </Text>
              Gender{" "}
              <Text mb="4" color="black">
                Male
              </Text>
            </Text>
            <Spacer />
            <Text as="span" m="4" mr="16">
              Category{" "}
              <Text mb="4" color="black">
                Seed
              </Text>
              Abilities{" "}
              <Text mb="4" color="black">
                Overgrow
              </Text>
            </Text>
          </Flex>

          {/** Type */}
          <Box mt="4">
            <Text mb="1">Type</Text>
            <BadgePokemon types={types ?? []} />
          </Box>

          {/** Weaknesses */}
          <Box mt="4">
            <Text>Weaknesses</Text>
            <Badge borderRadius="full" px="2" py="0.5" mb="1">
              Ghost
            </Badge>
            <Badge borderRadius="full" px="2" py="0.5" mb="1" ml="2">
              Water
            </Badge>
            <Badge borderRadius="full" px="2" py="0.5" mb="1" ml="2">
              Physic
            </Badge>
          </Box>
        </Box>
      </Flex>
    </>
  );

  return (
    <Box
      bg="brand.300"
      minH="100vh"
      d="flex"
      justifyContent="center"
      marginBottom="0"
    >
      <Container bg="brand.800" maxW="container.xl" p="0">
        {status === "loading" ? <Spinner /> : <PokemonDataRendered />}
      </Container>
    </Box>
  );
}

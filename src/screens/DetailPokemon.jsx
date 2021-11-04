import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";

import { fetchOnePokemonDetail } from "../features/pokemon/pokemonSlice";
import BadgePokemon from "../components/BadgePokemon";
import SpinnerComponent from "../components/SpinnerComponent";
import WeaknessesPokemnon from "../components/WeaknessesPokemnon";

export default function DetailPokemon({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.pokemonDetails);
  const status = useSelector((state) => state.pokemon.status);

  const { name, order, sprites, types } = pokemonData[0] ?? [];
  const { flavor_text_entries, color } = pokemonData[1] ?? [];
  const { damage_relations } = pokemonData[3] ?? [];

  // const [{ name, order, sprites }, { flavor_text_entries }] = pokemonData ?? [];

  const pokemonImage = sprites?.other["official-artwork"]["front_default"];
  const pokemonDescription = flavor_text_entries?.[1]["flavor_text"];

  useEffect(() => {
    dispatch(fetchOnePokemonDetail(id));
    // eslint-disable-next-line
  }, []);

  const PokemonDataRendered = () => (
    <Flex
      mt={["4", null, null, "16"]}
      px={[null, null, null, "44"]}
      flexDirection={["column", null, "row"]}
    >
      <Box width={["full", null, "50%"]} p="4">
        {/**Pokemon Official artwork image */}
        <Image src={pokemonImage} alt={name} />

        {/* Pokemon Evolution Chain */}
        <Box my="8">
          <Text>Evolution Chain</Text>
          <Flex direction="row" justify="space-between" my="4">
            <Image src={pokemonImage} alt={name} boxSize="100px" mx="auto" />
            <Image src={pokemonImage} boxSize="100px" alt={name} mx="auto" />
            <Image src={pokemonImage} boxSize="100px" alt={name} mx="auto" />
          </Flex>
        </Box>
      </Box>

      <Box width={["full", null, "50%"]} p={["10", null, null, "4"]}>
        {/** Pokemon Name and Order No. */}
        <Heading size="md" mb="8" textAlign="center">
          {name?.toUpperCase()} <Text display="inline">#{order}</Text>
        </Heading>

        {/** Short Descrioption */}
        <Text fontSize="smaller">{pokemonDescription}</Text>

        {/** Pokemon Attributes */}
        <Flex
          bg="blue.400"
          mt="4"
          borderRadius="lg"
          fontSize="smaller"
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
          {/* <BadgePokemon types={types ?? []} /> */}
          <BadgePokemon types={types?.map((pk) => pk.type.name) ?? []} />
        </Box>

        {/** Weaknesses */}
        <WeaknessesPokemnon damageRelations={damage_relations} />
      </Box>
    </Flex>
  );

  return (
    <Box
      bg="brand.300"
      minH="100vh"
      d="flex"
      justifyContent="center"
      marginBottom="0"
    >
      <Container
        bgGradient={`linear(to-br, ${color?.name}, brand.100)`}
        maxW="container.xl"
        p="0"
      >
        {status === "loading" ? (
          <SpinnerComponent color="white" />
        ) : (
          <PokemonDataRendered />
        )}
      </Container>
    </Box>
  );
}

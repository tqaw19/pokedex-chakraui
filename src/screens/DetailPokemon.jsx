import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";

import { fetchOnePokemonDetail } from "../features/pokemon/pokemonSlice";
import BadgePokemon from "../components/BadgePokemon";
import SpinnerComponent from "../components/SpinnerComponent";
import WeaknessesPokemnon from "../components/WeaknessesPokemnon";
import StatsPokemon from "../components/StatsPokemon";
import EvolutionsComponent from "../components/EvolutionsComponent";

export default function DetailPokemon({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.pokemonDetails);
  const status = useSelector((state) => state.pokemon.status);

  const { name, order, sprites, types, stats } = pokemonData[0] ?? [];
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
          <EvolutionsComponent pokemonImage={pokemonImage} name={name} />
        </Box>
      </Box>

      <Box width={["full", null, "50%"]} p={["10", null, null, "4"]}>
        {/** Pokemon Name and Order No. */}
        <Heading size="md" mb="8" textAlign="center">
          {name?.toUpperCase()} <Text display="inline">#{order}</Text>
        </Heading>

        {/** Short Descrioption */}
        <Text fontSize="smaller">{pokemonDescription}</Text>

        {/** Pokemon Stats */}
        <StatsPokemon stats={stats ?? []} />

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

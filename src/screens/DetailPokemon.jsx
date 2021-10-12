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
import { useParams } from "react-router-dom";
import { fetchOnePokemon } from "../features/pokemon/pokemonAPI";
import { useSelector, useDispatch } from "react-redux";

export default function DetailPokemon() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemonDetails);

  useEffect(() => {
    dispatch(fetchOnePokemon(id));
  }, []);

  console.log(pokemonData);

  return (
    <Box
      bg="brand.300"
      minH="100vh"
      d="flex"
      justifyContent="center"
      marginBottom="0"
    >
      <Container bg="brand.800" maxW="container.xl" p="0">
        {/** Pokemon Name and Order No. */}
        <Heading size="lg" mt="8" textAlign="center">
          Pokemon Name <Text display="inline">#34</Text>
        </Heading>

        <Flex mt="16" px="44">
          <Box width="50%" display="flex" justifyContent="center">
            <Image src="https://images.unsplash.com/photo-1561994508-07f91d13a9ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhdG1hbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </Box>

          {/** Short Descrioption */}
          <Box width="50%" p="4">
            <Text fontSize="sm">
              This a medium size description about a pokemon.
            </Text>

            {/** Pokemon Attributes */}
            <Flex
              bg="blue.200"
              mt="4"
              borderRadius="lg"
              fontSize="sm"
              color="white"
            >
              <Text m="4">
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
              <Text m="4" mr="16">
                Category{" "}
                <Text mb="4" color="black">
                  Seed
                </Text>
                Abilties{" "}
                <Text mb="4" color="black">
                  Overgrow
                </Text>
              </Text>
            </Flex>

            {/** Type */}
            <Box mt="4">
              <Text>Type</Text>
              <Badge borderRadius="full" px="2" py="0.5" mb="1">
                Grass
              </Badge>
              <Badge borderRadius="full" px="2" py="0.5" mb="1" ml="2">
                Fire
              </Badge>
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
      </Container>
    </Box>
  );
}

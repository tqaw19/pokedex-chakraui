import { Flex, Spacer, Text } from "@chakra-ui/layout";
import React from "react";

export default function StatsPokemon({ stats }) {
  return (
    <>
      <Text mt="6">Base Stats</Text>
      <Flex
        bg="blue.400"
        mt="2"
        borderRadius="lg"
        fontSize="smaller"
        color="white"
      >
        <Text as="span" m="4">
          {stats.slice(0, 3).map((item, index) => (
            <div key={`stat0012${index}`}>
              <Text sx={{ textTransform: "capitalize" }}>{item.stat.name}</Text>{" "}
              <Text mb="4" color="black">
                {item["base_stat"]}
              </Text>
            </div>
          ))}
        </Text>
        <Spacer />
        <Text as="span" m="4" mr={["6", null, null, "12"]}>
          {stats.slice(3).map((item, index) => (
            <div key={`stat001${index}`}>
              <Text sx={{ textTransform: "capitalize" }}>{item.stat.name}</Text>{" "}
              <Text mb="4" color="black">
                {item["base_stat"]}
              </Text>
            </div>
          ))}
        </Text>
      </Flex>
    </>
  );
}

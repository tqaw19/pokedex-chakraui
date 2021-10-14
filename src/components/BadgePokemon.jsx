import { Badge } from "@chakra-ui/layout";
import React from "react";

import { badgeTypeColor } from "../utils/badgeTypeColor";

export default function BadgePokemon({ types }) {
  return types.map((pk) => (
    <Badge
      key={pk.type.name}
      // variant="outline"
      fontSize="9"
      borderRadius="full"
      px="2"
      py="0.5"
      mb="1"
      mr="1"
      backgroundColor={badgeTypeColor[pk.type.name]}
      color="gray.700"
    >
      {pk.type.name}
    </Badge>
  ));
}

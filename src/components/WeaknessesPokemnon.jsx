import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

import {
  multiplierDamageFrom,
  multiplierDamageTo,
} from "../utils/multiplierRelations";
import BadgePokemon from "./BadgePokemon";

export default function WeaknessesPokemnon(props) {
  const { damageRelations } = props;

  const [tabStat, setTabStat] = useState(multiplierDamageFrom);

  const weaknesses = Object.entries(damageRelations ?? {})
    .filter(([multiplier, value]) => {
      if (value.length === 0) {
        delete multiplierDamageFrom[multiplier];
        delete multiplierDamageTo[multiplier];
      } else {
        return tabStat[multiplier];
      }
    })
    .map(([multiplier, value]) => {
      // console.log(multiplier);
      // double_damage_from
      // half_damage_from
      // no_damage_from
      return (
        <div key={multiplier}>
          {multiplierDamageFrom[multiplier] || multiplierDamageTo[multiplier]} -{" "}
          <BadgePokemon types={value.map((pk) => pk.name)} />
        </div>
      );
    });

  return (
    <Box mt="4">
      <Tabs size="sm" variant="enclosed">
        <Text mb="1">Multiplier</Text>
        <TabList justifyContent="end">
          <Tab onClick={() => setTabStat(multiplierDamageFrom)}>Weak</Tab>
          <Tab onClick={() => setTabStat(multiplierDamageTo)}>Strong</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{weaknesses}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "'Press Start 2P', 'cursive'",
    body: "'Press Start 2P','cursive'",
  },
  colors: {
    brand: {
      100: "#f7fafc",
      200: "#00C6C1",
      300: "#212434",
      400: "#C4CDD3",
      800: "#f4f4f4",
      900: "#1a202c",
    },
  },
});

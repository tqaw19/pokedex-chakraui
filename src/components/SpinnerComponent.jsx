import { Flex, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

// Dumb spinner component to show when the page is laoding
export default function SpinnerComponent({ color = "black" }) {
  return (
    <Flex align="center" direction="column" m="36">
      <Spinner color={color} />
      <Text m="4" fontSize="smaller" color={color}>
        Loading
      </Text>
    </Flex>
  );
}

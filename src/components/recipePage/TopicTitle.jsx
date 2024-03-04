import { Text } from "@chakra-ui/react";

export const TopicTitle = ({ title }) => (
  <Text
    color={"green.500"}
    textTransform={"uppercase"}
    fontWeight={800}
    letterSpacing={1.1}
    fontSize={{ base: "16px", lg: "18px" }}
    mb={"4"}
  >
    {title}
  </Text>
);

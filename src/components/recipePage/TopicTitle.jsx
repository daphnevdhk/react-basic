import { Text, useColorModeValue } from "@chakra-ui/react";

export const TopicTitle = ({ title }) => (
  <Text
    fontSize={{ base: "16px", lg: "18px" }}
    color={useColorModeValue("yellow.500", "yellow.300")}
    fontWeight={"500"}
    textTransform={"uppercase"}
    mb={"4"}
  >
    {title}
  </Text>
);

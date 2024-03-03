import { ListItem, Text } from "@chakra-ui/react";

export const NutrientDetails = ({ nutrient }) => (
  <ListItem>
    <Text as={"span"} fontWeight={"bold"}>
      {nutrient.label}:
    </Text>{" "}
    {Math.round(nutrient.quantity)} {nutrient.unit}
  </ListItem>
);

import { Stack, Checkbox } from "@chakra-ui/react";

export const HealthLabelsFilter = ({
  onVeganSelected,
  onVegetarianSelected,
  onPescetarianSelected,
  ...rest
}) => {
  return (
    <Stack spacing={5} direction="row" {...rest}>
      <Checkbox
        onChange={(e) => onVeganSelected(e.target.checked)}
        colorScheme="green"
      >
        Vegan
      </Checkbox>
      <Checkbox
        onChange={(e) => onVegetarianSelected(e.target.checked)}
        colorScheme="green"
      >
        Vegetarian
      </Checkbox>
      <Checkbox
        onChange={(e) => onPescetarianSelected(e.target.checked)}
        colorScheme="green"
      >
        Pescetarian
      </Checkbox>
    </Stack>
  );
};

import {
  CardBody,
  Image,
  Card,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Tags } from "./Tags";

export const RecipeShowCase = ({ recipe }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          h="337px"
          w="full"
          src={recipe.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{recipe.label}</Heading>
          <Tags tags={recipe.mealType} color="blue" />
          <Tags tags={recipe.dishType} color="blue" />
          <Tags tags={recipe.dietLabels} color="blue" />
          <Tags tags={recipe.cautions} color="red" />
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

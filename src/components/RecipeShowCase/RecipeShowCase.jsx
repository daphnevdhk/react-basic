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
  Box,
} from "@chakra-ui/react";
import { Tags } from "../Tags";
import { HealthTags } from "./HealthTags";

export const RecipeShowCase = ({ recipe, ...rest }) => {
  return (
    <Box {...rest}>
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
            <Tags title="Meal Type" tags={recipe.mealType} color="blue" />
            <Tags title="Dish" tags={recipe.dishType} color="blue" />
            <Tags title="Diet" tags={recipe.dietLabels} color="blue" />
            <HealthTags tags={recipe.healthLabels} />
            <Tags title="Cautions" tags={recipe.cautions} color="red" />
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
    </Box>
  );
};

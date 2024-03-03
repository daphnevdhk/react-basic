import { Heading, Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { RecipeShowCase } from "../components/RecipeShowCase";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  const renderedReRecipes = data.hits.map((recipeHolder) => {
    return (
      <Box w="100%" key={recipeHolder.recipe.label}>
        <RecipeShowCase recipe={recipeHolder.recipe} />
      </Box>
    );
  });
  return (
    <div>
      <Box bg="red">
        <Heading>I'm a Heading</Heading>
      </Box>
      <Box m={2}>
        <SimpleGrid minChildWidth="300px" spacing="20px">
          {renderedReRecipes}
        </SimpleGrid>
      </Box>
    </div>
  );
};

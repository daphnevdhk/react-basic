import { Heading, Box, Grid, GridItem } from "@chakra-ui/react";
import { RecipeShowCase } from "../components/RecipeShowCase";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  const renderedReRecipes = data.hits.map((recipe) => {
    return (
      <GridItem w="100%" key={recipe.label}>
        <RecipeShowCase recipe={recipe} />
      </GridItem>
    );
  });
  return (
    <div>
      <Box bg="red">
        <Heading>I'm a Heading</Heading>
      </Box>
      <Box m={2}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {renderedReRecipes}
        </Grid>
      </Box>
    </div>
  );
};

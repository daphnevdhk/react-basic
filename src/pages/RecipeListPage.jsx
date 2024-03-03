import { Box, SimpleGrid } from "@chakra-ui/react";
import { RecipeShowCase } from "../components/RecipeShowCase/RecipeShowCase";

export const RecipeListPage = ({ recipes, onRecipesClicked }) => {
  const renderedReRecipes = recipes.map((recipeHolder) => {
    return (
      <Box
        w="100%"
        key={recipeHolder.recipe.label}
        onClick={() => onRecipesClicked(recipeHolder.recipe)}
      >
        <RecipeShowCase recipe={recipeHolder.recipe} />
      </Box>
    );
  });
  return (
    <div>
      <Box m={2}>
        <SimpleGrid minChildWidth="300px" spacing="20px">
          {renderedReRecipes}
        </SimpleGrid>
      </Box>
    </div>
  );
};

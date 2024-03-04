import { SimpleGrid } from "@chakra-ui/react";
import { RecipeShowCase } from "../components/RecipeShowCase/RecipeShowCase";

export const RecipeListPage = ({ recipes, onRecipesClicked, ...rest }) => {
  const renderedReRecipes = recipes.map((recipeHolder) => {
    return (
      <RecipeShowCase
        key={recipeHolder.recipe.label}
        onClick={() => onRecipesClicked(recipeHolder.recipe)}
        recipe={recipeHolder.recipe}
      />
    );
  });
  return (
    <SimpleGrid minChildWidth="300px" spacing="20px" {...rest}>
      {renderedReRecipes}
    </SimpleGrid>
  );
};

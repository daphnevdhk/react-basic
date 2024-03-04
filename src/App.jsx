import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { data } from "./utils/data";
import { useState } from "react";
import { Search } from "./components/Search";

export const App = () => {
  // Your state code here
  const [recipes, setRecipes] = useState(data.hits);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const onSearch = (text) => {
    let matchingRecipes = data.hits;

    const matchText = (a, b) => a.toLowerCase().includes(b.toLowerCase());

    const matchByLabel = ({ recipe }) => matchText(recipe.label, text);

    const matchByTag = ({ recipe }) =>
      recipe.healthLabels.some((label) => matchText(label, text));

    if (text) {
      matchingRecipes = data.hits.filter(
        (recipe) => matchByLabel(recipe) || matchByTag(recipe)
      );
    }

    setRecipes(matchingRecipes);
  };

  const onRecipesClicked = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const onClose = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      {selectedRecipe == null ? (
        <>
          <Box textAlign="center" pt={10} px={6}>
            <Heading
              as="h2"
              size="xl"
              mt={6}
              mb={2}
              color={useColorModeValue("gray.700", "white")}
              fontFamily={"body"}
            >
              Winc Recipe Checker
            </Heading>
            <Search onSearch={onSearch} />
          </Box>

          <RecipeListPage
            pt={5}
            px={6}
            recipes={recipes}
            onRecipesClicked={onRecipesClicked}
          />
        </>
      ) : (
        <RecipePage recipe={selectedRecipe} onClose={onClose} />
      )}
    </>
  );
};

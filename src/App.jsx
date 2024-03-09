import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { data } from "./utils/data";
import { useState } from "react";
import { Search } from "./components/Search";
import { HealthLabelsFilter } from "./components/HealthLabelsFilter";

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [veganSelected, setVeganSelected] = useState(false);
  const [vegetarianSelected, setVegetarianSelected] = useState(false);
  const [pescetarianSelected, setPescetarianSelected] = useState(false);
  const [search, setSearch] = useState(null);

  const matchText = (a, b) => a.toLowerCase().includes(b.toLowerCase());

  const matchByLabel = (recipe, text) => matchText(recipe.label, text);

  const matchByHealthLabels = (recipe, text) =>
    recipe.healthLabels.some((label) => matchText(label, text));

  const onSearch = (text) => {
    setSearch(text);
  };

  const onRecipesClicked = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const onClose = () => {
    setSelectedRecipe(null);
  };

  let matchingRecipes = data.hits;

  if (veganSelected || vegetarianSelected || pescetarianSelected) {
    matchingRecipes = matchingRecipes.filter(
      ({ recipe }) =>
        (veganSelected && matchByHealthLabels(recipe, "vegan")) ||
        (vegetarianSelected && matchByHealthLabels(recipe, "vegetarian")) ||
        (pescetarianSelected && matchByHealthLabels(recipe, "pescetarian"))
    );
  }

  if (search) {
    matchingRecipes = matchingRecipes.filter(({ recipe }) => {
      console.log(recipe);
      return (
        matchByLabel(recipe, search) || matchByHealthLabels(recipe, search)
      );
    });
  }

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
            <HealthLabelsFilter
              mt={2}
              onVeganSelected={setVeganSelected}
              onVegetarianSelected={setVegetarianSelected}
              onPescetarianSelected={setPescetarianSelected}
            />
          </Box>

          <RecipeListPage
            pt={5}
            px={6}
            recipes={matchingRecipes}
            onRecipesClicked={onRecipesClicked}
          />
        </>
      ) : (
        <RecipePage recipe={selectedRecipe} onClose={onClose} />
      )}
    </>
  );
};

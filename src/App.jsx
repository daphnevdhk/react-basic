import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Box, Heading } from "@chakra-ui/react";
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

  return (
    <div>
      <Box bg="red">
        <Heading>I'm a Heading</Heading>
      </Box>
      <div>
        <Search onSearch={onSearch} />
      </div>
      <div>
        {selectedRecipe == null ? (
          <RecipeListPage recipes={recipes} />
        ) : (
          <RecipePage recipe={selectedRecipe} />
        )}
      </div>
    </div>
  );
};

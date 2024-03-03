import { RecipeListPage } from "./pages/RecipeListPage";
import { Box, Heading } from "@chakra-ui/react";
import { data } from "./utils/data";
import { useState } from "react";

export const App = () => {
  // Your state code here
  const [recipes, setRecipes] = useState(data.hits);

  <Box bg="red">
    <Heading>I'm a Heading</Heading>
  </Box>;
  return <RecipeListPage recipes={recipes} />;
};

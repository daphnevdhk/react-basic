import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Tags } from "../components/Tags";
import { SideBySideCollection } from "../components/recipePage/SideBySideItemCollection";
import { TopicTitle } from "../components/recipePage/TopicTitle";
import { NutrientDetails } from "../components/recipePage/NutrientDetails";

export const RecipePage = ({ recipe, onClose }) => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"recipe image"}
            src={recipe.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {recipe.label}
            </Heading>
            <Box mt={2}>
              <Tags tags={recipe.mealType} />
            </Box>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box>
              <TopicTitle title="Details" />
              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dish:
                  </Text>{" "}
                  {recipe.dishType.join(", ")}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cooking time:
                  </Text>{" "}
                  {recipe.totalTime} {" minutes"}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Servings:
                  </Text>{" "}
                  {recipe.yield}
                </ListItem>
                <ListItem>
                  <Stack direction="row">
                    <Text as={"span"} fontWeight={"bold"}>
                      Cautions:
                    </Text>{" "}
                    <Tags title="" tags={recipe.cautions} color="red" />
                  </Stack>
                </ListItem>
                <ListItem>
                  <Stack direction="row">
                    <Text as={"span"} fontWeight={"bold"}>
                      Diet:
                    </Text>{" "}
                    <Tags title="" tags={recipe.dietLabels} color="blue" />
                  </Stack>
                </ListItem>
              </List>
            </Box>

            <SideBySideCollection
              title="ingredients"
              items={recipe.ingredientLines}
            />

            <Box>
              <TopicTitle title="Details" />
              <List spacing={2}>
                <NutrientDetails nutrient={recipe.totalNutrients.ENERC_KCAL} />
                <NutrientDetails nutrient={recipe.totalNutrients.PROCNT} />
                <NutrientDetails nutrient={recipe.totalNutrients.FAT} />
                <NutrientDetails nutrient={recipe.totalNutrients.CHOCDF} />
                <NutrientDetails nutrient={recipe.totalNutrients.CHOLE} />
                <NutrientDetails nutrient={recipe.totalNutrients.NA} />
              </List>
            </Box>

            <SideBySideCollection
              title="Health labels"
              items={recipe.healthLabels}
            />
          </Stack>

          <Button
            onClick={() => onClose()}
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={"green.500"}
            color={"white"}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Close
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

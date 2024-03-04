import {
  Image,
  Stack,
  Heading,
  Text,
  Box,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Tags } from "../Tags";
import { HealthTags } from "./HealthTags";

export const RecipeShowCase = ({ recipe, ...rest }) => {
  return (
    <LinkBox
      maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      _hover={{
        transform: "translateY(2px)",
        boxShadow: "lg",
      }}
      overflow={"hidden"}
      {...rest}
    >
      <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <Image
          src={recipe.image}
          fit="cover"
          alt="Example"
          h={"100%"}
          w={"100%"}
        />
      </Box>
      <Stack>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {recipe.mealType.join(", ")}
        </Text>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          <LinkOverlay href="#">{recipe.label}</LinkOverlay>
        </Heading>
        <Tags title="Dish" tags={recipe.dishType} color="blue" />
        <Tags title="Diet" tags={recipe.dietLabels} color="blue" />
        <HealthTags tags={recipe.healthLabels} />
        <Tags title="Cautions" tags={recipe.cautions} color="red" />
      </Stack>
    </LinkBox>
  );
};

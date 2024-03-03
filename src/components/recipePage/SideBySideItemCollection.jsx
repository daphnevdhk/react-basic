import { Box, SimpleGrid, List, ListItem } from "@chakra-ui/react";
import { TopicTitle } from "./TopicTitle";

export const SideBySideCollection = ({ title, items }) => {
  const hasItems = items.length > 0;
  let midpoint = Math.ceil(items.length / 2);

  if (!hasItems) {
    return <></>;
  }

  const listItems = items.map((x, index) => (
    <ListItem key={index}>{x}</ListItem>
  ));

  const firstHalf = listItems.slice(0, midpoint);
  const secondHalf = listItems.slice(midpoint);

  return (
    <Box>
      <TopicTitle title={title} />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <List spacing={2}>{firstHalf}</List>
        <List spacing={2}>{secondHalf}</List>
      </SimpleGrid>
    </Box>
  );
};

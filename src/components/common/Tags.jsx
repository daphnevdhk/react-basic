import { Flex, Stack, Tag, Text } from "@chakra-ui/react";

export const Tags = ({ tags, color, title }) => {
  if (!tags) {
    console.log(tags);
    return <></>;
  }

  const renderedTitle = title ? <Text>{`${title}: `}</Text> : "";

  const renderedTags = tags.map((caution, index) => (
    <Tag key={index} colorScheme={color} mx={1}>
      {caution}
    </Tag>
  ));

  return renderedTags.length > 0 ? (
    <Stack>
      {renderedTitle}
      <Flex>{renderedTags}</Flex>
    </Stack>
  ) : (
    <></>
  );
};

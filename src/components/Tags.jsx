import { Stack, Tag, Text } from "@chakra-ui/react";

export const Tags = ({ tags, color, title }) => {
  const renderedTitle = title ? <Text>{`${title}: `}</Text> : "";

  const renderedTags = tags.map((caution) => (
    <Tag key={caution} colorScheme={color}>
      {caution}
    </Tag>
  ));

  return renderedTags.length > 0 ? (
    <Stack direction="row">
      {renderedTitle}
      {renderedTags}
    </Stack>
  ) : (
    <></>
  );
};

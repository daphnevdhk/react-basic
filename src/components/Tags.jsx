import { Stack, Tag, Text } from "@chakra-ui/react";

export const Tags = ({ tags, color, title }) => {
  if (!tags) {
    console.log(tags);
    return <></>;
  }

  const renderedTitle = title ? <Text>{`${title}: `}</Text> : "";

  const renderedTags = tags.map((caution, index) => (
    <Tag key={index} colorScheme={color}>
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

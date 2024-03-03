import { Stack, Badge } from "@chakra-ui/react";

export const Tags = ({ tags, color }) => {
  const renderedTags = tags.map((caution) => (
    <Badge key={caution} colorScheme={color}>
      {caution}
    </Badge>
  ));

  return renderedTags ? <Stack direction="row">{renderedTags}</Stack> : <></>;
};

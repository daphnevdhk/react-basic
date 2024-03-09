import { Tags } from "../common/Tags";

export const HealthTags = ({ tags }) => {
  const filterdTags = tags.filter(
    (item) =>
      item.toLowerCase() === "vegan" || item.toLowerCase() === "vegetarian"
  );

  return <Tags title="Health" tags={filterdTags} color="green" />;
};

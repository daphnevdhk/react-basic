import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export const Search = ({ onSearch }) => {
  const onChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input placeholder="vegan" onChange={onChange} />
    </InputGroup>
  );
};

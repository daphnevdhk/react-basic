import { Input, InputGroup, InputLeftElement, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const Search = ({ onSearch, ...rest }) => {
  const onChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Box {...rest}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input placeholder="vegan" onChange={onChange} />
      </InputGroup>
    </Box>
  );
};

import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBar({ onSearch }) {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Buscar propiedad..."
          variant="outline"
          focusBorderColor="teal.400"
          size="md"
          onChange={(e) => onSearch(e.target.value)}
        />
      </InputGroup>
    </Box>
  );
}

export default SearchBar;

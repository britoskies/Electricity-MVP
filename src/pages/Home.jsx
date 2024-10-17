import { useState } from "react";
import {
  Flex,
  Box,
  Card,
  Heading,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { properties } from "../data/properties";
import Property from "../components/home/Property";
import SearchBar from "./../components/shared/SearchBar";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter properties based on name or location
  const filteredProperties = properties.filter(
    (prop) =>
      prop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box bg="gray.100" py={10} px={5} minH="100vh">
      <Card
        p={8}
        maxW="1200px"
        mx="auto"
        borderRadius="lg"
        boxShadow="md"
        bg="white"
      >
        <Flex justify="space-between" alignItems="center" gap={5} mb={6}>
          <Heading
            size="md"
            textAlign="start"
            flex="1"
            textTransform="uppercase"
            ml={10}
          >
            Administrar propiedades
          </Heading>

          <Flex justify="center" alignItems="center" gap={5} mr={10}>
            <Box>
              <SearchBar onSearch={setSearchQuery} />
            </Box>
            <Menu>
              <MenuButton>
                <Avatar name="John" src="https://bit.ly/broken-link" />
              </MenuButton>
              <MenuList>
                <MenuItem
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                >
                  <Text>Titular</Text>
                  <Text fontWeight="bold">John Doe</Text>
                </MenuItem>
                <MenuItem
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                >
                  <Text>NIC</Text>
                  <Text fontWeight="bold">6734233</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        <Flex wrap="wrap" justify="center" gap={6} mt={6}>
          {filteredProperties.map((prop) => (
            <Property
              id={prop.id}
              key={prop.id}
              image={prop.image}
              name={prop.name}
              location={prop.location}
              totalElectricUsage={prop.totalElectricUsage}
            />
          ))}
        </Flex>
      </Card>
    </Box>
  );
}

export default Home;

import {
  Box,
  Text,
  Image,
  Flex,
  Heading,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Property(props) {
  const { id, name, location, totalElectricUsage, image } = props;

  const getBadgeColor = () => {
    switch (true) {
      case totalElectricUsage >= 2000:
        return "red";
      case totalElectricUsage >= 1500:
        return "yellow";
      case totalElectricUsage < 1000:
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <Box
      as={Link}
      to={`/property/${id}`}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
      transition="all 0.2s ease-in-out"
      maxW="300px"
      bg="white"
    >
      <Image src={image} alt="property" w="100%" h="200px" objectFit="cover" />

      <Box p={6}>
        <Heading size="md" mb={2} fontWeight="semibold" isTruncated>
          {name}
        </Heading>
        <Text fontSize="sm" color="gray.600" mb={4}>
          {location}
        </Text>

        <Flex align="center" justify="space-between" alignItems="center">
          <Text>Uso Eléctrico</Text>
          <Divider
            orientation="vertical"
            height="24px"
            mx={2}
            borderColor="gray.300"
          />
          <Badge
            colorScheme={getBadgeColor()}
            fontSize="0.8em"
            p={1}
            borderRadius="md"
          >
            {totalElectricUsage} kWh
          </Badge>
        </Flex>
      </Box>
    </Box>
  );
}

export default Property;

import { Card, Box, Flex, Text, Heading, Icon } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { properties } from "../../data/properties";
import { FaSnowflake, FaTshirt } from "react-icons/fa";
import { RiFridgeFill, RiTv2Fill } from "react-icons/ri";
import Recommendations from "./Recommendations";

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === Number(id));

  if (!property) {
    return <Text>Property not found</Text>;
  }

  const devices = property.electricDevices[0]; // Access the electricDevices object

  return (
    <Card p={10}>
      <Heading>{property.name}</Heading>
      <Text fontSize="lg" fontWeight={400} mb={8}>
        {property.location}
      </Text>
      <Heading size="md" mb={4}>
        Aparatos Electrónicos
      </Heading>

      <Flex direction="column" gap={5}>
        <Flex align="center" bg="gray.100" p={4} borderRadius="md">
          <Icon as={FaSnowflake} w={8} h={8} mr={4} color="blue.400" />
          <Box>
            <Text fontWeight="bold">
              {devices.AC.device} - {devices.AC.model}
            </Text>
            <Text>Localización: {devices.AC.location}</Text>
            <Flex gap={1}>
              Uso Eléctrico: <Text fontWeight="bold"> {devices.AC.electricUsage} kWh</Text> 
            </Flex>
          </Box>
        </Flex>

        <Flex align="center" bg="gray.100" p={4} borderRadius="md">
          <Icon as={RiFridgeFill} w={8} h={8} mr={4} color="blue.400" />
          <Box>
            <Text fontWeight="bold">
              {devices.fridge.device} - {devices.fridge.model}
            </Text>
            <Text>Localización: {devices.fridge.location}</Text>
            <Flex gap={1}>
              Uso Eléctrico: <Text fontWeight="bold"> {devices.fridge.electricUsage} kWh</Text> 
            </Flex>
          </Box>
        </Flex>

        <Flex align="center" bg="gray.100" p={4} borderRadius="md">
          <Icon as={RiTv2Fill} w={8} h={8} mr={4} color="blue.400" />
          <Box>
            <Text fontWeight="bold">
              {devices.TV.device} - {devices.TV.model}
            </Text>
            <Text>Localización: {devices.TV.location}</Text>
            <Flex gap={1}>
              Uso Eléctrico: <Text fontWeight="bold"> {devices.TV.electricUsage} kWh</Text> 
            </Flex>
          </Box>
        </Flex>

        <Flex align="center" bg="gray.100" p={4} borderRadius="md">
          <Icon as={FaTshirt} w={8} h={8} mr={4} color="blue.400" />
          <Box>
            <Text fontWeight="bold">
              {devices.washingMachine.device} - {devices.washingMachine.model}
            </Text>
            <Text>Localización: {devices.washingMachine.location}</Text>
            <Flex gap={1}>
              Uso Eléctrico: <Text fontWeight="bold"> {devices.washingMachine.electricUsage} kWh</Text> 
            </Flex>
          </Box>
        </Flex>
      </Flex>

      <Recommendations devices={Object.values(property.electricDevices[0])} />
    </Card>
  );
}

export default PropertyDetails;

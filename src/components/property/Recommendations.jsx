import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { getDefaultRecommendations } from "../../utils/advice";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const apiUrl = "https://api.openai.com/v1/chat/completions";

const Recommendations = ({ devices }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recommendations, setRecommendations] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("");

  const getRecommendations = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`, // Your OpenAI API key
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo-instruct",
          prompt: `Give recommendations to reduce electricity consumption for the following devices: ${selectedDevice}`,
          max_tokens: 150,
        }),
      });

      const data = await response.json();
      setRecommendations(data.choices[0].message.content.trim());
    } catch (error) {
      setRecommendations(getDefaultRecommendations(selectedDevice));
    } finally {
      setLoading(false);
      onOpen(); // Open the modal after fetching recommendations
    }
  };

  return (
    <Box pt={10}>
      <Heading size="md" mb={4}>
        Recomendaciones de Consumo
      </Heading>
      <Select
        placeholder="Selecciona un aparato electrónico..."
        onChange={(e) => setSelectedDevice(e.target.value)}
      >
        {devices.map((device) => (
          <option key={device.device} value={device.device}>
            {device.device} ({device.location})
          </option>
        ))}
      </Select>

      <Button mt={4} onClick={getRecommendations} isLoading={loading}>
        Obtener recomendaciones
      </Button>

      {/* Modal to show recommendations */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Recomendación</ModalHeader>
          <ModalBody>
            <Text>{recommendations}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Recommendations;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./components/property/PropertyDetails";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
      p={10}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Flex>
  );
}

export default App;

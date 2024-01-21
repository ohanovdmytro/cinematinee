import React from "react";
import { Flex, Button, Box } from "@chakra-ui/react";

const NavigationBar: React.FC = () => {
  return (
    <Flex as="nav" bg="blue.600" color="white" p={4} align="center">
      <Box>
        <Button colorScheme="blue" variant="ghost" mr={3}>
          Home
        </Button>
        <Button colorScheme="blue" variant="ghost" mr={3}>
          Movies
        </Button>
        <Button colorScheme="blue" variant="ghost" mr={3}>
          About
        </Button>
      </Box>
    </Flex>
  );
};

export default NavigationBar;

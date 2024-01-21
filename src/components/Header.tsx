import React from "react";
import { Box, Heading } from "@chakra-ui/react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Box
      as="header"
      bg="gray.900"
      color="white"
      textAlign="center"
      p={4}
      shadow="md"
    >
      <Heading as="h1" fontSize="3xl" fontWeight="bold">
        {title}
      </Heading>
    </Box>
  );
};

export default Header;

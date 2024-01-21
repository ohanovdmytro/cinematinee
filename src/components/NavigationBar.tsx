import React from "react";
import {
  Flex,
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';


const NavigationBar: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="blue.900"
      color="white"
    >
      <Flex align="center" mr={5}>
        {/* Branding / Logo */}
        <Box fontSize="lg" fontWeight="bold">
        Cinematinee
        </Box>
      </Flex>

      {/* Search input */}
      <InputGroup size="md" width={isMobile ? "75%" : "auto"}>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Search..."
          borderColor="gray.300"
          color="black"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" colorScheme="red">
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>


      {!isMobile && (
        <Stack
          direction="row"
          spacing={4}
          align="center"
          justify="center"
          display={{ base: "none", md: "flex" }}
        >
          {["Home", "Library", "Player", "Profile"].map((page) => (
            <Button colorScheme="white" variant="ghost">
              {page}
            </Button>
          ))}
        </Stack>
      )}

      {/* Sign-in button */}
      <Button
        colorScheme="red"
        size="md"
        display={isMobile ? "none" : "inline-flex"}
      >
        Sign In
      </Button>

      {/* Mobile menu button */}
      {isMobile && (
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          size="md"
          ml="2"
          colorScheme="#F41B3B"
        />
      )}


    </Flex>
  );

};

export default NavigationBar;

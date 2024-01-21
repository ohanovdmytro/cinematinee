import React from "react";
import { Box, Image, Text, Heading } from "@chakra-ui/react";

const FeaturedContent: React.FC = () => {
  return (
    <Box m={4} p={4} bg="white" rounded="lg" shadow="lg">
      <Heading as="h2" size="xl" fontWeight="bold" mb={2}>
        Featured Movie: Inception
      </Heading>
      <Image
        src="path_to_featured_movie_image.jpg"
        alt="Featured Movie"
        w="full"
        h="64"
        objectFit="cover"
        rounded="md"
        mb={4}
      />
      <Text>
        A thief who steals corporate secrets through the use of dream-sharing
        technology is given the inverse task of planting an idea into the mind
        of a C.E.O.
      </Text>
    </Box>
  );
};

export default FeaturedContent;

import React from "react";
import { Box, SimpleGrid, Image, Text, Heading } from "@chakra-ui/react";

const MovieList: React.FC = () => {
  const movies = [
    { title: "Movie 1", imageUrl: "path_to_movie_1.jpg" },
    { title: "Movie 2", imageUrl: "path_to_movie_2.jpg" },
  ];

  return (
    <Box m={4}>
      <Heading as="h2" size="xl" fontWeight="bold" mb={4}>
        Movie List
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
        {movies.map((movie, index) => (
          <Box
            key={index}
            bg="white"
            rounded="lg"
            shadow="lg"
            p={4}
            _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}
          >
            <Image
              src={movie.imageUrl}
              alt={movie.title}
              w="full"
              h="40"
              objectFit="cover"
              rounded="md"
              mb={2}
            />
            <Text fontSize="lg" fontWeight="semibold">
              {movie.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MovieList;

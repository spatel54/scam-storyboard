import React from 'react';
import { Button, Box, Text, HStack } from '@chakra-ui/react';

const ChakraTest = () => {
  return (
    <Box p={4} bg="gray.100" borderRadius="md">
      <Text fontSize="lg" mb={4}>
        🎉 Chakra UI v3 is working!
      </Text>
      <HStack gap={4}>
        <Button colorScheme="blue">Primary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </HStack>
    </Box>
  );
};

export default ChakraTest;
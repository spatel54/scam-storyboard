import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Circle,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
  useColorModeValue
} from "@chakra-ui/react";
import { FiUpload, FiHelpCircle } from "react-icons/fi";

export default function Verify(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPrevButton, setShowPrevButton] = useState(false);
  
  // Color modes using Chakra UI's native useColorModeValue
  const circleBg = useColorModeValue("gray.100", "gray.700");
  const circleBorderColor = useColorModeValue("gray.300", "gray.600");
  const cardBg = useColorModeValue("white", "gray.800");
  const secondaryButtonColor = useColorModeValue("gray.200", "gray.600");
  const pageBg = useColorModeValue("#f4f6fa", "#1a202c");

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      
      // Also save to localStorage for the Educate page to access
      localStorage.setItem('scamImage', imageUrl);
    }
  };

  const handleRunAntiScam = () => {
    // Implementation for anti-scam functionality
    setIsLoading(true);
    console.log("Running anti-scam check on:", selectedImage);
    
    // Store the image in localStorage for the next components to use
    if (selectedImage) {
      localStorage.setItem('scamImage', selectedImage);
    }
    
    // Simulate processing time
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    // Add your anti-scam logic here
  };
  
  // Handle keyboard events for showing Previous button with 'v' key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'v' || event.key === 'V') {
        setShowPrevButton(true);
      }
    };
    
    const handleKeyUp = (event) => {
      if (event.key === 'v' || event.key === 'V') {
        setShowPrevButton(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <Box 
      p={0} 
      m={0} 
      bg={pageBg} 
      minH="100vh" 
      w="100vw" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      overflow="hidden"
    >
      <Container maxW="700px" centerContent p={0} m={0}>
        <Card
          w="100%" 
          bg={cardBg}
          boxShadow="md"
          borderRadius="12px"
          overflow="hidden"
          m={0}
        >
          <CardHeader pb={0} textAlign="center">
            <Heading as="h2" size="xl" mb={2}>Verify</Heading>
            <Text fontSize="md" color="gray.500" mb={4}>
              Upload an image to check for potential scam indicators
            </Text>
          </CardHeader>
          
          <CardBody>
            <VStack spacing={8} align="center" justify="center" py={6}>
              {/* Upload Picture Button */}
              <Box 
                position="relative" 
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.02)" }}
                aria-label="Upload an image"
              >
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  position="absolute"
                  top={0}
                  left={0}
                  opacity={0}
                  w="100%"
                  h="100%"
                  cursor="pointer"
                  zIndex={2}
                  aria-label="Choose file to upload"
                />
                <Circle 
                  size="200px" 
                  bg={circleBg} 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  border="2px"
                  borderColor={circleBorderColor}
                  boxShadow="sm"
                >
                  <Center>
                    <Icon as={FiUpload} boxSize={12} color="gray.500" />
                  </Center>
                  {selectedImage && (
                    <Box 
                      position="absolute" 
                      top={0} 
                      left={0} 
                      right={0} 
                      bottom={0} 
                      backgroundImage={`url(${selectedImage})`}
                      backgroundSize="cover"
                      backgroundPosition="center"
                      borderRadius="50%"
                      zIndex={1}
                    />
                  )}
                </Circle>
              </Box>

              {/* Run Anti-Scam Button */}
              <Button 
                colorScheme="blue"
                size="lg" 
                onClick={handleRunAntiScam}
                isDisabled={!selectedImage}
                isLoading={isLoading}
                loadingText="Analyzing"
                px={10}
                py={6}
                height="auto"
                minW="200px"
                borderRadius="8px"
                boxShadow="sm"
                _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
                transition="all 0.2s"
              >
                Run anti-scam
              </Button>
              
              <Flex alignItems="center" justifyContent="center">
                <Icon as={FiHelpCircle} mr={2} color="gray.500" />
                <Text fontSize="sm" color="gray.500">
                  We'll analyze your image for common scam patterns
                </Text>
              </Flex>
            </VStack>
          </CardBody>
          
          <CardFooter borderTop="1px" borderColor="gray.200" pt={4} justifyContent="center">
            <Stack direction="row" spacing={4}>
              {showPrevButton && (
                <Button 
                  onClick={props.onPrev} 
                  variant="outline" 
                  size="lg"
                  borderRadius="8px"
                  minW="100px"
                  _hover={{ bg: secondaryButtonColor }}
                >
                  Previous
                </Button>
              )}
              <Button 
                onClick={() => {
                  // Make sure the anti-scam check runs before proceeding to the next page
                  if (selectedImage && !isLoading) {
                    handleRunAntiScam();
                    setTimeout(() => {
                      props.onNext();
                    }, 1500); // Wait for the analysis to complete
                  } else {
                    props.onNext();
                  }
                }} 
                colorScheme="blue"
                size="lg"
                borderRadius="8px"
                minW="100px"
                boxShadow="sm"
                _hover={{ boxShadow: "md" }}
                isLoading={isLoading}
              >
                Next
              </Button>
            </Stack>
          </CardFooter>
        </Card>
      </Container>
    </Box>
  );
}

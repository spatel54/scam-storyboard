import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useColorModeValue,
  keyframes
} from "@chakra-ui/react";

// Sample service provider logos with actual agency names that commonly handle scam reports
const serviceLogo1 = "https://placehold.co/200x100/e2e8f0/1a202c?text=FTC";  // Federal Trade Commission
const serviceLogo2 = "https://placehold.co/200x100/e2e8f0/1a202c?text=IC3";  // FBI Internet Crime Complaint Center
const serviceLogo3 = "https://placehold.co/200x100/e2e8f0/1a202c?text=CFPB"; // Consumer Financial Protection Bureau

// Animation keyframes for loading effect
const loadingAnimation = keyframes`
  0% {
    opacity: 0.3;
    transform: translateX(-5px);
    filter: grayscale(90%);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
    filter: grayscale(50%);
  }
  100% {
    opacity: 0.3;
    transform: translateX(5px);
    filter: grayscale(90%);
  }
`;

// Pulse animation for success
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export default function ReportingScam(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [activeProvider, setActiveProvider] = useState(0);
  const [confirmationStep, setConfirmationStep] = useState(true);
  
  // Color modes
  const cardBg = useColorModeValue("white", "gray.800");
  const pageBg = useColorModeValue("#f4f6fa", "#1a202c");
  
  // Effect to handle the loading animation when isLoading is true
  useEffect(() => {
    if (!isLoading) return;
    
    // Simulate processing by cycling through providers
    const intervalId = setInterval(() => {
      setActiveProvider(prev => (prev + 1) % 3);
    }, 800);
    
    // Set a timeout to complete loading and move to the next page
    const loadingTimeout = setTimeout(() => {
      // First show all providers as complete
      setIsLoading(false);
      
      // After showing completion state briefly, set loading complete
      const completionTimeout = setTimeout(() => {
        setLoadingComplete(true);
        
        // Auto-advance to next page after showing success
        const advanceTimeout = setTimeout(() => {
          props.onNext();
        }, 1500);
        
        return () => clearTimeout(advanceTimeout);
      }, 2000);
      
      return () => clearTimeout(completionTimeout);
    }, 5000); // Show loading for 5 seconds
    
    return () => {
      clearInterval(intervalId);
      clearTimeout(loadingTimeout);
    };
  }, [isLoading, props]);
  
  // Function to start the reporting process after confirmation
  const handleStartReporting = () => {
    setConfirmationStep(false);
    setIsLoading(true);
  };
  
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
      overflow="auto"
    >
      <Container maxW="700px" centerContent p={4} my={6}>
        <Card
          w="100%" 
          bg={cardBg}
          boxShadow="md"
          borderRadius="16px"
          overflow="visible"
          m={0}
          display="flex"
          flexDirection="column"
          maxH="calc(100vh - 80px)"
        >
          <CardBody py={6} px={8} overflow="auto" flex="1">
            {confirmationStep ? (
              // Confirmation step UI
              <Box textAlign="center" mb={8} mt={4}>
                <Heading as="h2" size="xl" mb={6}>
                  Report this scam to relevant authorities?
                </Heading>
                
                <Text fontSize="lg" mb={8} color="gray.600">
                  With your permission, we can automatically send anonymous reports to the following agencies:
                </Text>
                
                <Grid 
                  templateColumns="repeat(3, 1fr)" 
                  gap={6} 
                  mt={10} 
                  mb={10}
                >
                  {/* Service Provider 1 */}
                  <GridItem>
                    <Box 
                      p={6} 
                      borderRadius="md" 
                      textAlign="center"
                      border="1px solid"
                      borderColor="gray.200"
                      transition="all 0.3s ease"
                    >
                      <Image 
                        src={serviceLogo1} 
                        boxSize="100px" 
                        objectFit="contain"
                        mx="auto" 
                        mb={4}
                      />
                      <Text fontWeight="medium" fontSize="lg">
                        Federal Trade Commission
                      </Text>
                    </Box>
                  </GridItem>
                  
                  {/* Service Provider 2 */}
                  <GridItem>
                    <Box 
                      p={6} 
                      borderRadius="md" 
                      textAlign="center"
                      border="1px solid"
                      borderColor="gray.200"
                      transition="all 0.3s ease"
                    >
                      <Image 
                        src={serviceLogo2} 
                        boxSize="100px" 
                        objectFit="contain"
                        mx="auto" 
                        mb={4}
                      />
                      <Text fontWeight="medium" fontSize="lg">
                        FBI Internet Crime Center
                      </Text>
                    </Box>
                  </GridItem>
                  
                  {/* Service Provider 3 */}
                  <GridItem>
                    <Box 
                      p={6} 
                      borderRadius="md" 
                      textAlign="center"
                      border="1px solid"
                      borderColor="gray.200"
                      transition="all 0.3s ease"
                    >
                      <Image 
                        src={serviceLogo3} 
                        boxSize="100px" 
                        objectFit="contain"
                        mx="auto" 
                        mb={4}
                      />
                      <Text fontWeight="medium" fontSize="lg">
                        Consumer Financial Protection
                      </Text>
                    </Box>
                  </GridItem>
                </Grid>
                
                <Box 
                  mt={8} 
                  p={4} 
                  bg="blue.50" 
                  borderRadius="md" 
                  borderLeft="4px solid" 
                  borderColor="blue.500"
                >
                  <Text color="blue.700" fontWeight="medium">
                    Reporting this scam helps authorities track and prevent similar scams from happening to others. Your report will be anonymous and no personal information will be shared.
                  </Text>
                </Box>
              </Box>
            ) : (
              // Reporting process UI
              <Box textAlign="center" mb={8} mt={4}>
                <Heading as="h2" size="xl" mb={6}>
                  Reporting scam to other relevant service providers
                </Heading>
                
                {isLoading && (
                  <>
                    <Text fontSize="md" mb={4} color="gray.600">
                      Sending anonymous reports...
                    </Text>
                    <Box 
                      width="100%" 
                      height="4px" 
                      bg="gray.100" 
                      borderRadius="full"
                      mb={6}
                      overflow="hidden"
                      position="relative"
                    >
                      <Box 
                        height="100%" 
                        width="30%" 
                        bg="blue.500" 
                        position="absolute"
                        borderRadius="full"
                        animation={`${keyframes`
                          0% { left: -30%; }
                          100% { left: 100%; }
                        `} 2s infinite ease-in-out`}
                      />
                    </Box>
                  </>
                )}
                
                <Grid 
                  templateColumns="repeat(3, 1fr)" 
                  gap={6} 
                  mt={10} 
                  mb={10}
                >
                  {/* Service Provider 1 */}
                  <GridItem>
                    <Box 
                      p={6} 
                      borderRadius="md" 
                      textAlign="center"
                      opacity={isLoading ? (activeProvider === 0 ? "1" : "0.5") : "1"}
                      filter={isLoading ? "grayscale(80%)" : "none"}
                      animation={isLoading && activeProvider === 0 ? `${loadingAnimation} 2s infinite` : "none"}
                      transition="all 0.3s ease"
                    >
                      <Image 
                        src={serviceLogo1} 
                        boxSize="100px" 
                        objectFit="contain"
                        mx="auto" 
                        mb={4}
                      />
                      <Text fontWeight="medium" fontSize="lg">
                        Federal Trade Commission
                      </Text>
                      {!isLoading && (
                        <Text 
                          fontSize="sm" 
                          color="green.500" 
                          mt={2}
                          fontWeight="bold"
                          animation={`${pulseAnimation} 1.5s ease-in-out`}
                        >
                          Report sent ✓
                        </Text>
                      )}
                    </Box>
                  </GridItem>
                  
                  {/* Service Provider 2 */}
                  <GridItem>
                    <Box 
                      p={6} 
                      borderRadius="md" 
                      textAlign="center"
                      opacity={isLoading ? (activeProvider === 1 ? "1" : "0.5") : "1"}
                      filter={isLoading ? "grayscale(80%)" : "none"}
                      animation={isLoading && activeProvider === 1 ? `${loadingAnimation} 2s infinite` : "none"}
                      transition="all 0.3s ease"
                    >
                      <Image 
                        src={serviceLogo2} 
                        boxSize="100px" 
                        objectFit="contain"
                        mx="auto" 
                        mb={4}
                      />
                      <Text fontWeight="medium" fontSize="lg">
                        FBI Internet Crime Center
                      </Text>
                      {!isLoading && (
                        <Text 
                          fontSize="sm" 
                          color="green.500" 
                          mt={2}
                          fontWeight="bold"
                          animation={`${pulseAnimation} 1.5s ease-in-out`}
                        >
                          Report sent ✓
                        </Text>
                      )}
                    </Box>
                  </GridItem>
                  
                  {/* Service Provider 3 */}
                  <GridItem>
                    <Box 
                      p={6} 
                      borderRadius="md" 
                      textAlign="center"
                      opacity={isLoading ? (activeProvider === 2 ? "1" : "0.5") : "1"}
                      filter={isLoading ? "grayscale(80%)" : "none"}
                      animation={isLoading && activeProvider === 2 ? `${loadingAnimation} 2s infinite` : "none"}
                      transition="all 0.3s ease"
                    >
                      <Image 
                        src={serviceLogo3} 
                        boxSize="100px" 
                        objectFit="contain"
                        mx="auto" 
                        mb={4}
                      />
                      <Text fontWeight="medium" fontSize="lg">
                        Consumer Financial Protection
                      </Text>
                      {!isLoading && (
                        <Text 
                          fontSize="sm" 
                          color="green.500" 
                          mt={2}
                          fontWeight="bold"
                          animation={`${pulseAnimation} 1.5s ease-in-out`}
                        >
                          Report sent ✓
                        </Text>
                      )}
                    </Box>
                  </GridItem>
                </Grid>
                
                {!isLoading && (
                  <Box 
                    mt={8} 
                    p={4} 
                    bg="green.50" 
                    borderRadius="md" 
                    borderLeft="4px solid" 
                    borderColor="green.500"
                    animation={`${pulseAnimation} 2s ease-in-out`}
                  >
                    <Text color="green.700" fontWeight="medium">
                      All anonymous reports successfully submitted! Redirecting to next step...
                    </Text>
                  </Box>
                )}
              </Box>
            )}
          </CardBody>
          
          <CardFooter 
            pt={2} 
            pb={6}
            px={8}
            justifyContent={confirmationStep ? "space-between" : "center"}
          >
            {confirmationStep ? (
              <>
                <Button
                  onClick={props.onNext}
                  variant="outline"
                  size="lg"
                  borderRadius="10px"
                  width="45%"
                >
                  Skip
                </Button>
                <Button
                  onClick={handleStartReporting}
                  colorScheme="blue"
                  size="lg"
                  borderRadius="10px"
                  width="45%"
                >
                  Yes, Send Reports
                </Button>
              </>
            ) : (
              <Button
                onClick={props.onPrev}
                variant="outline"
                size="lg"
                borderRadius="10px"
                width="200px"
                isDisabled={loadingComplete}
              >
                Previous
              </Button>
            )}
          </CardFooter>
        </Card>
      </Container>
    </Box>
  );
}
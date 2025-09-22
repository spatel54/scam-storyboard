import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function AutoReporting(props) {
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [madePayment, setMadePayment] = useState(null);
  const [sharedInfo, setSharedInfo] = useState(null);
  
  // Color modes
  const cardBg = useColorModeValue("white", "gray.800");
  const pageBg = useColorModeValue("#f4f6fa", "#1a202c");
  const buttonColorScheme = "blue";
  
  // Check if all questions are answered
  const allQuestionsAnswered = paymentInfo !== null && madePayment !== null && sharedInfo !== null;

  // Handle next button click
  const handleNext = () => {
    // Only proceed if all questions are answered
    if (allQuestionsAnswered) {
      props.onNext();
    }
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
            <Box textAlign="left" mb={8} mt={4}>
              <Heading as="h2" size="xl" mb={8} textAlign="center">
                Follow Up
              </Heading>
              
              <VStack spacing={10} align="stretch">
                {/* Question 1 */}
                <Box>
                  <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Did you send a payment or your personal information?
                  </Text>
                  <HStack spacing={4} justify="flex-start" wrap="wrap">
                    <Button 
                      size="lg" 
                      colorScheme={paymentInfo === 'yes' ? buttonColorScheme : "gray"}
                      variant={paymentInfo === 'yes' ? "solid" : "outline"}
                      borderRadius="8px"
                      minW="120px"
                      onClick={() => setPaymentInfo('yes')}
                    >
                      Yes
                    </Button>
                    <Button 
                      size="lg" 
                      colorScheme={paymentInfo === 'no' ? buttonColorScheme : "gray"}
                      variant={paymentInfo === 'no' ? "solid" : "outline"}
                      borderRadius="8px"
                      minW="120px"
                      onClick={() => setPaymentInfo('no')}
                    >
                      No
                    </Button>
                    <Button 
                      size="lg" 
                      colorScheme={paymentInfo === 'undisclosed' ? buttonColorScheme : "gray"}
                      variant={paymentInfo === 'undisclosed' ? "solid" : "outline"}
                      borderRadius="8px"
                      minW="220px"
                      onClick={() => setPaymentInfo('undisclosed')}
                    >
                      Do not want to disclose
                    </Button>
                  </HStack>
                </Box>
                
                {/* Question 2 */}
                <Box>
                  <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Did you make a payment?
                  </Text>
                  <HStack spacing={4} justify="flex-start" wrap="wrap">
                    <Button 
                      size="lg" 
                      colorScheme={madePayment === 'yes' ? buttonColorScheme : "gray"}
                      variant={madePayment === 'yes' ? "solid" : "outline"}
                      borderRadius="8px"
                      minW="120px"
                      onClick={() => setMadePayment('yes')}
                    >
                      Yes
                    </Button>
                    <Button 
                      size="lg" 
                      colorScheme={madePayment === 'no' ? buttonColorScheme : "gray"}
                      variant={madePayment === 'no' ? "solid" : "outline"}
                      borderRadius="8px"
                      minW="120px"
                      onClick={() => setMadePayment('no')}
                    >
                      No
                    </Button>
                    <Button 
                      size="lg" 
                      colorScheme={madePayment === 'undisclosed' ? buttonColorScheme : "gray"}
                      variant={madePayment === 'undisclosed' ? "solid" : "outline"}
                      borderRadius="8px"
                      minW="220px"
                      onClick={() => setMadePayment('undisclosed')}
                    >
                      Do not want to disclose
                    </Button>
                  </HStack>
                </Box>
                
                {/* Question 3 */}
                <Box>
                  <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Did you share personal information?
                  </Text>
                  <HStack spacing={4} justify="flex-start" wrap="wrap">
                    <Button 
                      size="lg" 
                      colorScheme={sharedInfo === 'yes' ? buttonColorScheme : "gray"}
                      variant={sharedInfo === 'yes' ? "solid" : "outline"}
                      borderRadius="8px"
                      minW="120px"
                      onClick={() => setSharedInfo('yes')}
                    >
                      Yes
                    </Button>
                    <Button 
                      size="lg" 
                      colorScheme={sharedInfo === 'no' ? buttonColorScheme : "gray"}
                      variant={sharedInfo === 'no' ? "solid" : "outline"}
                      borderRadius="8px"
                      minW="120px"
                      onClick={() => setSharedInfo('no')}
                    >
                      No
                    </Button>
                    <Button 
                      size="lg" 
                      colorScheme={sharedInfo === 'undisclosed' ? buttonColorScheme : "gray"}
                      variant={sharedInfo === 'undisclosed' ? "solid" : "outline"}
                      borderRadius="8px"
                      minW="220px"
                      onClick={() => setSharedInfo('undisclosed')}
                    >
                      Do not want to disclose
                    </Button>
                  </HStack>
                </Box>
              </VStack>
              
              {/* Info box */}
              {allQuestionsAnswered && (
                <Box 
                  mt={10} 
                  p={4} 
                  bg="blue.50" 
                  borderRadius="md" 
                  borderLeft="4px solid" 
                  borderColor="blue.500"
                >
                  <Text color="blue.700" fontWeight="medium">
                    Thank you for providing this information. This helps us better understand the impact of the scam and provide more tailored assistance.
                  </Text>
                </Box>
              )}
            </Box>
          </CardBody>
          
          <CardFooter 
            pt={2} 
            pb={6}
            px={8}
            justifyContent="space-between"
          >
            <Button
              onClick={props.onPrev}
              variant="outline"
              size="lg"
              borderRadius="10px"
              width="45%"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              colorScheme="blue"
              size="lg"
              borderRadius="10px"
              width="45%"
              isDisabled={!allQuestionsAnswered}
            >
              Next
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </Box>
  );
}

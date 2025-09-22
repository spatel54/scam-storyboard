import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
  useColorModeValue
} from "@chakra-ui/react";
import { 
  FaInfoCircle, 
  FaCheck,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import StepProgress from "../ui/StepProgress";

export default function CreateUniqueIdentifier(props) {
  const { onNext, onBack } = props;
  const [identifier, setIdentifier] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Color modes
  const cardBg = useColorModeValue("white", "gray.800");
  const pageBg = useColorModeValue("#f4f6fa", "#1a202c");
  const formBg = useColorModeValue("gray.50", "gray.700");
  
  const handleContinue = () => {
    if (identifier) {
      setShowConfirmation(true);
    } else if (onNext) {
      onNext(identifier || 'Z9!bQ#pR*2'); // Pass the created identifier or a default
    }
  };
  
  const handleConfirm = () => {
    if (onNext) {
      onNext(identifier || 'Z9!bQ#pR*2'); // Pass the created identifier
    }
  };
  
  const backToAction = () => {
    // This will navigate back to the "How would you like to take action?" screen
    if (props.onBack) {
      props.onBack();
    }
  };

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
  };
  
  return (
    <Box 
      p={0} 
      m={0} 
      bg={pageBg} 
      minH="100vh" 
      w="100%" 
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
      <Container maxW="700px" centerContent p={6} my={6}>
        {/* Progress indicator */}
        <StepProgress
          steps={[
            { id: 'create', label: 'Create', description: 'Create identifier' },
            { id: 'implement', label: 'Implement', description: 'Add to your accounts' },
            { id: 'verify', label: 'Verify', description: 'Check for your identifier' }
          ]}
          activeStep={0}
          allowNavigation={false}
        />
      
        <Card
          w="100%" 
          bg={cardBg}
          boxShadow="md"
          borderRadius="12px"
          m={0}
          display="flex"
          flexDirection="column"
        >
          <CardHeader pb={2} textAlign="center" pt={6} px={6}>
            <Heading as="h2" size="lg" mb={2}>
              {!showConfirmation ? "Create Your Unique Identifier" : "Confirm Your Identifier"}
            </Heading>
          </CardHeader>
          
          <CardBody py={6} px={6}>
            {!showConfirmation ? (
              <VStack spacing={6} align="stretch">
                <Text fontSize="md" color="gray.600">
                  Creating a unique identifier helps protect you from scams by allowing you to verify 
                  legitimate communications. Add this identifier to your accounts as a security feature.
                </Text>
                
                <Box 
                  bg={formBg}
                  p={5}
                  borderRadius="md"
                  borderWidth="1px"
                  borderColor="gray.200"
                >
                  <VStack spacing={4} align="stretch">
                    <Box>
                      <Heading as="h3" size="sm" mb={2}>
                        Your Unique Identifier:
                      </Heading>
                      <Input
                        type="text"
                        value={identifier}
                        onChange={handleIdentifierChange}
                        placeholder="Enter your unique identifier"
                        size="lg"
                        bg="white"
                      />
                    </Box>
                    
                    <Box>
                      <Flex alignItems="center" mb={2}>
                        <Icon as={FaInfoCircle} color="blue.500" mr={2} />
                        <Text fontSize="sm" fontWeight="bold">
                          This identifier will be included in email subject lines from legitimate sources.
                        </Text>
                      </Flex>
                      <Text fontSize="sm" color="gray.600">
                        Example: If your identifier is "BlueOcean42", a legitimate email might have:
                        <Text as="span" fontWeight="bold" mx={1}>[Govt-BlueOcean42]</Text>
                        in the subject line.
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </VStack>
            ) : (
              <VStack spacing={6} align="stretch">
                <Box 
                  bg="green.50" 
                  p={5}
                  borderRadius="md"
                  borderWidth="1px"
                  borderColor="green.200"
                >
                  <VStack spacing={4} align="stretch">
                    <Flex alignItems="center">
                      <Icon as={FaCheck} color="green.500" mr={2} />
                      <Heading as="h3" size="md">
                        Your identifier is: {identifier || 'Z9!bQ#pR*2'}
                      </Heading>
                    </Flex>
                    
                    <Text>
                      Whenever you receive an email claiming to be from a government agency, check that
                      <Text as="span" fontWeight="bold" mx={1}>[Govt-{identifier || 'Z9!bQ#pR*2'}]</Text>
                      appears in the subject line.
                    </Text>
                    
                    <Text fontSize="sm" color="gray.600">
                      If this identifier is not present, be very cautious about the email's legitimacy.
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            )}
          </CardBody>
          
          <CardFooter 
            borderTop="1px" 
            borderColor="gray.200"
            justifyContent="space-between" 
            bg="gray.50"
            py={4}
            px={6}
          >
            <Button 
              onClick={showConfirmation ? () => setShowConfirmation(false) : backToAction} 
              leftIcon={<Icon as={FaChevronLeft} />}
              variant="outline"
              colorScheme="blue"
              size="lg"
              height="44px"
              minW="120px"
            >
              {showConfirmation ? "Back" : "Previous"}
            </Button>
            
            <Button 
              onClick={showConfirmation ? handleConfirm : handleContinue} 
              rightIcon={showConfirmation ? undefined : <Icon as={FaChevronRight} />}
              leftIcon={showConfirmation ? <Icon as={FaCheck} /> : undefined}
              colorScheme={showConfirmation ? "green" : "blue"}
              size="lg"
              height="44px"
              minW="120px"
              isDisabled={!showConfirmation && !identifier}
            >
              {showConfirmation ? "Confirm & Continue" : "Continue"}
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </Box>
  );
}
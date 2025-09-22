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
  useColorModeValue,
  Collapse,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import StandardProgressBar from "../ui/StandardProgressBar";

export default function WordNumberTrick(props) {
  const { onNext, onPrev } = props;
  const [uniquePhrase, setUniquePhrase] = useState("");
  const [showTips, setShowTips] = useState(false);
  
  // Color modes
  const cardBg = useColorModeValue("white", "gray.800");
  const pageBg = useColorModeValue("#f4f6fa", "#1a202c");
  const formBg = useColorModeValue("gray.50", "gray.700");
  const tipsBg = useColorModeValue("blue.50", "blue.900");
  
  const handlePhraseChange = (e) => {
    setUniquePhrase(e.target.value);
  };
  
  const toggleTips = () => {
    setShowTips(!showTips);
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
        <StandardProgressBar
          currentStep={2}
          totalSteps={3}
          stepLabel="Unique word and number combination"
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
              Create Your Unique Identifier
            </Heading>
          </CardHeader>
          
          <CardBody py={6} px={6}>
            <VStack spacing={6} align="stretch">
              <Text fontSize="md" color="gray.600">
                Creating a unique identifier helps you recognize legitimate government communications. 
                This identifier will be included in the subject line of official emails.
              </Text>
              
              <Button 
                onClick={toggleTips}
                variant="ghost"
                colorScheme="blue"
                size="md"
                rightIcon={showTips ? <FaChevronUp /> : <FaChevronDown />}
                alignSelf="center"
                mb={2}
              >
                {showTips ? "Hide Tips" : "Show Tips"}
              </Button>
              
              <Collapse in={showTips} animateOpacity>
                <Box
                  bg={tipsBg}
                  p={4}
                  borderRadius="md"
                  mb={4}
                >
                  <Heading as="h3" size="sm" mb={3}>
                    Tips for a Good Identifier:
                  </Heading>
                  <List spacing={2}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Combine a word + number (e.g., Sunset42)
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Choose something you'll remember but isn't obvious
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Avoid personal information like birthdays
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Use 6-12 characters for ideal length
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      Mix uppercase and lowercase for better security
                    </ListItem>
                  </List>
                </Box>
              </Collapse>
              
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
                      value={uniquePhrase}
                      onChange={handlePhraseChange}
                      placeholder="Enter your unique identifier"
                      size="lg"
                      bg="white"
                    />
                  </Box>
                  
                  <Flex alignItems="center">
                    <Icon as={FaInfoCircle} color="blue.500" mr={2} />
                    <Text fontSize="sm" color="gray.600">
                      This will be used to verify official communications
                    </Text>
                  </Flex>
                </VStack>
              </Box>
              
              <Box 
                bg="yellow.50" 
                p={4}
                borderRadius="md"
                borderWidth="1px"
                borderColor="yellow.200"
              >
                <Text fontSize="sm">
                  <strong>Remember:</strong> Never share this identifier with anyone who contacts you. 
                  It's only for you to verify incoming communications.
                </Text>
              </Box>
            </VStack>
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
              onClick={onPrev} 
              leftIcon={<Icon as={FaChevronLeft} />}
              variant="outline"
              colorScheme="blue"
              size="lg"
              height="44px"
              minW="120px"
            >
              Previous
            </Button>
            
            <Button 
              onClick={() => onNext(uniquePhrase)} 
              rightIcon={<Icon as={FaChevronRight} />}
              colorScheme="blue"
              size="lg"
              height="44px"
              minW="120px"
              isDisabled={!uniquePhrase}
            >
              Continue
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </Box>
  );
}
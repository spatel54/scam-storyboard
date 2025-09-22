import React from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardBody, 
  Container, 
  Flex, 
  Heading, 
  Icon, 
  SimpleGrid, 
  Text, 
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { FaShieldAlt, FaFistRaised, FaBook, FaChevronLeft } from 'react-icons/fa';
import StandardProgressBar from './ui/StandardProgressBar';

const ActionSelection = ({ onGoToSection, onNext, onPrev, navigation }) => {
  // Color modes using Chakra UI's native useColorModeValue
  const cardBg = useColorModeValue("white", "gray.800");
  const pageBg = useColorModeValue("#f4f6fa", "#1a202c");
  const iconBg = useColorModeValue("blue.50", "blue.900");
  const iconColor = useColorModeValue("blue.500", "blue.200");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  
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
      <Container maxW="900px" centerContent p={6} my={6}>
        {/* Progress indicator */}
        {navigation ? (
          <StandardProgressBar
            currentStep={3}
            totalSteps={6}
            stepLabel="Choose an action"
            navigation={navigation}
          />
        ) : (
          <StandardProgressBar
            currentStep={3}
            totalSteps={6}
            stepLabel="Choose an action"
          />
        )}
      
        <Card
          w="100%" 
          bg={cardBg}
          boxShadow="md"
          borderRadius="12px"
          m={0}
          display="flex"
          flexDirection="column"
        >
          <CardBody py={6} px={6}>
            <Heading as="h1" size="lg" mb={6} textAlign="center">
              How would you like to take action?
            </Heading>
            
            <SimpleGrid columns={[1, null, 3]} spacing={6} mb={8}>
              <Card 
                bg={cardBg} 
                borderWidth="1px" 
                borderColor={borderColor}
                borderRadius="md" 
                boxShadow="sm"
                cursor="pointer"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "md",
                  borderColor: "blue.500"
                }}
                onClick={() => onGoToSection("Protect")}
                height="250px"
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Flex
                      width="70px" 
                      height="70px" 
                      borderRadius="full" 
                      bg={iconBg}
                      alignItems="center"
                      justifyContent="center"
                      boxShadow="sm"
                    >
                      <Icon as={FaShieldAlt} w={7} h={7} color={iconColor} />
                    </Flex>
                    <Heading size="md">Protect yourself</Heading>
                    <Text textAlign="center">
                      Learn how to stay safe and secure online.
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
              
              <Card 
                bg={cardBg} 
                borderWidth="1px" 
                borderColor={borderColor}
                borderRadius="md" 
                boxShadow="sm"
                cursor="pointer"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "md",
                  borderColor: "blue.500"
                }}
                onClick={() => onGoToSection("Fight")}
                height="250px"
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Flex
                      width="70px" 
                      height="70px" 
                      borderRadius="full" 
                      bg={iconBg}
                      alignItems="center"
                      justifyContent="center"
                      boxShadow="sm"
                    >
                      <Icon as={FaFistRaised} w={7} h={7} color={iconColor} />
                    </Flex>
                    <Heading size="md">Fight</Heading>
                    <Text textAlign="center">
                      Take action against scams and help others.
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
              
              <Card 
                bg={cardBg} 
                borderWidth="1px" 
                borderColor={borderColor}
                borderRadius="md" 
                boxShadow="sm"
                cursor="pointer"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "md",
                  borderColor: "blue.500"
                }}
                onClick={() => onGoToSection("Educate")}
                height="250px"
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Flex
                      width="70px" 
                      height="70px" 
                      borderRadius="full" 
                      bg={iconBg}
                      alignItems="center"
                      justifyContent="center"
                      boxShadow="sm"
                    >
                      <Icon as={FaBook} w={7} h={7} color={iconColor} />
                    </Flex>
                    <Heading size="md">Educate myself</Heading>
                    <Text textAlign="center">
                      Get informed about common scams and prevention.
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
            
            <Flex justifyContent="space-between" mt={8}>
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
            </Flex>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};

export default ActionSelection;
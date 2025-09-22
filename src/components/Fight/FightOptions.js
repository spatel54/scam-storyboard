import React from "react";
import { 
  Box, 
  Button, 
  Card, 
  CardBody, 
  Container, 
  Flex, 
  Heading, 
  Icon, 
  Text, 
  useColorModeValue,
  SimpleGrid,
  VStack
} from "@chakra-ui/react";
import { FaChevronLeft, FaFish } from "react-icons/fa";
import { MdOutlineBusinessCenter, MdOutlineAccountBalance } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";

export default function FightOptions(props) {
  const { onNext, onBack } = props;
  
  // Color modes using Chakra UI's native useColorModeValue
  const cardBg = useColorModeValue("white", "gray.800");
  const pageBg = useColorModeValue("#f4f6fa", "#1a202c");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const iconBg = useColorModeValue("blue.50", "blue.900");
  const iconColor = useColorModeValue("blue.600", "blue.300");
  
  // Handle option selection
  const handleOptionClick = (option) => {
    if (onNext) {
      onNext(option);
    }
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
      <Container maxW="900px" centerContent p={6} my={6}>
        {/* Progress indicator removed */}
      
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
              Here are ways you can fight the scammer
            </Heading>
            
            <SimpleGrid columns={[1, null, 2]} spacing={6} mb={8}>
              {/* Card 1 - Shutdown Scammer */}
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
                onClick={() => handleOptionClick("RequestShutdown")}
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
                      <Icon as={MdOutlineBusinessCenter} w={7} h={7} color={iconColor} />
                    </Flex>
                    <Heading size="md">Shut down scammer</Heading>
                    <Text textAlign="center">
                      Report to service providers to take down scam websites, emails, or accounts
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
              
              {/* Card 2 - Write to Congress */}
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
                onClick={() => handleOptionClick("WriteCongress")}
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
                      <Icon as={MdOutlineAccountBalance} w={7} h={7} color={iconColor} />
                    </Flex>
                    <Heading size="md">Write to congress</Heading>
                    <Text textAlign="center">
                      Support legislation and policy to combat scams and protect consumers
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
              
              {/* Card 3 - Bait Scammer */}
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
                onClick={() => handleOptionClick("BaitScammer")}
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
                      <Icon as={FaFish} w={7} h={7} color={iconColor} />
                    </Flex>
                    <Heading size="md">Bait scammer</Heading>
                    <Text textAlign="center">
                      Safely waste scammers' time to prevent them from targeting others
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
              
              {/* Card 4 - Donate */}
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
                onClick={() => handleOptionClick("DonateAttack")}
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
                      <Icon as={BiDonateHeart} w={7} h={7} color={iconColor} />
                    </Flex>
                    <Heading size="md">Donate to conduct an attack</Heading>
                    <Text textAlign="center">
                      Support anti-scam organizations working to combat fraud and educate the public
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
            
            <Flex justifyContent="space-between" mt={8}>
              <Button 
                onClick={onBack} 
                leftIcon={<Icon as={FaChevronLeft} />}
                variant="outline"
                colorScheme="blue"
                size="lg"
                height="44px"
                minW="120px"
              >
                Back
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
}
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
  InputGroup,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Divider,
  useClipboard,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { 
  FiCopy, 
  FiMail, 
  FiMessageCircle, 
  FiCheckCircle, 
  FiAlertTriangle 
} from "react-icons/fi";

export default function Socialize(props) {
  // State for email or phone to share with
  const [shareContact, setShareContact] = useState("");
  const [shareSuccess, setShareSuccess] = useState(false);
  const [shareMethod, setShareMethod] = useState(null);
  const [reportCount, setReportCount] = useState(128);
  // Modal control for message preview
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Determine input type for dynamic button
  const [inputType, setInputType] = useState("contact");
  
  // Toast for notifications
  const toast = useToast();
  
  // Pre-written message for sharing
  const defaultMessage = "I wanted to share this scam warning with you. I've found this educational resource that helped me identify and protect against scams: [YourAppURL]";
  
  // State for editable message
  const [preWrittenMessage, setPreWrittenMessage] = useState(defaultMessage);
  
  // For copy functionality - will update when preWrittenMessage changes
  const { hasCopied, onCopy } = useClipboard(preWrittenMessage);
  
  // When the preWrittenMessage changes, update the copy functionality
  React.useEffect(() => {
    // This effect will ensure the useClipboard hook updates when the message changes
  }, [preWrittenMessage]);
  
  // Color modes
  const cardBg = useColorModeValue("white", "gray.800");
  const pageBg = useColorModeValue("#f4f6fa", "#1a202c");
  const secondaryButtonColor = useColorModeValue("gray.200", "gray.600");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const alertBg = useColorModeValue("blue.50", "blue.900");
  
  // Real-time counter simulation
  React.useEffect(() => {
    const interval = setInterval(() => {
      // Randomly increment report count to simulate real-time updates
      if (Math.random() > 0.7) { // 30% chance of a new report
        setReportCount(prev => prev + 1);
      }
    }, 5000); // Check every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Function to detect if input is email or phone
  const detectInputType = (value) => {
    if (value.includes('@')) {
      return 'email';
    } else if (/^\d{10}$|^\d{3}[-.]?\d{3}[-.]?\d{4}$/.test(value.replace(/[-()\s]/g, ''))) {
      return 'phone';
    }
    return 'contact';
  };
  
  // Update input type when contact changes
  React.useEffect(() => {
    setInputType(detectInputType(shareContact));
  }, [shareContact]);
  
  // Set focus trap and accessibility features for modal
  const initialFocusRef = React.useRef();
  
  // Handle share completion (for UI updates after sharing)
  const handleShareComplete = (method) => {
    // Update UI state
    setShareMethod(method || (inputType === 'email' ? 'email' : 'message'));
    setShareSuccess(true);
    
    // Increment report count when user shares (their contribution counts too)
    setReportCount(prev => prev + 1);
    
    // Show success message
    toast({
      title: "Shared successfully!",
      description: `Information sent to ${shareContact} via ${inputType === 'email' ? 'email' : 'text message'}.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  
  // Function to actually send the message via email or SMS
  const sendMessage = () => {
    // Simple regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Simple regex for basic phone number validation
    const phoneRegex = /^\d{10}$|^\d{3}[-.\s]\d{3}[-.\s]\d{4}$/;

    if (emailRegex.test(shareContact)) {
      // It's an email - open mail client
      window.location.href = `mailto:${shareContact}?subject=Important Scam Alert&body=${encodeURIComponent(preWrittenMessage)}`;
      // Update UI after a short delay to allow the mail client to open
      setTimeout(() => handleShareComplete('email'), 500);
    } else if (phoneRegex.test(shareContact.replace(/[-\s]/g, ''))) {
      // It's a phone number - open SMS client (this will work on mobile devices)
      window.location.href = `sms:${shareContact}?body=${encodeURIComponent(preWrittenMessage)}`;
      // Update UI after a short delay to allow the SMS client to open
      setTimeout(() => handleShareComplete('message'), 500);
    } else {
      toast({
        title: "Invalid input",
        description: "Please enter a valid email address or phone number.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
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
          <CardHeader pb={0} textAlign="center" pt={8} px={8}>
            <Heading as="h2" size="xl" mb={3}>Spread Awareness</Heading>
            <Text fontSize="md" color="gray.500" mb={5}>
              Share this scam alert with your family members and friends to help protect them from becoming victims.
            </Text>
          </CardHeader>
          
          <CardBody py={6} px={8} overflow="auto" flex="1">
            <VStack spacing={8} align="stretch">
              {/* Scam Information - New Design based on the provided images */}
              <Card 
                variant="outline" 
                p={0} 
                borderColor={borderColor}
                borderRadius="lg"
                width="100%"
                overflow="hidden"
                boxShadow="sm"
              >
                <Box 
                  width="100%" 
                  position="relative"
                  border="1px solid" 
                  borderColor={borderColor}
                  borderRadius="lg"
                  py={6}
                  px={6}
                >
                  {/* Circular counter */}
                  <Box 
                    width="180px" 
                    height="180px" 
                    bg="#e6f0fb" 
                    borderRadius="full" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    position="relative"
                    mx="auto"
                    mb={6}
                  >
                    <Heading 
                      fontSize="90px" 
                      lineHeight="1" 
                      fontWeight="bold" 
                      textAlign="center"
                      color="#1a202c"
                    >
                      {reportCount}
                    </Heading>
                  </Box>
                  
                  {/* Text content below the circle */}
                  <Box textAlign="center" mt={4}>
                    <Text fontSize="xl" fontWeight="medium" mb={6}>
                      others have reported <Text as="span" fontWeight="bold" color="red.500" display="inline">FastCashWire Services</Text>
                    </Text>
                    <Flex align="center" justify="center" mt={2}>
                      <Text fontWeight="medium" mr={3} fontSize="lg">Scam frequency:</Text>
                      <Box 
                        bg="red.100" 
                        px={5} 
                        py={1} 
                        borderRadius="full"
                      >
                        <Text color="red.600" fontWeight="bold" fontSize="lg">
                          High
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                  
                  {/* "LIVE" badge in top right */}
                  <Box 
                    position="absolute" 
                    top={5} 
                    right={6}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="green.50" 
                    px={3}
                    py={1.5}
                    borderRadius="md"
                  >
                    <Box
                      width="10px" 
                      height="10px" 
                      bg="green.500" 
                      borderRadius="full" 
                      mr={2}
                      animation="pulse 2s infinite"
                      sx={{
                        "@keyframes pulse": {
                          "0%": {
                            boxShadow: "0 0 0 0 rgba(72, 187, 120, 0.7)"
                          },
                          "70%": {
                            boxShadow: "0 0 0 10px rgba(72, 187, 120, 0)"
                          },
                          "100%": {
                            boxShadow: "0 0 0 0 rgba(72, 187, 120, 0)"
                          }
                        }
                      }}
                    />
                    <Text color="green.500" fontWeight="bold" fontSize="md">
                      LIVE
                    </Text>
                  </Box>
                </Box>
              </Card>

              {/* Share Methods */}
              <VStack spacing={5} align="stretch" py={3}>
                <Heading as="h3" size="md" fontWeight="600">Share with family members and friends via:</Heading>
                
                {/* Message/Email input */}
                <InputGroup size="lg">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Enter email or phone number"
                    value={shareContact}
                    onChange={(e) => setShareContact(e.target.value)}
                    borderRadius="8px"
                    fontSize="md"
                    height="50px"
                  />
                </InputGroup>
                
                <HStack spacing={4}>
                  <Button 
                    leftIcon={<Icon as={inputType === 'email' ? FiMail : FiMessageCircle} boxSize={5} />} 
                    colorScheme={inputType === 'email' ? "blue" : "green"} 
                    flex="1"
                    onClick={onOpen}
                    isDisabled={!shareContact || shareSuccess}
                    aria-label={`Send message via ${inputType === 'email' ? 'email' : 'text'}`}
                    borderRadius="8px"
                    py={6}
                    fontWeight="600"
                  >
                    Preview & {inputType === 'email' ? 'Send Email' : inputType === 'phone' ? 'Send Text' : 'Send'}
                  </Button>
                </HStack>
                
                <Divider my={4} />
                
                {/* Copy Text Option */}
                <Box>
                  <HStack spacing={4} mb={3}>
                    <Button
                      leftIcon={<Icon as={hasCopied ? FiCheckCircle : FiCopy} boxSize={5} />}
                      colorScheme={hasCopied ? "green" : "gray"}
                      variant="outline"
                      flex="1"
                      onClick={onCopy}
                      borderRadius="8px"
                      py={6}
                      fontWeight="600"
                    >
                      {hasCopied ? "Copied!" : "Copy message"}
                    </Button>
                    <Button
                      colorScheme="blue"
                      variant="outline"
                      flex="1"
                      onClick={onOpen}
                      borderRadius="8px"
                      py={6}
                      fontWeight="600"
                    >
                      Preview message
                    </Button>
                  </HStack>
                  <Text fontSize="sm" color="gray.500" mb={2} textAlign="center">
                    Copy or preview a pre-written warning message to share manually
                  </Text>
                </Box>
                
                {/* Message Preview Modal */}
                <Modal 
                  isOpen={isOpen} 
                  onClose={onClose} 
                  isCentered 
                  motionPreset="scale"
                  initialFocusRef={initialFocusRef}
                  aria-labelledby="message-preview-title"
                  returnFocusOnClose={true}
                >
                  <ModalOverlay backdropFilter="blur(10px)" />
                  <ModalContent mx={4}>
                    <ModalHeader id="message-preview-title">Message Preview</ModalHeader>
                    <ModalCloseButton aria-label="Close preview" />
                    <ModalBody pb={6}>
                      <Text mb={2} fontSize="sm" color="gray.600">
                        Edit your message below:
                      </Text>
                      <Box
                        p={4}
                        bg="gray.50"
                        borderRadius="md"
                        _dark={{ bg: "gray.700" }}
                      >
                        <textarea
                          value={preWrittenMessage}
                          onChange={(e) => setPreWrittenMessage(e.target.value)}
                          style={{
                            width: '100%',
                            minHeight: '120px',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #E2E8F0',
                            backgroundColor: 'transparent',
                            color: 'inherit',
                            fontFamily: 'inherit',
                            fontSize: 'inherit',
                            resize: 'vertical'
                          }}
                        />
                      </Box>
                      <Text mt={2} fontSize="xs" color="gray.500" textAlign="right">
                        {preWrittenMessage.length} characters
                      </Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button 
                        onClick={() => {
                          setPreWrittenMessage(defaultMessage);
                          onClose();
                        }} 
                        mr={2} 
                        variant="outline"
                        size="sm"
                      >
                        Cancel
                      </Button>
                      <Button 
                        onClick={onClose} 
                        mr={3} 
                        variant="outline"
                        colorScheme="blue"
                        ref={initialFocusRef}
                      >
                        Save
                      </Button>
                        <Button 
                          colorScheme={inputType === 'email' ? "blue" : "green"} 
                          onClick={() => {
                            sendMessage(); // Use sendMessage to actually send the message
                            onClose(); // Close modal after sending
                          }}
                          isDisabled={!shareContact || shareSuccess || !preWrittenMessage.trim()}
                          leftIcon={<Icon as={inputType === 'email' ? FiMail : FiMessageCircle} />}
                        >
                          {inputType === 'email' ? 'Send Email' : inputType === 'phone' ? 'Send Text' : 'Send'}
                        </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </VStack>
              
              {/* Success Message */}
              {shareSuccess && (
                <Alert status="success" borderRadius="lg" p={4} boxShadow="sm">
                  <AlertIcon boxSize={5} />
                  <Box ml={2}>
                    <AlertTitle fontWeight="600" fontSize="lg" mb={1}>Shared successfully!</AlertTitle>
                    <AlertDescription fontSize="md">
                      Your warning has been sent to {shareContact} via {shareMethod}.
                      Thank you for helping others stay safe!
                    </AlertDescription>
                  </Box>
                </Alert>
              )}
              
              {/* Importance Notice */}
              <Box bg={alertBg} p={6} borderRadius="lg" mt={3} boxShadow="sm">
                <Flex align="center" mb={3}>
                  <Icon as={FiAlertTriangle} mr={3} color="blue.500" boxSize={5} />
                  <Heading as="h3" size="md" fontWeight="600">Why sharing is important</Heading>
                </Flex>
                <Text fontSize="md" lineHeight="1.6">
                  Scammers target multiple people. By warning your friends and family,
                  you create a network of protection that makes it harder for scammers to succeed.
                  Every person who learns about a scam is one less potential victim.
                </Text>
              </Box>
            </VStack>
          </CardBody>
          
          <CardFooter 
            pt={2} 
            pb={6}
            px={8}
            justifyContent="center"
          >
            <Flex gap={4} justifyContent="center">
              <Button 
                onClick={props.onPrev}
                bg={secondaryButtonColor}
                _hover={{ bg: useColorModeValue("gray.300", "gray.500") }}
                size="lg"
                borderRadius="10px"
                minWidth="120px"
              >
                Previous
              </Button>
              <Button 
                onClick={props.onNext}
                colorScheme="blue"
                size="lg"
                borderRadius="10px"
                minWidth="120px"
              >
                Next
              </Button>
            </Flex>
          </CardFooter>
        </Card>
      </Container>
    </Box>
  );
}

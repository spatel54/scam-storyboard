import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FaCheckCircle, FaExclamationTriangle, FaChevronLeft, FaQuestion } from "react-icons/fa";
import VideoThumbnail from "./ui/VideoThumbnail";
import "./Educate.css";

export default function Educate(props) {  
  // State for multiple choice question
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const feedbackRef = useRef(null);
  
  // Color modes
  const cardBg = useColorModeValue("white", "gray.800");
  const pageBg = useColorModeValue("#f4f6fa", "#1a202c");
  
  // Question and answer options
  const scamQuestion = "Which of the following is NOT a common sign of a phishing attempt?";
  const answerOptions = [
    { value: "a", text: "Urgent requests for personal information" },
    { value: "b", text: "Misspellings and grammatical errors" },
    { value: "c", text: "Threats of account closure" },
    { value: "d", text: "A personalized greeting with your full name" } // Correct answer
  ];
  
  // Check answer and provide feedback
  const checkAnswer = () => {
    setShowFeedback(true);
    
    // Set focus to the feedback area for screen readers
    setTimeout(() => {
      if (feedbackRef.current) {
        feedbackRef.current.focus();
      }
    }, 100);
  };
  
  // Sample videos data
  const educationalVideos = [
    {
      id: 1,
      title: "How to Identify Phishing Emails",
      description: "Learn the key signs of phishing attempts and how to protect yourself from email scams.",
      thumbnailUrl: "https://via.placeholder.com/300x169?text=Phishing+Email+Tutorial",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example URL
      tags: ["Email", "Phishing", "Security", "Beginner"]
    },
    {
      id: 2,
      title: "Avoiding Phone Scams",
      description: "Common tactics used in phone scams and strategies to protect yourself from fraudsters.",
      thumbnailUrl: "https://via.placeholder.com/300x169?text=Phone+Scams+Guide",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example URL
      tags: ["Phone", "Scam", "Security", "Tips"]
    },
    {
      id: 3,
      title: "Social Media Security",
      description: "How to secure your social media accounts and recognize social engineering attempts.",
      thumbnailUrl: "https://via.placeholder.com/300x169?text=Social+Media+Security",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example URL
      tags: ["Social Media", "Privacy", "Security", "Advanced"]
    },
    {
      id: 4,
      title: "Financial Fraud Protection",
      description: "Protect your financial accounts from common fraud schemes and identity theft.",
      thumbnailUrl: "https://via.placeholder.com/300x169?text=Financial+Fraud+Protection",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example URL
      tags: ["Financial", "Fraud", "Protection", "Banking"]
    }
  ];

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
      <Container maxW="900px" centerContent p={4} my={4}>
        {/* Progress bar removed as requested */}
      
        <Card
          w="100%" 
          bg={cardBg}
          boxShadow="md"
          borderRadius="12px"
          m={0}
          display="flex"
          flexDirection="column"
          maxH="85vh"
          overflow="auto"
        >
          <CardHeader pb={1} textAlign="center" pt={4} px={4}>
            <Heading as="h2" size="lg" mb={1}>Educate Yourself</Heading>
          </CardHeader>
          
          <CardBody py={3} px={4}>
            {/* Main content */}
            <Box mb={4} textAlign="center">
              <Flex align="center" justify="center" mb={3}>
                <Text fontSize="md" fontWeight="500" mr={2}>
                  How well can you recognize scams?
                </Text>
                
                {/* Question mark icon moved next to text */}
                <Box
                  width="30px" 
                  height="30px" 
                  borderRadius="full" 
                  bg="blue.50"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="sm"
                >
                  <Icon as={FaQuestion} w={4} h={4} color="blue.500" />
                </Box>
              </Flex>
            </Box>
            
            {/* Multiple choice question */}
            <Box 
              mb={4} 
              bg="blue.50" 
              p={3} 
              borderRadius="md" 
              boxShadow="sm"
            >
              <Text fontWeight="bold" mb={3} fontSize="md">
                {scamQuestion}
              </Text>
              
              <RadioGroup onChange={setSelectedAnswer} value={selectedAnswer} mb={3}>
                <Stack direction="column" spacing={2}>
                  {answerOptions.map((option) => (
                    <Radio 
                      key={option.value} 
                      value={option.value} 
                      colorScheme="blue"
                      size="md"
                      aria-label={option.text}
                    >
                      <Text fontSize="md">{option.text}</Text>
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
              
              <Button 
                onClick={checkAnswer} 
                colorScheme="blue" 
                size="md"
                height="40px"
                width="130px"
                isDisabled={!selectedAnswer}
                aria-label="Check your answer"
              >
                Check Answer
              </Button>
              
              {showFeedback && selectedAnswer === "d" && (
                <Box 
                  mt={2} 
                  p={2} 
                  bg="green.100" 
                  borderRadius="md"
                  tabIndex={0} 
                  ref={feedbackRef}
                  aria-live="polite"
                >
                  <Flex alignItems="center">
                    <Icon as={FaCheckCircle} color="green.600" mr={1} />
                    <Text fontSize="sm" color="green.700">
                      Correct! Legitimate emails often include your name, while scammers typically use generic greetings.
                    </Text>
                  </Flex>
                </Box>
              )}
              
              {showFeedback && selectedAnswer !== "d" && selectedAnswer && (
                <Box 
                  mt={2} 
                  p={2} 
                  bg="red.100" 
                  borderRadius="md"
                  tabIndex={0} 
                  ref={feedbackRef}
                  aria-live="polite"
                >
                  <Flex alignItems="center">
                    <Icon as={FaExclamationTriangle} color="red.600" mr={1} />
                    <Text fontSize="sm" color="red.700">
                      Not quite. The correct answer is D. Legitimate emails often include your personal details, while scammers typically use generic greetings.
                    </Text>
                  </Flex>
                </Box>
              )}
            </Box>
            
            {/* Video Grid */}
            <Box mb={3}>
              <Heading as="h4" size="md" mb={3} textAlign="center">
                Learn more about recognizing scams:
              </Heading>
              
              <Flex wrap="wrap" justify="space-between" gap={2}>
                {educationalVideos.map((video) => (
                  <Box 
                    key={video.id} 
                    width={["100%", "48%", "23%"]} 
                    mb={2}
                    borderRadius="md"
                    overflow="hidden"
                    boxShadow="sm"
                  >
                    <VideoThumbnail
                      title={video.title}
                      description={video.description}
                      videoUrl={video.videoUrl}
                      thumbnailUrl={video.thumbnailUrl}
                      tags={video.tags}
                    />
                  </Box>
                ))}
              </Flex>
            </Box>
          </CardBody>
          
          <CardFooter 
            borderTop="1px" 
            borderColor="gray.200"
            justifyContent="flex-start" 
            bg="gray.50"
            py={3}
            px={4}
          >
            <Button 
              onClick={props.onBack} 
              leftIcon={<Icon as={FaChevronLeft} />}
              variant="outline"
              colorScheme="blue"
              size="md"
              height="40px"
              minW="110px"
              aria-label="Return to actions page"
            >
              Previous
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </Box>
  );
}

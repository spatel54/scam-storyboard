import React from 'react';
import {
  Box,
  Flex,
  Text,
  HStack,
  Circle,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

/**
 * StepProgress component - Shows a horizontal step indicator with clickable steps
 * @param {Object} props
 * @param {Array} props.steps - Array of step objects with {id, label, description} properties
 * @param {number} props.activeStep - Index of the current active step
 * @param {Function} props.onStepClick - Function to call when a step is clicked with step index as argument
 * @param {boolean} props.allowNavigation - Whether steps are clickable for navigation
 */
const StepProgress = ({ 
  steps = [], 
  activeStep = 0, 
  onStepClick,
  allowNavigation = true
}) => {
  // Color modes
  const activeBg = useColorModeValue('blue.500', 'blue.300');
  const completedBg = useColorModeValue('green.500', 'green.300');
  const incompleteBg = useColorModeValue('gray.200', 'gray.600');
  const activeText = useColorModeValue('white', 'gray.800');
  const completedText = useColorModeValue('white', 'gray.800');
  const incompleteText = useColorModeValue('gray.500', 'gray.400');
  const lineColor = useColorModeValue('gray.200', 'gray.600');
  
  // Handle step click
  const handleStepClick = (index) => {
    if (allowNavigation && onStepClick) {
      onStepClick(index);
    }
  };
  
  return (
    <Box width="100%" mb={4} aria-label="Progress steps">
      <Flex justify="space-between" align="center" position="relative" px={4} py={2}>
        {/* Connecting Line */}
        <Box
          position="absolute"
          top="50%"
          left="0"
          right="0"
          height="2px"
          bg={lineColor}
          zIndex={0}
        />
        
        {/* Steps */}
        <HStack spacing={0} width="100%" justifyContent="space-between" position="relative" zIndex={1}>
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;
            const isClickable = allowNavigation;
            
            // Determine colors based on step state
            const bgColor = isCompleted 
              ? completedBg 
              : isActive 
                ? activeBg 
                : incompleteBg;
            
            const textColor = isCompleted 
              ? completedText 
              : isActive 
                ? activeText 
                : incompleteText;
                
            return (
              <Tooltip 
                key={step.id} 
                label={step.description || step.label} 
                placement="top" 
                hasArrow
              >
                <Flex 
                  direction="column" 
                  align="center"
                  onClick={() => isClickable && handleStepClick(index)}
                  cursor={isClickable ? "pointer" : "default"}
                  role={isClickable ? "button" : ""}
                  aria-current={isActive ? "step" : undefined}
                  tabIndex={isClickable ? 0 : undefined}
                  width={`${100 / steps.length}%`}
                >
                  {/* Step circle */}
                  <Circle 
                    size="32px"
                    bg={bgColor}
                    color={textColor}
                    fontWeight="bold"
                    boxShadow={isActive ? "md" : "none"}
                    border="2px solid"
                    borderColor={isActive ? "blue.500" : "transparent"}
                    transition="all 0.2s"
                    _hover={{
                      transform: isClickable ? "scale(1.1)" : "none",
                    }}
                  >
                    {isCompleted ? <FaCheck /> : index + 1}
                  </Circle>
                  
                  {/* Step label */}
                  <Text 
                    fontSize="xs"
                    fontWeight={isActive ? "bold" : "medium"}
                    color={isActive ? "gray.700" : "gray.500"}
                    mt={1}
                    textAlign="center"
                    maxW="80px"
                    noOfLines={2}
                  >
                    {step.label}
                  </Text>
                </Flex>
              </Tooltip>
            );
          })}
        </HStack>
      </Flex>
    </Box>
  );
};

export default StepProgress;
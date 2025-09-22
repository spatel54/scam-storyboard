import React from "react";
import { Box, Flex, Text, Progress } from "@chakra-ui/react";
import StepProgress from "./StepProgress";

/**
 * StandardProgressBar component - A consistent progress indicator
 * 
 * @param {Object} props
 * @param {number} props.currentStep - The current step number (1-based)
 * @param {number} props.totalSteps - The total number of steps
 * @param {string} props.stepLabel - The label for the current step
 * @param {Object} props.navigation - Optional navigation object for StepProgress component
 */
const StandardProgressBar = ({ 
  currentStep, 
  totalSteps, 
  stepLabel, 
  navigation = null 
}) => {
  // Calculate progress value as percentage
  const progressValue = (currentStep / totalSteps) * 100;
  
  // If navigation props are passed, use StepProgress component
  if (navigation) {
    return (
      <StepProgress
        steps={navigation.steps}
        activeStep={navigation.currentStepIndex}
        onStepClick={navigation.onStepClick}
        allowNavigation={true}
      />
    );
  }
  
  // Otherwise, use the simple progress bar
  return (
    <Box width="100%" mb={4}>
      <Box 
        as="div" 
        width="100%" 
        height="8px" 
        bg="#E2E8F0" 
        borderRadius="full" 
        overflow="hidden"
      >
        <Box 
          as="div" 
          width={`${progressValue}%`} 
          height="100%" 
          bg="#3182CE"
          borderRadius="full" 
        />
      </Box>
      <Text 
        textAlign="center" 
        mt={2} 
        fontSize="md" 
        color="gray.600"
      >
        Step {currentStep} of {totalSteps}: {stepLabel}
      </Text>
    </Box>
  );
};

export default StandardProgressBar;
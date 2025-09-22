import React from 'react';
import {
  Button,
  Flex,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * StandardNavigation - A consistent navigation component to use across all flow sections
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onNext - Function to call when Next button is clicked
 * @param {Function} props.onPrev - Function to call when Previous button is clicked
 * @param {Function} props.onBack - Alternative back function (e.g., to main flow)
 * @param {boolean} props.showNext - Whether to show the Next button (default: true)
 * @param {boolean} props.showPrev - Whether to show the Previous button (default: true)
 * @param {boolean} props.nextDisabled - Whether the Next button should be disabled
 * @param {boolean} props.prevDisabled - Whether the Previous button should be disabled
 * @param {string} props.nextText - Custom text for the Next button
 * @param {string} props.prevText - Custom text for the Previous button
 */
const StandardNavigation = ({
  onNext,
  onPrev,
  onBack,
  showNext = true,
  showPrev = true,
  nextDisabled = false,
  prevDisabled = false,
  nextText = "Next",
  prevText = "Previous"
}) => {
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const bgColor = useColorModeValue("gray.50", "gray.700");
  
  return (
    <Flex 
      borderTop="1px" 
      borderColor={borderColor}
      justifyContent="space-between" 
      bg={bgColor}
      py={4}
      px={6}
      width="100%"
    >
      {showPrev && (
        <Button 
          onClick={onPrev || onBack} 
          leftIcon={<Icon as={FaChevronLeft} />}
          variant="outline"
          colorScheme="blue"
          size="lg"
          height="44px"
          minW="120px"
          isDisabled={prevDisabled}
        >
          {prevText}
        </Button>
      )}
      
      {/* Empty flex item when only showing Next button */}
      {showNext && !showPrev && <div />}
      
      {showNext && (
        <Button
          onClick={onNext}
          rightIcon={<Icon as={FaChevronRight} />}
          colorScheme="blue"
          size="lg"
          height="44px"
          minW="120px"
          ml={3}
          isDisabled={nextDisabled}
        >
          {nextText}
        </Button>
      )}
      
      {/* Empty flex item when only showing Previous button */}
      {!showNext && showPrev && <div />}
    </Flex>
  );
};

export default StandardNavigation;
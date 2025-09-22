import React, { useState } from 'react';
import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  AspectRatio,
  Flex,
  Tag,
  useDisclosure,
  IconButton
} from '@chakra-ui/react';
import { FiPlay } from 'react-icons/fi';

const VideoThumbnail = ({ title, description, videoUrl, thumbnailUrl, tags = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Box 
        position="relative" 
        borderRadius="md" 
        overflow="hidden"
        borderWidth="1px"
        borderColor="gray.200"
        bg="white"
        height="100%"
        boxShadow="sm"
        _hover={{ 
          boxShadow: "md",
          transform: "translateY(-2px)"
        }}
        transition="all 0.2s"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onOpen}
        cursor="pointer"
      >
        {/* Thumbnail */}
        <AspectRatio ratio={16 / 9} width="100%">
          <Box 
            backgroundImage={`url(${thumbnailUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            width="100%"
            height="100%"
            transition="all 0.3s"
            _hover={{ transform: "scale(1.05)" }}
          >
            {/* Play button overlay */}
            <Flex
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg={isHovered ? "blackAlpha.400" : "blackAlpha.300"}
              justifyContent="center"
              alignItems="center"
              transition="all 0.3s"
            >
              <IconButton
                icon={<FiPlay />}
                aria-label="Play video"
                fontSize="md"
                size="md"
                colorScheme="blue"
                variant="solid"
                isRound
                opacity={isHovered ? 1 : 0.8}
                transform={isHovered ? "scale(1.1)" : "scale(1)"}
                transition="all 0.3s"
                onClick={onOpen}
              />
            </Flex>
          </Box>
        </AspectRatio>

        {/* Video info */}
        <Box p={1} bg="white">
          <Text fontWeight="bold" fontSize="xs" mb={0.5} noOfLines={1}>{title}</Text>
          <Text fontSize="2xs" color="gray.600" mb={0.5} noOfLines={1}>{description}</Text>
          
          {/* Tags */}
          <Flex flexWrap="wrap" gap={0.5} mt={0.5}>
            {tags.slice(0, 2).map((tag, index) => (
              <Tag
                key={index}
                size="sm"
                fontSize="2xs"
                py={0.5}
                height="auto"
                colorScheme={
                  index % 4 === 0 ? "blue" : 
                  index % 4 === 1 ? "green" : 
                  index % 4 === 2 ? "purple" : 
                  "orange"
                }
                borderRadius="full"
              >
                {tag}
              </Tag>
            ))}
            {tags.length > 3 && (
              <Tag size="sm" fontSize="2xs" py={0.5} height="auto" colorScheme="gray" borderRadius="full">
                +{tags.length - 3} more
              </Tag>
            )}
          </Flex>
        </Box>
      </Box>

      {/* Video Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="md">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <AspectRatio ratio={16 / 9} mb={4}>
              <iframe
                title={title}
                src={videoUrl}
                allowFullScreen
              />
            </AspectRatio>
            <Text mb={2}>{description}</Text>
            <Flex flexWrap="wrap" gap={1} mt={3}>
              {tags.map((tag, index) => (
                <Tag
                  key={index}
                  size="sm"
                  colorScheme={
                    index % 4 === 0 ? "blue" : 
                    index % 4 === 1 ? "green" : 
                    index % 4 === 2 ? "purple" : 
                    "orange"
                  }
                  borderRadius="full"
                >
                  {tag}
                </Tag>
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoThumbnail;
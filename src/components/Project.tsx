import { FC } from "react";
import { ProjectData } from "../types";
import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { colors, getColorWithOpacity } from "../libs/constants/color";

const Project: FC<ProjectData> = ({ image, company, name, description }) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="lg"
      border="1px"
      borderColor={getColorWithOpacity(colors.cyber.blue, "20")}
      bg={colors.cyber.black}
      p={4}
      _hover={{
        borderColor: colors.cyber.red,
        transition: "all 0.3s",
      }}
      role="group"
    >
      {/* Glow Effect */}
      <Box
        position="absolute"
        inset={0}
        bg={getColorWithOpacity(colors.cyber.red, "40")}
        opacity={0}
        _groupHover={{ opacity: 0.05 }}
        transition="opacity 0.3s"
      />

      {/* Content */}
      <Box position="relative" zIndex={10}>
        {/* Image Container */}
        <Box
          position="relative"
          height="48"
          mb={4}
          overflow="hidden"
          borderRadius="md"
        >
          <Image
            src={image}
            alt={name}
            width="100%"
            height="100%"
            objectFit="cover"
            _groupHover={{ transform: "scale(1.05)" }}
            transition="transform 0.3s"
          />
          {/* Image Overlay */}
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, cyber.black, transparent)"
            opacity={0}
            _groupHover={{ opacity: 1 }}
            transition="opacity 0.3s"
          />
        </Box>

        {/* Text Content */}
        <VStack gap="2" align="stretch">
          <HStack justify="space-between">
            <Text color={colors.cyber.yellow} fontSize="sm" fontFamily="mono">
              {company}
            </Text>
          </HStack>

          <Text
            color={colors.cyber.white}
            fontSize="xl"
            fontFamily="mono"
            _groupHover={{ color: colors.cyber.red }}
            transition="color 0.3s"
          >
            {name}
          </Text>

          <Text
            color={getColorWithOpacity(colors.cyber.white, "80")}
            fontSize="sm"
            fontFamily="mono"
            lineHeight="relaxed"
          >
            {description}
          </Text>
        </VStack>
      </Box>

      {/* Border Animation */}
      <Box
        position="absolute"
        inset={0}
        border="1px"
        borderColor={getColorWithOpacity(colors.cyber.blue, "20")}
        _groupHover={{ borderColor: colors.cyber.red }}
        transition="border-color 0.3s"
      />
    </Box>
  );
};

export default Project;

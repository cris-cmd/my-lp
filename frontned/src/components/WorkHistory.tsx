import { FC } from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { colors } from "../libs/constants/color";

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

const workHistory: WorkExperience[] = [
  {
    title: "Full Stack Lead Engineer",
    company: "Verne Technologies Inc.",
    location: "Tokyo, Japan",
    period: "November 2024 - present",
    achievements: [
      "Led Bloomup (SNS platform) development, securing $150K contract and scaling to 1,000+ users with 99.9% uptime",
      "Developed AI helpdesk app reducing support workload by 50% using OpenAI API and vector databases",
      "Achieved 100% on-time delivery and 95% client retention as Sales Engineer",
      "Mentored 5+ developers, improving team efficiency by 35% through study groups",
      "Implemented CI/CD and automated testing, reducing deployment time by 60%",
    ],
  },
  {
    title: "Staff Software Engineer",
    company: "Optimind Inc.",
    location: "Tokyo, Japan",
    period: "October 2023 - October 2024",
    achievements: [
      "Built master data service handling 500K+ weekly records for major clients with 99.9% uptime",
      "Designed authentication system integrating 5+ external platforms using Nginx",
      "Optimized cloud infrastructure for 100K+ users, reducing costs by 20%",
      "Improved system performance by 50% and deployment time by 60%",
      "Processed 8M+ monthly API requests with 30% faster response times",
    ],
  },
  {
    title: "Staff Software Engineer",
    company: "Sapeet Inc.",
    location: "Tokyo, Japan",
    period: "October 2021 - September 2023",
    achievements: [
      "Led EMR system development for 100+ clinics, improving patient satisfaction by 30%",
      "Managed 5-engineer team using Scrum, increasing productivity by 96%",
      "Delivered 5+ products on time with zero missed deadlines",
      "Reduced technical debt by 60% using Clean Architecture and Atomic Design",
      "Improved project estimation accuracy by 40% and team velocity by 35%",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "KonbaSoft Inc.",
    location: "Tokyo, Japan",
    period: "March 2020 - September 2021",
    achievements: [
      "Led HTML to React migration, modernizing UI/UX and improving maintainability",
      "Developed full-stack features using React, Redux, Node.js, and Redis",
      "Built responsive UI optimized for iPad and Apple Pencil",
      "Implemented chat functionality with audio recording and messaging",
      "Created user profile system with customization features",
    ],
  },
];

const WorkHistory: FC = () => {
  return (
    <VStack align="stretch" gap={12} pl={4} mt={4}>
      {workHistory.map((job, index) => (
        <Box key={index} position="relative" minH="200px">
          {/* Timeline line */}
          <Box
            position="absolute"
            left="-4px"
            top="0"
            bottom="0"
            width="1px"
            bg={colors.cyber.blue}
            opacity={0.3}
          />

          {/* Branch line */}
          <Box
            position="absolute"
            left="-4px"
            top="50%"
            width="20px"
            height="1px"
            bg={colors.cyber.blue}
            opacity={0.3}
          />

          {/* Job content */}
          <Box ml={8}>
            {/* Header */}
            <Box mb={4}>
              <Text
                color={colors.cyber.yellow}
                fontFamily="'Press Start 2P', monospace"
                fontSize="xs"
                mb={1}
              >
                {job.title}
              </Text>
              <HStack justify="space-between" align="center">
                <Text
                  color={colors.cyber.white}
                  fontFamily="'Press Start 2P', monospace"
                  fontSize="xs"
                >
                  {job.company}
                </Text>
                <Text
                  color={colors.cyber.blue}
                  fontFamily="'Press Start 2P', monospace"
                  fontSize="xs"
                >
                  {job.period}
                </Text>
              </HStack>
              <Text
                color={colors.cyber.white}
                fontFamily="'Press Start 2P', monospace"
                fontSize="xs"
                opacity={0.8}
              >
                {job.location}
              </Text>
            </Box>

            {/* Achievements */}
            <VStack align="stretch" gap={3}>
              {job.achievements.map((achievement, achievementIndex) => (
                <HStack key={achievementIndex} gap={2} align="start">
                  <Text
                    color={colors.cyber.green}
                    fontFamily="'Press Start 2P', monospace"
                    fontSize="xs"
                    mt={1}
                  >
                    •
                  </Text>
                  <Text
                    color={colors.cyber.white}
                    fontFamily="'Press Start 2P', monospace"
                    fontSize="xs"
                    opacity={0.9}
                  >
                    {achievement}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </Box>
      ))}
    </VStack>
  );
};

export default WorkHistory;

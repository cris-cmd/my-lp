import { FC, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link as ChakraLink,
  Stack,
  Text,
  VStack,
  useDisclosure,
  SimpleGrid,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdWork } from "react-icons/md";
import { BsTerminal } from "react-icons/bs";
import Terminal from "./Terminal";
import { colors } from "../libs/constants/color";

const MainPage: FC = () => {
  const { open, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <Box minH="100vh" bg={colors.cyber.black} color={colors.cyber.white}>
      {/* Header */}
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={10}
        bg={colors.cyber.black}
        borderBottom="1px"
        borderColor={colors.cyber.blue}
        opacity={0.9}
        backdropFilter="blur(10px)"
      >
        <Container maxW="container.xl" py={4}>
          <Flex justify="space-between" align="center">
            <Heading
              size="md"
              color={colors.cyber.yellow}
              fontFamily="'Press Start 2P', monospace"
            >
              TAO
            </Heading>
            <Button
              onClick={onOpen}
              variant="outline"
              colorScheme="blue"
              size="sm"
              fontFamily="'Press Start 2P', monospace"
            >
              <Icon as={BsTerminal} mr={2} />
              Open Terminal
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack gap={12} align="stretch">
          {/* Hero Section */}
          <Box>
            <Heading
              size="2xl"
              mb={4}
              color={colors.cyber.yellow}
              fontFamily="'Press Start 2P', monospace"
            >
              Tao Christopher Takahashi
            </Heading>
            <Text
              fontSize="xl"
              mb={6}
              color={colors.cyber.white}
              fontFamily="'Press Start 2P', monospace"
            >
              Full Stack Lead Engineer specializing in scalable applications and
              AI solutions
            </Text>
            <HStack gap={4} mb={8}>
              <Badge colorScheme="blue" fontSize="sm" p={2}>
                <HStack>
                  <Icon as={MdWork} />
                  <Text>Full Stack Development</Text>
                </HStack>
              </Badge>
              <Badge colorScheme="green" fontSize="sm" p={2}>
                <HStack>
                  <Icon as={MdLocationOn} />
                  <Text>Tokyo, Japan</Text>
                </HStack>
              </Badge>
              <Badge colorScheme="green" fontSize="sm" p={2}>
                <HStack>
                  <Icon as={MdLocationOn} />
                  <Text>KingGeorge, VA</Text>
                </HStack>
              </Badge>
            </HStack>
            <Button
              onClick={onOpen}
              colorScheme="blue"
              size="lg"
              fontFamily="'Press Start 2P', monospace"
            >
              <Icon as={BsTerminal} mr={2} />
              Explore My Work
            </Button>
          </Box>

          <Box as="hr" borderColor={colors.cyber.blue} opacity={0.3} my={8} />

          {/* About Section */}
          <Box>
            <Heading
              size="lg"
              mb={4}
              color={colors.cyber.yellow}
              fontFamily="'Press Start 2P', monospace"
            >
              About Me
            </Heading>
            <Text
              fontSize="md"
              mb={4}
              color={colors.cyber.white}
              fontFamily="'Press Start 2P', monospace"
              opacity={0.9}
            >
              I'm a passionate Full Stack Lead Engineer with a strong focus on
              building scalable applications and AI-powered solutions. With
              years of experience in the tech industry, I've led multiple teams
              in developing innovative solutions that have made significant
              impacts on business operations.
            </Text>
            <Text
              fontSize="md"
              color={colors.cyber.white}
              fontFamily="'Press Start 2P', monospace"
              opacity={0.9}
            >
              My expertise lies in creating robust, maintainable systems that
              can handle high loads while ensuring excellent user experience.
              I'm particularly interested in AI and machine learning
              applications, and I've successfully implemented various AI
              solutions that have significantly improved business processes.
            </Text>
          </Box>

          <Box as="hr" borderColor={colors.cyber.blue} opacity={0.3} my={8} />

          {/* Tech Stack Section */}
          <Box>
            <Heading
              size="lg"
              mb={6}
              color={colors.cyber.yellow}
              fontFamily="'Press Start 2P', monospace"
            >
              Tech Stack
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={4}>
              {[
                "React",
                "TypeScript",
                "Node.js",
                "GCP",
                "AWS",
                "Docker",
                "Kubernetes",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "GraphQL",
                "REST APIs",
                "CI/CD",
                "Git",
                "Agile",
                "LLM",
              ].map((tech) => (
                <Badge
                  key={tech}
                  colorScheme="blue"
                  fontSize="sm"
                  p={2}
                  textAlign="center"
                >
                  {tech}
                </Badge>
              ))}
            </SimpleGrid>
          </Box>

          <Box as="hr" borderColor={colors.cyber.blue} opacity={0.3} my={8} />

          {/* Contact Section */}
          <Box>
            <Heading
              size="lg"
              mb={6}
              color={colors.cyber.yellow}
              fontFamily="'Press Start 2P', monospace"
            >
              Get in Touch
            </Heading>
            <Stack gap={4}>
              <HStack>
                <Icon as={MdEmail} color={colors.cyber.blue} />
                <ChakraLink
                  href="mailto:taoctakahashi@gmail.com"
                  color={colors.cyber.white}
                  fontFamily="'Press Start 2P', monospace"
                  fontSize="sm"
                  _hover={{ color: colors.cyber.blue }}
                >
                  taoctakahashi@gmail.com
                </ChakraLink>
              </HStack>
              <HStack>
                <Icon as={FaGithub} color={colors.cyber.blue} />
                <ChakraLink
                  href="https://github.com/cris-cmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={colors.cyber.white}
                  fontFamily="'Press Start 2P', monospace"
                  fontSize="sm"
                  _hover={{ color: colors.cyber.blue }}
                >
                  github.com/cris-cmd
                </ChakraLink>
              </HStack>
              <HStack>
                <Icon as={FaLinkedin} color={colors.cyber.blue} />
                <ChakraLink
                  href="https://linkedin.com/in/tao-c-takahashi"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={colors.cyber.white}
                  fontFamily="'Press Start 2P', monospace"
                  fontSize="sm"
                  _hover={{ color: colors.cyber.blue }}
                >
                  linkedin.com/in/tao-c-takahashi
                </ChakraLink>
              </HStack>
              <HStack>
                <Icon as={FaDev} color={colors.cyber.blue} />
                <ChakraLink
                  href="https://dev.to/criscmd"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={colors.cyber.white}
                  fontFamily="'Press Start 2P', monospace"
                  fontSize="sm"
                  _hover={{ color: colors.cyber.blue }}
                >
                  dev.to/criscmd
                </ChakraLink>
              </HStack>
            </Stack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box
        as="footer"
        py={6}
        borderTop="1px"
        borderColor={colors.cyber.blue}
        opacity={0.8}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
            <Text
              color={colors.cyber.white}
              fontFamily="'Press Start 2P', monospace"
              fontSize="xs"
            >
              © {new Date().getFullYear()} Tao Christopher Takahashi. All rights
              reserved.
            </Text>
            <Stack direction="row" gap={4}>
              <ChakraLink
                href="https://github.com/cris-cmd"
                target="_blank"
                rel="noopener noreferrer"
                color={colors.cyber.white}
                _hover={{ color: colors.cyber.blue }}
              >
                <Icon as={FaGithub} boxSize={5} />
              </ChakraLink>
              <ChakraLink
                href="https://linkedin.com/in/tao-c-takahashi"
                target="_blank"
                rel="noopener noreferrer"
                color={colors.cyber.white}
                _hover={{ color: colors.cyber.blue }}
              >
                <Icon as={FaLinkedin} boxSize={5} />
              </ChakraLink>
              <ChakraLink
                href="https://dev.to/criscmd"
                target="_blank"
                rel="noopener noreferrer"
                color={colors.cyber.white}
                _hover={{ color: colors.cyber.blue }}
              >
                <Icon as={FaDev} boxSize={5} />
              </ChakraLink>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Terminal Modal */}
      <Terminal isOpen={open} onClose={onClose} />
    </Box>
  );
};

export default MainPage;

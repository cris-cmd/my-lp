import { FC, useState, useRef, useEffect } from "react";
import { Box, IconButton, Input, Text, VStack, HStack } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { colors } from "../libs/constants/color";
import Project from "./Project";
import WorkHistory from "./WorkHistory";

export interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode[];
  status: "success" | "error";
}

interface Project {
  id: number;
  name: string;
  company: string;
  description: string;
  image: string;
  website: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Bloomup",
    company: "Verne Technologies Inc.",
    description:
      "Led as a Sales Engineer and Full-Stack Engineer, driving client negotiations and securing a $100K contract. Acted as both client-facing and technical lead, from gathering requirements to executing full-stack development. Designed a flexible architecture using Firebase, Firestore, and GCP for rapid deployment and iterations. Provided ongoing consultation for product-market fit and growth optimization.",
    image: "https://placehold.co/600x400/1a1a1a/00ff00/png?text=Bloomup",
    website: "https://gold676056.studio.site/",
  },
  {
    id: 2,
    name: "Loogia Master Data",
    company: "Optimind Inc.",
    description:
      "Developed a high-performance logistics data service handling hundreds of thousands of records, integrated with large-scale logistics operations. Built from scratch with one colleague, ensuring high stability and scalability for major clients including Japan Post, Lawson, and Seven Eleven. Designed robust authentication system and distributed data pipeline for seamless integration with other logistics services.",
    image: "https://placehold.co/600x400/1a1a1a/00ff00/png?text=Loogia",
    website: "https://loogia.jp/news/loogiasolution1/",
  },
  {
    id: 3,
    name: "Karte Cloud",
    company: "Sapeet Inc.",
    description:
      "Led a team to build a fully customizable EMR (Electronic Medical Record) system for hospitals, featuring dynamic customization of medical records and hearing sheets. Implemented a block-node-based UI/UX system for drag-and-drop form design. Ensured data consistency with version control system. Utilized React-JSON-Schema for dynamic form rendering and storage. Managed sprint planning and technical execution.",
    image: "https://placehold.co/600x400/1a1a1a/00ff00/png?text=Karte+Cloud",
    website: "https://kartie-cloud.jp/karte/",
  },
];

const Terminal: FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: [
        "Welcome to TAO's Terminal",
        "Type 'help' to see available commands",
        "",
      ],
      status: "success",
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [awaitingSelection, setAwaitingSelection] = useState<{
    type: "projects" | "links";
    options: string[];
  } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      terminalRef.current &&
      !terminalRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollToBottom = () => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop =
        terminalContentRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [commandHistory]);

  const socialLinks = [
    "GitHub: github.com/cris-cmd",
    "LinkedIn: linkedin.com/in/tao-c-takahashi",
    "dev.to: dev.to/cris-cmd",
  ];

  const handleCommand = (command: string) => {
    setHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);

    let output: React.ReactNode[] = [];
    let status: "success" | "error" = "success";

    if (awaitingSelection) {
      const selection = parseInt(command);
      if (
        isNaN(selection) ||
        selection < 1 ||
        selection > awaitingSelection.options.length
      ) {
        output = ["Invalid selection. Please try again."];
        status = "error";
      } else {
        const selectedProject = projects[selection - 1];
        switch (awaitingSelection.type) {
          case "projects":
            output = [
              "Selected Project:",
              <Box key="selected-project" mt={4}>
                <Project {...selectedProject} />
                <Text
                  color={colors.cyber.blue}
                  fontFamily="'Press Start 2P', monospace"
                  fontSize="xs"
                  mt={2}
                >
                  Project Link:{" "}
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: colors.cyber.blue,
                      textDecoration: "underline",
                    }}
                  >
                    {selectedProject.website}
                  </a>
                </Text>
              </Box>,
            ];
            break;
          case "links":
            output = [
              "Selected Link:",
              `  ${awaitingSelection.options[selection - 1]}`,
            ];
            break;
        }
        setAwaitingSelection(null);
      }
    } else {
      switch (command.toLowerCase()) {
        case "exit":
          onClose();
          break;
        case "clear":
          setCommandHistory([]);
          break;
        case "help":
          output = [
            "Available commands:",
            "  help     - Show this help message",
            "  clear    - Clear the terminal",
            "  exit     - Close the terminal",
            "  about    - Display information about me",
            "  projects - List my projects",
            "  links    - Show my social links",
            "  work     - Display my work history",
          ];
          break;
        case "about":
          output = [
            "Hey, I'm a software engineer who loves building solid, scalable apps that actually work well and last.",
            "I've been doing full-stack development for 5+ years. Mainly using React, TypeScript, and Node.js.",
            "I'm also big on cloud stuff, so I like making sure everything runs smooth and scales when it needs to.",
          ];
          break;
        case "projects":
          output = [
            "Select a project by number:",
            ...projects.map(
              (project, index) =>
                `${index + 1}. ${project.name} (${project.company})`
            ),
          ];
          setAwaitingSelection({
            type: "projects",
            options: projects.map((p) => p.name),
          });
          break;
        case "links":
          output = [
            "Select a link by number:",
            ...socialLinks.map((link, index) => `${index + 1}. ${link}`),
          ];
          setAwaitingSelection({
            type: "links",
            options: socialLinks,
          });
          break;
        case "work":
          output = [<WorkHistory key="work-history" />];
          break;
        default:
          output = [`Command not found: ${command}`];
          status = "error";
      }
    }

    setCommandHistory((prev) => [
      ...prev,
      {
        command,
        output,
        status,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        handleCommand(input.trim());
        setInput("");
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="rgba(0, 0, 0, 0.7)"
      zIndex={1000}
      display={isOpen ? "block" : "none"}
    >
      <Box
        ref={terminalRef}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="90%"
        maxWidth="1000px"
        height="90vh"
        bg={colors.cyber.black}
        border="1px"
        borderColor={colors.cyber.blue}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="0 0 20px rgba(0, 240, 255, 0.2)"
      >
        {/* Terminal Header */}
        <Box
          p={4}
          borderBottom="1px"
          borderColor={colors.cyber.blue}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            color={colors.cyber.yellow}
            fontSize="sm"
            fontFamily="'Press Start 2P', monospace"
          >
            TERMINAL
          </Text>
          <IconButton
            aria-label="Close terminal"
            size="sm"
            variant="ghost"
            color={colors.cyber.red}
            onClick={onClose}
            _hover={{ bg: `${colors.cyber.red}20` }}
          >
            <IoClose />
          </IconButton>
        </Box>

        {/* Terminal Content */}
        <Box
          ref={terminalContentRef}
          p={4}
          height="calc(100% - 60px)"
          overflowY="auto"
        >
          <VStack gap="2" align="stretch">
            {commandHistory.map((entry, index) => (
              <Box key={index}>
                <HStack gap={2}>
                  <Text
                    color={
                      entry.status === "success"
                        ? colors.cyber.green
                        : colors.cyber.red
                    }
                    fontFamily="'Press Start 2P', monospace"
                    fontSize="xs"
                  >
                    {entry.status === "success" ? "✓" : "✗"}
                  </Text>
                  <Text
                    color={colors.cyber.white}
                    fontFamily="'Press Start 2P', monospace"
                    fontSize="xs"
                  >
                    {entry.command}
                  </Text>
                </HStack>
                {entry.output.map((item, outputIndex) =>
                  typeof item === "string" ? (
                    <Text
                      key={outputIndex}
                      color={colors.cyber.white}
                      fontFamily="'Press Start 2P', monospace"
                      fontSize="xs"
                      ml={4}
                    >
                      {item}
                    </Text>
                  ) : (
                    <Box key={outputIndex} ml={4}>
                      {item}
                    </Box>
                  )
                )}
              </Box>
            ))}
            <HStack>
              <Text
                color={colors.cyber.green}
                fontFamily="'Press Start 2P', monospace"
                fontSize="xs"
              >
                {"-> ~"}
              </Text>
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                color={colors.cyber.white}
                fontFamily="'Press Start 2P', monospace"
                fontSize="xs"
                bg="transparent"
                border="none"
                outline="none"
                flex={1}
                autoFocus
              />
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Terminal;

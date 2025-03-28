import React, { useState, useEffect, useRef } from "react";
import { TerminalOutput } from "../types";
import { PROJECTS, SOCIAL_LINKS, TERMINAL_COMMANDS } from "../constants";
import Project from "../components/Project";

export const useTerminal = (onClose: () => void) => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<TerminalOutput[]>([]);
  const [isConnecting] = useState(true);
  const [connectingText] = useState("");
  const [progress] = useState(0);
  const [welcomeText, setWelcomeText] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [output]);

  // Welcome text effect
  useEffect(() => {
    if (!showWelcome) return;

    const welcomeMessages = [
      "Welcome to my terminal portfolio",
      "Type 'help' to see available commands",
      "Type 'exit' to close the terminal",
    ];

    let currentIndex = 0;
    let currentChar = 0;
    let currentText = "";

    const typeInterval = setInterval(() => {
      if (currentIndex < welcomeMessages.length) {
        if (currentChar < welcomeMessages[currentIndex].length) {
          currentText += welcomeMessages[currentIndex][currentChar];
          setWelcomeText(currentText);
          currentChar++;
        } else {
          currentText += "\n";
          setWelcomeText(currentText);
          currentIndex++;
          currentChar = 0;
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [showWelcome]);

  const addOutput = (
    content: string | React.ReactNode,
    type: TerminalOutput["type"] = "text"
  ) => {
    setOutput((prev) => [...prev, { type, content, timestamp: Date.now() }]);
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && command.trim()) {
      const cmd = command.trim().toLowerCase();
      setCommand("");
      addOutput(`~ ${cmd}`);

      switch (cmd) {
        case "help":
          setTimeout(() => {
            addOutput(
              "Available commands:\n" +
                Object.entries(TERMINAL_COMMANDS)
                  .map(([cmd, desc]) => `  ${cmd}     - ${desc}`)
                  .join("\n")
            );
          }, 500);
          break;

        case "clear":
          setOutput([]);
          break;

        case "exit":
          onClose();
          break;

        case "ls":
          setTimeout(() => {
            addOutput(
              "Loading directory contents...\n\n" +
                "DIRECTORIES:\n" +
                "  projects/    - View my projects\n" +
                "  about/       - Learn more about me\n" +
                "  links/       - View my social links"
            );
          }, 500);
          break;

        case "pwd":
          setTimeout(() => {
            addOutput("~");
          }, 500);
          break;

        case "whoami":
          setTimeout(() => {
            addOutput("cris-cmd");
          }, 500);
          break;

        case "about":
          setTimeout(() => {
            const aboutText = [
              "I'm a bilingual developer from Japan.",
              "I've lived between cultures my whole life.",
              "",
              "I started coding at 12.",
              "Now I'm a Lead Engineer at an AI startup.",
              "I mentor junior devs and lead development.",
              "",
              "Tech stack: React, NestJS, PostgreSQL, Redis, Firebase, GCP, Terraform.",
              "I focus on clean code and intuitive design.",
            ];

            let currentIndex = 0;
            let currentChar = 0;
            let currentText = "";

            const typeInterval = setInterval(() => {
              if (currentIndex < aboutText.length) {
                if (currentChar < aboutText[currentIndex].length) {
                  currentText += aboutText[currentIndex][currentChar];
                  addOutput(currentText);
                  currentChar++;
                } else {
                  currentText += "\n";
                  addOutput(currentText);
                  currentIndex++;
                  currentChar = 0;
                }
              } else {
                clearInterval(typeInterval);
              }
            }, 30);
          }, 500);
          break;

        case "projects":
          setTimeout(() => {
            const projectsText = [
              "Loading project database...",
              "",
              "PROJECTS:",
              ...PROJECTS.map(
                (p, i) =>
                  `  [${i + 1}] ${p.name}\n      Company: ${
                    p.company
                  }\n      Description: ${p.description.split(".")[0]}`
              ),
              "",
              "Type 'project <number>' for more details",
            ];

            let currentIndex = 0;
            let currentChar = 0;
            let currentText = "";

            const typeInterval = setInterval(() => {
              if (currentIndex < projectsText.length) {
                if (currentChar < projectsText[currentIndex].length) {
                  currentText += projectsText[currentIndex][currentChar];
                  addOutput(currentText);
                  currentChar++;
                } else {
                  currentText += "\n";
                  addOutput(currentText);
                  currentIndex++;
                  currentChar = 0;
                }
              } else {
                clearInterval(typeInterval);
              }
            }, 30);
          }, 500);
          break;

        case "links":
          setTimeout(() => {
            const linksText = [
              "Loading social links...",
              "",
              "SOCIAL LINKS:",
              ...SOCIAL_LINKS.map(
                (l, i) =>
                  `  [${i + 1}] ${l.name}\n      URL: ${
                    l.url
                  }\n      Description: ${l.description}`
              ),
              "",
              "Type 'open <number>' to open a link in your browser",
            ];

            let currentIndex = 0;
            let currentChar = 0;
            let currentText = "";

            const typeInterval = setInterval(() => {
              if (currentIndex < linksText.length) {
                if (currentChar < linksText[currentIndex].length) {
                  currentText += linksText[currentIndex][currentChar];
                  addOutput(currentText);
                  currentChar++;
                } else {
                  currentText += "\n";
                  addOutput(currentText);
                  currentIndex++;
                  currentChar = 0;
                }
              } else {
                clearInterval(typeInterval);
              }
            }, 30);
          }, 500);
          break;

        default:
          if (cmd.startsWith("project ")) {
            const projectNumber = parseInt(cmd.split(" ")[1]);
            const project = PROJECTS.find((p) => p.id === projectNumber);

            if (project) {
              setTimeout(() => {
                addOutput("Loading project details...\n", "text");
                addOutput(
                  React.createElement(Project, { key: project.id, ...project }),
                  "project"
                );
              }, 500);
            } else {
              setTimeout(() => {
                addOutput("Project not found");
              }, 500);
            }
          } else if (cmd.startsWith("open ")) {
            const linkNumber = parseInt(cmd.split(" ")[1]);
            const link = SOCIAL_LINKS.find((l) => l.id === linkNumber);

            if (link) {
              window.open(link.url, "_blank");
              setTimeout(() => {
                addOutput(`Opening ${link.name}...`);
              }, 500);
            } else {
              setTimeout(() => {
                addOutput("Invalid link number");
              }, 500);
            }
          } else {
            setTimeout(() => {
              addOutput(`Command not found: ${cmd}`);
            }, 500);
          }
      }
    }
  };

  return {
    command,
    setCommand,
    output,
    isConnecting,
    connectingText,
    progress,
    welcomeText,
    showWelcome,
    setShowWelcome,
    contentRef,
    handleCommand,
  };
};

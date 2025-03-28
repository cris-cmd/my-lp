import { ProjectData, SocialLink } from "../types";

export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%2300F0FF'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='24' fill='%23050A0E'%3EProject 1%3C/text%3E%3C/svg%3E",
    company: "TechCorp",
    name: "AI-Powered Analytics Platform",
    description:
      "Built a real-time analytics platform using React, Node.js, and TensorFlow. Implemented advanced data visualization and predictive analytics features.",
  },
  {
    id: 2,
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%2300F0FF'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='24' fill='%23050A0E'%3EProject 2%3C/text%3E%3C/svg%3E",
    company: "ChainTech",
    name: "Blockchain Supply Chain",
    description:
      "Developed a blockchain-based supply chain tracking system with smart contracts. Enhanced transparency and reduced fraud in global logistics.",
  },
  {
    id: 3,
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%2300F0FF'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='24' fill='%23050A0E'%3EProject 3%3C/text%3E%3C/svg%3E",
    company: "CloudScale",
    name: "Cloud Migration Tool",
    description:
      "Created an automated tool for migrating legacy systems to cloud infrastructure. Reduced migration time by 60% and improved system reliability.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/cris-cmd",
    description: "My code repository and contributions",
  },
  {
    id: 2,
    name: "DEV.to",
    url: "https://dev.to/criscmd",
    description: "My technical blog and articles",
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tao-c-takahashi/",
    description: "My professional network and experience",
  },
];

export const TERMINAL_COMMANDS = {
  help: "Show this help message",
  clear: "Clear the terminal screen",
  exit: "Close the terminal",
  ls: "List directory contents",
  pwd: "Show current directory",
  whoami: "Display current user",
  about: "Learn more about me",
  projects: "View my projects",
  links: "View my social links",
};

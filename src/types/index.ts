export interface ProjectData {
  id: number;
  image: string;
  company: string;
  name: string;
  description: string;
}

export interface TerminalCommand {
  name: string;
  description: string;
  execute: (args?: string[]) => void;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  description: string;
}

export interface TerminalOutput {
  type: "text" | "project" | "link";
  content: string | React.ReactNode;
  timestamp?: number;
}

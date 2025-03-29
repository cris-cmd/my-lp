import { ColorModeProvider } from "./color-mode";
import { ChakraProvider, SystemContext } from "@chakra-ui/react";

interface ProviderProps {
  children: React.ReactNode;
  value: SystemContext;
}

export function Provider({ children, value }: ProviderProps) {
  return (
    <ChakraProvider value={value}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
}

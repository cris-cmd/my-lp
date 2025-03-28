import { useState } from "react";
import { createSystem, defaultConfig } from "@chakra-ui/react";
import MainPage from "./components/MainPage";
import Terminal from "./components/Terminal";
import { colors } from "./libs/constants/color";
import { Provider } from "./components/ui/provider";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        cyber: {
          black: { value: colors.cyber.black },
          white: { value: colors.cyber.white },
          blue: { value: colors.cyber.blue },
          red: { value: colors.cyber.red },
          yellow: { value: colors.cyber.yellow },
          green: { value: colors.cyber.green },
          purple: { value: colors.cyber.purple },
          gray: {
            50: { value: colors.cyber.gray[50] },
            100: { value: colors.cyber.gray[100] },
            200: { value: colors.cyber.gray[200] },
            300: { value: colors.cyber.gray[300] },
            400: { value: colors.cyber.gray[400] },
            500: { value: colors.cyber.gray[500] },
            600: { value: colors.cyber.gray[600] },
            700: { value: colors.cyber.gray[700] },
            800: { value: colors.cyber.gray[800] },
            900: { value: colors.cyber.gray[900] },
          },
        },
      },
      fonts: {
        heading: { value: `'JetBrains Mono', monospace` },
        body: { value: `'JetBrains Mono', monospace` },
      },
    },
  },
});

function App() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <Provider value={system}>
      <MainPage onOpenTerminal={() => setShowTerminal(true)} />
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </Provider>
  );
}

export default App;

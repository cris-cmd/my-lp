export const colors = {
  cyber: {
    black: "#050A0E",
    white: "#FAFAFA",
    blue: "#00F0FF",
    red: "#FF003C",
    yellow: "#FCEE09",
    green: "#00FF00",
    purple: "#9D00FF",
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
  },
} as const;

type OpacityLevel = "0" | "20" | "40" | "60" | "80" | "100";

export const opacity: Record<OpacityLevel, string> = {
  "0": "00",
  "20": "33",
  "40": "66",
  "60": "99",
  "80": "CC",
  "100": "FF",
};

export const getColorWithOpacity = (
  color: string,
  opacityLevel: OpacityLevel
) => {
  return `${color}${opacity[opacityLevel]}`;
};

export const gradients = {
  overlay: `linear(to-t, ${colors.cyber.black}, transparent)`,
  glow: `radial(circle at center, ${getColorWithOpacity(
    colors.cyber.red,
    "40"
  )}, transparent)`,
} as const;

export const shadows = {
  glow: `0 0 20px ${getColorWithOpacity(colors.cyber.red, "40")}`,
} as const;

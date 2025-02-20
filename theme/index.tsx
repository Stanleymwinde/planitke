// Import necessary functions from Chakra UI
import { createSystem, defaultConfig } from "@chakra-ui/react";

// Define your custom theme
const customTheme = createSystem(
  // Use the default configuration as the base
  defaultConfig,
  {
    theme: {
      tokens: {
        colors: {
          primary: {
            100: { value: "#FAE9F1" },
            200: { value: "#F6D4E6" },
            300: { value: "#E6B6D4" },
            400: { value: "#CD98BE" },
            500: { value: "#AD71A2" },
            600: { value: "#94528E" },
            700: { value: "#7C387C" },
            800: { value: "#5D2464" },
            900: { value: "#471553" },
          },
          brand: {
            black: { value: "#000000" },
            white: { value: "#FFFFFF" },
          },
        },
      },
    },
  }
);

export default customTheme;

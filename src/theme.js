import { extendTheme } from "@chakra-ui/react";

// Global theme styles
const styles = {
  global: {
    // Styles for the body
    body: {
      bg: "gray.50",
      color: "gray.800",
    },
  },
};

// Customize component styles
const components = {
  Button: {
    // Button base styles
    baseStyle: {
      fontWeight: "600",
      borderRadius: "md",
    },
    // Button sizes
    sizes: {
      lg: {
        minW: "120px",
        fontSize: "md",
        px: 6,
        py: 4,
      },
    },
    // Button variants
    variants: {
      primary: {
        bg: "blue.500",
        color: "white",
        _hover: {
          bg: "blue.600",
        },
      },
      secondary: {
        bg: "gray.200",
        color: "gray.800",
        _hover: {
          bg: "gray.300",
        },
      },
    },
    // Default properties
    defaultProps: {
      size: "md",
      variant: "primary",
    },
  },
  Card: {
    baseStyle: {
      container: {
        borderRadius: "12px",
        boxShadow: "md",
      },
      header: {
        paddingBottom: 2,
      },
      body: {
        paddingY: 6,
      },
      footer: {
        paddingY: 4,
      },
    },
  },
  Progress: {
    baseStyle: {
      track: {
        borderRadius: "full",
      },
      filledTrack: {
        borderRadius: "full",
      },
    },
  },
};

// Color palette
const colors = {
  // Primary colors
  blue: {
    50: "#e6f1ff",
    100: "#cce4ff",
    200: "#99c8ff",
    300: "#66adff",
    400: "#3392ff",
    500: "#0077ff", // Primary action color
    600: "#0062d6",
    700: "#004eac",
    800: "#003982",
    900: "#002559",
  },
  
  // Success colors
  green: {
    50: "#e6f7ed",
    100: "#c6ecd6",
    200: "#93dbb1",
    300: "#60ca8c",
    400: "#2dba67",
    500: "#22c55e", // Success
    600: "#1eaa4f",
    700: "#1a8c3f",
    800: "#156e30",
    900: "#105020",
  },
  
  // Warning colors
  yellow: {
    50: "#fef8e7",
    100: "#feefc3",
    200: "#fddf8a",
    300: "#fccf52",
    400: "#fbbf24", // Warning
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#923c0c",
    900: "#78340f",
  },
  
  // Error colors
  red: {
    50: "#fde8e8",
    100: "#fbd5d5",
    200: "#f8b4b4",
    300: "#f59292",
    400: "#f26d6d",
    500: "#ef4444", // Error
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
};

// Typography
const fonts = {
  heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
};

// Border radius
const radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

// Spacing
const space = {
  // Add custom spacing values if needed
};

// Create theme
const theme = extendTheme({
  styles,
  components,
  colors,
  fonts,
  radii,
  space,
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});

export default theme;
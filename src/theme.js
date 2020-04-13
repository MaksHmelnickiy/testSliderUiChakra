import { theme } from "@chakra-ui/core";
export default  {
  ...theme,
  colors: {
    ...theme.colors,
    // ['yellow.400']: '#EC9C00',
    brand: {
      900: "#000",
      800: "#153e75",
      700: "#2a69ac",
    },
    truck: {
      in: "#14B855",
      out: "#4D8BCE",
    },
    operation: {
      TAKE: "#14B855",
      GIVE: "#4D8BCE",
    },
  },
  breakpoints: ["768px", "1200px"],
  fonts: {
    heading: 'gilroy, "Avenir Next", sans-serif',
    body: 'gilroy, "Avenir Next", system-ui, sans-serif',
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  icons: {

  },
  radii: {
    ...theme.radii,
    sm: '6px',
    md: '6px',
  },
  borders: {
        none: 0,
        "1px": "1px solid",
        "2px": "2px solid",
        "4px": "24px solid",
    }
};

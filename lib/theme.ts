"use client";
import {
  extendTheme,
  type ThemeConfig,
  StyleFunctionProps,
} from "@chakra-ui/react";

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: props.colorMode === "dark" ? "red" : "blue",
    },
  }),
};
const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => {
      return {
        color:
          props.colorMode === "dark"
            ? "#ff63c3"
            : "#3d7aed",
        textUnderlineOffset: 3,
      };
    },
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: "#88ccca",
  "gray.800": "#202023",
  white: "#f0e7db",
  trueWhite: "#ffffff",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  // styles,
  config,
  components,
  fonts,
  colors,
});
export default theme;

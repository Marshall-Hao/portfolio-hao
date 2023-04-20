"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import theme from "@/lib/theme";
import Fonts from "@/components/helpers/font";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
        />
        <Fonts />

        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}

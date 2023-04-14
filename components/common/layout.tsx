"use client";

import { ReactNode } from "react";
import {
  Box,
  Container,
  ChakraProvider,
} from "@chakra-ui/react";
import NavBar from "./Nav";
import { usePathname } from "next/navigation";

type TProps = {
  children: ReactNode;
};

const Layout: (props: TProps) => JSX.Element = ({
  children,
}: TProps) => {
  const path = usePathname();

  return (
    <ChakraProvider>
      <Box as="main" pb={8}>
        <NavBar path={path}></NavBar>
        <Container maxW="container.md" pt={14}>
          {children}
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default Layout;

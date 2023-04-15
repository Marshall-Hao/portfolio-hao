"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  Box,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "./Nav";

type TProps = {
  children: ReactNode;
};

const Layout: (props: TProps) => JSX.Element = ({
  children,
}: TProps) => {
  const path = usePathname();

  return (
    <Box as="main" pb={8}>
      <NavBar path={path}></NavBar>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;

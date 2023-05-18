"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Box, Container } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import NavBar from "./common/Nav";
import Scene from "./canvas/Scene";
import BannerModels from "./canvas/Banner";

type TProps = {
  children: ReactNode;
};

const Layout: (props: TProps) => JSX.Element = ({
  children,
}: TProps) => {
  const path = usePathname();
  console.log(path);

  return (
    <>
      <Box as="main" pb={8}>
        {path.includes("/experiments/") ? null : (
          <NavBar path={path}></NavBar>
        )}

        <Container maxW="container.md" pt={14}>
          {path.includes("/experiments") ? null : (
            <BannerModels></BannerModels>
          )}
          {/* <Name path={path}></Name> */}
          <AnimatePresence mode="wait" initial={true}>
            {children}
          </AnimatePresence>
        </Container>
      </Box>
      <Scene
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
        eventPrefix="client"
      />
    </>
  );
};

export default Layout;

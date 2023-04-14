"use client";
import { Container, Box, Heading } from "@chakra-ui/react";

// * client still pre-rendered
export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="red"
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello,I&apos;m a full-stack developer based in
        ShenZhen!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Marshall Chan
          </Heading>
          <p>
            Stylish GoodMan( Developer / Designer / Blender
            )
          </p>
        </Box>
      </Box>
    </Container>
  );
}

"use client";
import {
  Box,
  Container,
  Heading,
  LinkBox,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, Image } from "@chakra-ui/next-js";
import Section from "./section";

const Name = ({ path }) => {
  return (
    <Section>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue(
            "whiteAlpha.500",
            "whiteAlpha.200"
          )}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hi! Welcome to my space!
        </Box>
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
        >
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            alignSelf={["center", "flex-start"]}
            w="fit-content"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxW="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/marshall.jpg"
              alt="profile"
              width="100"
              height="100"
              objectFit="none"
              objectPosition="left -20px"
            ></Image>
          </Box>
          <Box
            flexGrow={1}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Heading
              as="h2"
              variant="page-title"
              alignSelf={["center", "end"]}
            >
              Marshall Chen
            </Heading>
            <Box alignSelf={["center", "end"]}>
              {" "}
              <span> Creative developer</span> living in
              ShenZhen!
            </Box>
            <Link
              href={path === "/about" ? "" : "about"}
              alignSelf={["center", "end"]}
            >
              <LinkBox>
                {" "}
                {path === "/about" ? "Works" : "More"}
                <ChevronRightIcon></ChevronRightIcon>
              </LinkBox>
            </Link>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default Name;

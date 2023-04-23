"use client";
import { NextPage } from "next";
import {
  Container,
  Box,
  Heading,
  Button,
  List,
  ListItem,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Section from "@/components/common/section";
import Paragraph from "@/components/bio/paragraph";
import { EmailIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/bio/bio";
import Name from "@/components/common/Name";

import Article from "@/components/common/article";
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWechat,
} from "react-icons/io5";

const Page: NextPage = () => {
  return (
    <Article title="about">
      <Name path="/about"></Name>
      <Container>
        <Divider></Divider>
        <Section delay="0.1">
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            I’m a developer and designer living in ShenZhen,
            I have passions on wide range of topics: web
            development, Computer Graphic, Shader, Creative
            Coding and Making 3D Model! 💡 I also enjoy
            teaching non-programmer people how to code!
          </Paragraph>
        </Section>

        <Section delay="0.2">
          <Heading as="h3" variant="section-title">
            Social
          </Heading>
          <List
            display="flex"
            flexDirection={["column", "column", "row"]}
            gap={4}
          >
            <ListItem>
              <Link
                href="https://github.com/Marshall-Hao"
                target="_blank"
              >
                <Button
                  variant="solid"
                  colorScheme={useColorModeValue(
                    "purple",
                    "orange"
                  )}
                  leftIcon={<IoLogoGithub />}
                >
                  @Marshall-Hao
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/marshallccccc/"
                target="_blank"
              >
                <Button
                  variant="outline"
                  colorScheme={useColorModeValue(
                    "purple",
                    "orange"
                  )}
                  leftIcon={<IoLogoInstagram />}
                >
                  @marshallccccc
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.cn/incareer/in/marshall-hao"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme={useColorModeValue(
                    "purple",
                    "orange"
                  )}
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Marshall-hao
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            CrossFit🏋🏻, Games🕹️, Movies🍿, Style 🧥, techno
            🎧
          </Paragraph>
        </Section>
        <Section delay="0.4">
          <Heading as="h3" variant="section-title">
            Activities
          </Heading>

          <BioSection>
            <BioYear>2021 {"-"} Today</BioYear>
            FREELANCER
          </BioSection>
          <BioSection>
            <BioYear>2021 {"-"} Today</BioYear>
            Web Development Instructor at{" "}
            <Link href="https://www.lewagon.com/">
              Le Wagon
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2021 {"-"} Today</BioYear>
            Lead Frontend Developer at{" "}
            <Link href="https://www.papercranetech.cn/">
              Papercranetech
            </Link>
          </BioSection>
        </Section>
        <Section delay="0.5">
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <List
            display="flex"
            flexDirection={["column", "column", "row"]}
            gap={4}
          >
            <ListItem>
              <Link
                href="mailto:marshallchan666@outlook.com"
                target="_blank"
              >
                <Button
                  variant="solid"
                  m="auto"
                  colorScheme={useColorModeValue(
                    "purple",
                    "orange"
                  )}
                  leftIcon={<EmailIcon />}
                >
                  Contact Me!
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button
                variant="solid"
                m="auto"
                colorScheme={useColorModeValue(
                  "purple",
                  "orange"
                )}
                leftIcon={<IoLogoWechat />}
              >
                271209265
              </Button>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Article>
  );
};

export default Page;

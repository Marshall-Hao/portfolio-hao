"use client";
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Button,
  List,
  ListItem,
  Icon,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";
import Section from "@/components/common/section";
import {
  ChevronRightIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/bio/bio";

import Article from "@/components/common/article";
import {
  GridItem,
  WorkGridItem,
} from "@/components/common/grid-item";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io5";
import Name from "@/components/common/Name";

import thumbGallyCat from "../public/images/actualWorks/gallycat-eyecatch-min.png";
import thumbWarHammer from "../public/images/actualWorks/warhammer-catch.jpeg";
import thumbZFW from "../public/images/actualWorks/zfw-eyecatch.jpg";
import thumbTabBoard from "../public/images/actualWorks/taboard-eyecatch.jpg";
import thumbLeWagon from "../public/images/actualWorks/le-wagon-eyecatch.svg";

// * client still pre-rendered
export default function Home() {
  return (
    <Article>
      <Container>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="gallycats"
              title="GallyCats"
              thumbnail={thumbGallyCat}
            >
              Gallycat organically curates authentic food
              spots to give you instant access to the best
              local eats.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="Warhammer"
              title="Warhammer Campaign"
              thumbnail={thumbWarHammer}
            >
              The Warhammer Newbie Campaign is an
              interactive H5 build, created for new fans
              across China.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="ZFW"
              title="Zero Food Waste"
              thumbnail={thumbZFW}
            >
              An innovative way to sell delicious food
              before expiry date or shop closing time.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Projects
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="tabboard"
              thumbnail={thumbTabBoard}
              title="TabBoard"
            >
              TaBoard is a productivity google extension to
              organise your browser, save your time and
              clear your mind.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Others
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="lewagon"
              thumbnail={thumbLeWagon}
              title="Le Wagon"
            >
              Help dozens of students launch their own
              products!
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Article>
  );
}

"use client";
import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import Section from "@/components/common/section";
import Article from "@/components/common/article";
import { WorkGridItem } from "@/components/common/grid-item";
import Name from "@/components/common/Name";

import thumbGallyCat from "../public/images/actualWorks/gallycat-eyecatch.jpeg";
import thumbWarHammer from "../public/images/actualWorks/warhammer-catch.jpg";
import thumbZFW from "../public/images/actualWorks/zfw-eyecatch.jpg";
import thumbTabBoard from "../public/images/actualWorks/taboard-eyecatch.jpg";
import thumbLeWagon from "../public/images/actualWorks/le-wagon-eyecatch.svg";
import thumbBall from "../public/images/actualWorks/ball-eyecatch.jpeg";
import thumbParticle from "../public/images/actualWorks/particles-eyecatch.png";

// * client still pre-rendered
export default function Home() {
  return (
    <Article title="cba">
      <Name path=""></Name>
      <Container>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="gallycats"
              title="GallyCat"
              thumbnail={thumbGallyCat}
            >
              Gallycat organically curates authentic food
              spots to give you instant access to the best
              local eats.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="warhammer"
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
              id="zfw"
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
              thumbnail={thumbTabBoard}
              title="TabBoard"
              href="https://chrome.google.com/webstore/detail/taboard/nchjighemnpaocgbecjeokgejnjbhpgm"
            >
              TaBoard is a productivity google extension to
              organise your browser, save your time and
              clear your mind.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              thumbnail={thumbBall}
              title="Racing Ball"
              href="https://marshall-hao.github.io/r3fgamedemo/"
            >
              A Web 3D game let the user controll the ball
              avoiding obstacles.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              thumbnail={thumbParticle}
              title="Particles Animation"
              href="/experiments/particles"
            >
              A demo for interactive animation between
              particles shapes switching.
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
              thumbnail={thumbLeWagon}
              title="Le Wagon"
              href="https://www.lewagon.com/"
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

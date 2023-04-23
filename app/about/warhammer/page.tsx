"use client";
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  WorkImage,
  Title,
  Meta,
} from "@/components/common/work";
import Paragraph from "@/components/bio/paragraph";
import Article from "@/components/common/article";

const Page = () => {
  return (
    <Article title="GallyCat">
      <Container>
        <Title>
          Warhammer <Badge>2022</Badge>
        </Title>
        <Paragraph>
          The Warhammer Newbie Campaign is an interactive H5
          build, created for new fans across China to
          discover their Warhammer 40k and Age of Sigmar
          factions through an engaging and highly animated
          online quiz. The month long campaign reached
          nearly 200,000 quiz takers eager to find and share
          their factions with their friends.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://h5.games-workshop-china.com/#/landing"
              target="_blank"
            >
              https://h5.games-workshop-china.com/#/landing
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Mobile(H5)</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue, Webgl, glsl, Ruby on Rails</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/actualWorks/wh-detail1.jpg"
          alt="warhammer"
        />
        <WorkImage
          src="/images/actualWorks/wh-detail2.jpeg"
          alt="warhammer"
        />
      </Container>
    </Article>
  );
};

export default Page;

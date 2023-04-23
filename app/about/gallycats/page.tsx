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
          GallyCat <Badge>2023</Badge>
        </Title>
        <Paragraph>
          Gallycat organically curates authentic food spots
          to give you instant access to the best local eats.
          Unlock local food trails marked by your favorite,
          most trusted foodies. Organize and create your own
          trails and share them with family, friends, and
          followers. Join the community of curious food
          experience seekers.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            {/* <Link href="https://www.inkdrop.app/"> */}
            Coming very soon!
            <ExternalLinkIcon mx="2px" />
            {/* </Link> */}
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web/Mobile(PWA)</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, React, Ruby on Rails</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/actualWorks/GC-detail1.jpg"
          alt="gallycat"
        />
        <WorkImage
          src="/images/actualWorks/gc-detail2.jpg"
          alt="gallycat"
        />
      </Container>
    </Article>
  );
};

export default Page;

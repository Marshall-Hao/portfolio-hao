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
          Zero Food Waste <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A beautiful WeChat Mini-Program that is changing
          the way people consume food and to create a
          convenient way for bakeries and restaurants to
          sell their food that is close to expiry date.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Wechat Mini-Program</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Wechat Mini-Program Framework, Ruby on Rails
            </span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/actualWorks/zfw-detail1.jpg"
          alt="gallycat"
        />
      </Container>
    </Article>
  );
};

export default Page;

"use client";
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
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
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Repellat dolorum consequuntur
          inventore eum explicabo eveniet dignissimos
          adipisci nostrum, enim libero autem temporibus
          recusandae alias animi dolore odio officia dicta
          veritatis?
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app/">
              https://www.inkdrop.app/{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Electron, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Assumenda sint est nisi!
              Blanditiis temporibus fugiat labore corrupti
              quasi ipsam, ex cumque quae quod, magnam nulla
              incidunt, saepe porro quaerat atque?
              {/*{" "} for space */}{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/inkdrop_01.png"
          alt="Inkdrop"
        />
        <WorkImage
          src="/images/works/inkdrop_02.png"
          alt="Inkdrop"
        />
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Container>
    </Article>
  );
};

export default Page;

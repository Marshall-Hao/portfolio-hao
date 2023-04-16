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
} from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";
import Section from "@/components/common/section";
import Paragraph from "@/components/bio/paragraph";
import {
  ChevronRightIcon,
  EmailIcon,
} from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/bio/bio";

import Article from "@/components/common/article";
import { GridItem } from "@/components/common/grid-item";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
} from "react-icons/io5";
import thumbYouTube from "../public/images/links/youtube.png";
import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";

// * client still pre-rendered
export default function Home() {
  return (
    <Article title="cba">
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
          Hello,I&apos;m a full-stack developer based in
          ShenZhen!
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Marshall Chan
            </Heading>
            <p>
              Stylish GoodMan( Developer / Designer /
              Blender )
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
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
        </Box>

        <Section delay="0.1">
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Omnis autem quod deserunt nam
            velit sed sunt at unde eos totam a fugit, dicta
            aspernatur enim atque nesciunt accusantium
            dolorem expedita. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Omnis tempora
            dolore nesciunt aliquam accusamus adipisci
            minima architecto, asperiores a dicta eius odio
            ipsa corrupti maiores, ducimus culpa, cupiditate
            soluta dolorum!{" "}
            <Link href="https://next-cat-9xn8.vercel.app/">
              GalleyGat
            </Link>
          </Paragraph>
          <Box textAlign="center" my={4}>
            <Link href="/works">
              <Button
                rightIcon={
                  <ChevronRightIcon></ChevronRightIcon>
                }
                colorScheme="teal"
              >
                My portfolio
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay="0.2">
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1993</BioYear>
            Born in NanChang(南昌), China
          </BioSection>
          <BioSection>
            <BioYear>2008</BioYear>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quaerat ad adipisci aperiam
            voluptatibus reprehenderit placeat dignissimos
            doloribus et vitae consectetur expedita, in
            dicta saepe qui neque soluta voluptas itaque
            accusamus!
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Vero recusandae fuga nemo,
            nostrum velit adipisci facilis nam ipsam aperiam
            aspernatu
          </BioSection>
          <BioSection>
            <BioYear>2014 to present</BioYear>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non aperiam delectus earum
            iure. Vel quasi, quia consequuntur
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            {/* Art, Music,{" "}
            <Link
              href="https://illust.odoruinu.net/"
              target="_blank"
            >
              Drawing
            </Link>
            , Playing Drums,{" "}
            <Link
              href="https://500px.com/p/craftzdog"
              target="_blank"
            >
              Photography
            </Link>
            , Leica, Machine Learning */}
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Veritatis corporis tempore
            vero cum maiores culpa consectetur quaerat qui
            aut, quisquam laborum unde blanditiis vitae
            velit aspernatur. Incidunt neque itaque aperiam!
          </Paragraph>
        </Section>

        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://github.com/craftzdog"
              target="_blank"
            >
              <Button
                variant="solid"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://twitter.com/inkdrop_app"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://twitter.com/craftzdog"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://instagram.com/craftzdog"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey.
          Weekly updates on projects, tutorials, and videos
        </p>

        <Box textAlign="center" my={4}>
          <Button
            // *  as can make a tag use button props
            as={Link}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            // * 颜色主题 ，可以用于 darkmode
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box>
      </Container>
    </Article>
  );
}

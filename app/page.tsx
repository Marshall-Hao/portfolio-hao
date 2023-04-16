"use client";
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";
import Section from "@/components/common/section";
import Paragraph from "@/components/bio/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/bio/bio";
import dynamic from "next/dynamic";
import Article from "@/components/common/article";
// const Article = dynamic(
//   () => import("../components/common/article"),
//   { ssr: false }
// );
// * client still pre-rendered
export default function Home() {
  return (
    <Article title="cba">
      <Container>
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
        <Box
          borderRadius="lg"
          bg={useColorModeValue(
            "whiteAlpha.500",
            "whiteAlpha.200"
          )}
          p={3}
          mt={6}
          mb={6}
          textAlign="center"
        >
          Hello,I&apos;m a full-stack developer based in
          ShenZhen!
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
      </Container>
    </Article>
  );
}

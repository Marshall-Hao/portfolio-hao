"use client";
import { NextPage } from "next";
import { useRef, createRef, Suspense } from "react";
import dynamic from "next/dynamic";
import {
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Spinner,
} from "@chakra-ui/react";

import Article from "@/components/common/article";
import Section from "@/components/common/section";
import {
  Experiment1,
  Experiment2,
  Experiment3,
  Experiment4,
  Experiment5,
  Experiment6,
  Experiment7,
  Experiment8,
  Experiment9,
} from "@/components/experiments/Experiment";

const View = dynamic(
  () =>
    import("@/components/canvas/View").then(
      (mod) => mod.View
    ),
  {
    ssr: false,
  }
);

const Common = dynamic(
  () =>
    import("@/components/canvas/View").then(
      (mod) => mod.Common
    ),
  {
    ssr: false,
  }
);

const ShaderContainer = ({
  children,
  name,
  delay,
  withCommon = false,
}) => {
  // const ref = useRef();
  // console.log(ref);
  return (
    <>
      <Divider my={6} />
      <Section delay={delay}>
        <Heading as="h3" fontSize={20} mb={4}>
          {name}
        </Heading>
        <Suspense
          fallback={
            <Box
              m="auto"
              w="100%"
              h={[260, 460, 620]}
              position="relative"
            >
              <Spinner
                size="xl"
                position="absolute"
                left="50%"
                top="50%"
                ml="calc(0px - var(--spinner-size) / 2)"
                mt="calc(0px - var(--spinner-size))"
              />
            </Box>
          }
        >
          <View
            className={name}
            m="auto"
            w="100%"
            h={[260, 460, 620]}
            position="relative"
            // ref={ref}
          >
            {children}
            <Common></Common>
          </View>
        </Suspense>
      </Section>
    </>
  );
};

const Page: NextPage = () => {
  return (
    <Article name="experiment">
      <ShaderContainer name="experiment1(burn)" delay={0.1}>
        <Experiment6></Experiment6>
      </ShaderContainer>
      <ShaderContainer
        name="experiment2(PopIn)"
        delay={0.2}
      >
        <Experiment1></Experiment1>
      </ShaderContainer>
      <ShaderContainer
        name="experiment3(sinwave)"
        delay={0.3}
      >
        <Experiment2></Experiment2>
      </ShaderContainer>
      <ShaderContainer
        name="experiment4(boolean)"
        delay={0.4}
      >
        <Experiment3></Experiment3>
      </ShaderContainer>
      <ShaderContainer
        name="experiment5(cloud)"
        delay={0.5}
      >
        <Experiment4></Experiment4>
      </ShaderContainer>
      <ShaderContainer
        name="experiment6(noisevisual)"
        delay={0.6}
      >
        <Experiment5></Experiment5>
      </ShaderContainer>
      <ShaderContainer
        name="experiment7(effect)"
        delay={0.7}
      >
        <Experiment7></Experiment7>
      </ShaderContainer>
      <ShaderContainer
        name="experiment8(planet)"
        delay={0.8}
      >
        <Experiment8></Experiment8>
      </ShaderContainer>
      <ShaderContainer
        name="experiment9(bananas)"
        delay={0.9}
      >
        <Experiment9></Experiment9>
      </ShaderContainer>
    </Article>
  );
};

export default Page;

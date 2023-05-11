"use client";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import {
  Heading,
  SimpleGrid,
  Divider,
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
  return (
    <>
      <Divider my={6} />
      <Section delay={delay}>
        <Heading as="h3" fontSize={20} mb={4}>
          {name}
        </Heading>
        <View
          orbit
          className={name}
          m="auto"
          w="100%"
          h={[260, 460, 620]}
          position="relative"
        >
          {children}
          <Common></Common>
        </View>
      </Section>
    </>
  );
};

const Page: NextPage = () => {
  return (
    <Article name="experiment">
      <ShaderContainer
        name="experiment1(PopIn)"
        delay={0.1}
      >
        <Experiment1></Experiment1>
      </ShaderContainer>
      <ShaderContainer
        name="experiment2(sinwave)"
        delay={0.2}
      >
        <Experiment2></Experiment2>
      </ShaderContainer>
      <ShaderContainer
        name="experiment3(boolean)"
        delay={0.3}
      >
        <Experiment3></Experiment3>
      </ShaderContainer>
      <ShaderContainer
        name="experiment4(cloud)"
        delay={0.4}
      >
        <Experiment4></Experiment4>
      </ShaderContainer>
      <ShaderContainer
        name="experiment5(noisevisual)"
        delay={0.5}
      >
        <Experiment5></Experiment5>
      </ShaderContainer>
      <ShaderContainer name="experiment6(burn)" delay={0.6}>
        <Experiment6></Experiment6>
      </ShaderContainer>
      <ShaderContainer
        name="experiment7(effect)"
        delay={0.6}
      >
        <Experiment7></Experiment7>
      </ShaderContainer>
      <ShaderContainer
        name="experiment8(planet)"
        delay={0.6}
      >
        <Experiment8></Experiment8>
      </ShaderContainer>
    </Article>
  );
};

export default Page;

"use client";
import { Link, Image } from "@chakra-ui/next-js";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  href: string;
  title: string;
  thumbnail: string;
};

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
}: TProps) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          loading="lazy"
        ></Image>
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

type WProps = {
  children: ReactNode;
  id?: string;
  title: string;
  thumbnail: string;
  href?: string;
};

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  href,
}: WProps) => {
  return (
    <Box w="100%" textAlign="center">
      <Link
        href={id ? `/about/${id}` : href}
        target={href ? "_blank" : "_self"}
      ></Link>
      <LinkBox cursor="pointer" textAlign="center">
        <Box>
          <Image
            borderRadius="lg"
            w="full"
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            style={{
              aspectRatio: "auto(720 / 400)",
              backgroundSize: "cover",
            }}
          ></Image>
        </Box>
        <LinkOverlay
          as={Link}
          href={id ? `/about/${id}` : href}
          target={href ? "_blank" : "_self"}
        >
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius:12px;
        aspect-ratio: 720 / 400;
        object-fit:cover;
      }
    `}
  ></Global>
);

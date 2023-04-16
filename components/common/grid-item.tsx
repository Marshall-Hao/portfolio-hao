import { Link, Image } from "@chakra-ui/next-js";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
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
  id: number;
  title: string;
  thumbnail: string;
};

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: WProps) => {
  return (
    <Box w="100%" textAlign="center">
      <Link href={`/works/${id}`}></Link>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        ></Image>
        <LinkOverlay href={`/works/${id}`}>
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
      }
    `}
  ></Global>
);

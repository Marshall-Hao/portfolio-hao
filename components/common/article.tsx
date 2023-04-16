"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "./grid-item";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opactity: 0, x: 0, y: 20 },
};

type TProps = {
  children: ReactNode;
  title: string;
};

const Article = ({ children, title }: TProps) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Head>
            <title>Marshall Chan</title>
          </Head>
        )}
        {children}
        <GridItemStyle></GridItemStyle>
      </>
    </motion.article>
  );
};

export default Article;

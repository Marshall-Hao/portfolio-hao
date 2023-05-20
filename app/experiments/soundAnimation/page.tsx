"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SoundAnimation = dynamic(
  () =>
    import("@/components/experiments/SoundAnimation").then(
      (mod) => mod.default
    ),
  {
    ssr: false,
  }
);

const Page = () => {
  return <SoundAnimation></SoundAnimation>;
};

export default Page;

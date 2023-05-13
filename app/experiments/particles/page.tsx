"use client";
import dynamic from "next/dynamic";

const View = dynamic(
  () =>
    import("@/components/canvas/View").then(
      (mod) => mod.View
    ),
  {
    ssr: false,
  }
);

const Page = () => {
  return <></>;
};

export default Page;

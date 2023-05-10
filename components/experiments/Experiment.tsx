"use client";
import { useRef, memo } from "react";
import dynamic from "next/dynamic";
import { useFrame, extend } from "@react-three/fiber";
import {
  Environment,
  shaderMaterial,
} from "@react-three/drei";

// * shader

const Suzanne = dynamic(
  () =>
    import("@/components/canvas/Model").then(
      (mod) => mod.Suzanne
    ),
  {
    ssr: false,
  }
);

// const OneMaterial = shaderMaterial(
//   {
//     time: 0,
//   },
//   oneVertexShader,
//   oneFragmentShader
// );
// extend({ OneMaterial });

export const Experiment1 = () => {
  return (
    <group>
      <Environment background preset="dawn"></Environment>
      <Suzanne></Suzanne>
    </group>
  );
};

export const Experiment2 = () => {
  return <></>;
};

export const Experiment3 = () => {
  return <></>;
};

export const Experiment4 = () => {
  return <></>;
};

export const Experiment5 = () => {
  return <></>;
};

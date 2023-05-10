"use client";
import { useRef, memo } from "react";
import dynamic from "next/dynamic";
import { useFrame, extend } from "@react-three/fiber";
import {
  Environment,
  shaderMaterial,
} from "@react-three/drei";

import { CubeTextureLoader } from "three";
// * shader
import sinVertex from "./shader/experiment2/vertex.glsl";
import sinFrag from "./shader/experiment2/fragment.glsl";

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
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.uniforms.time.value += delta;
    ref.current.uniforms.specMap.value =
      state.scene.background;
  });

  return (
    <group>
      <Environment background preset="night"></Environment>
      <mesh>
        <icosahedronGeometry
          args={[1, 128]}
        ></icosahedronGeometry>
        <shaderMaterial
          ref={ref}
          vertexShader={sinVertex}
          fragmentShader={sinFrag}
          uniforms={{
            time: { value: 0 },
            specMap: { value: new CubeTextureLoader() },
          }}
        ></shaderMaterial>
      </mesh>
    </group>
  );
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
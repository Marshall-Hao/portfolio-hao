"use client";
import { useRef, memo } from "react";
import dynamic from "next/dynamic";
import { useFrame, extend } from "@react-three/fiber";
import {
  Environment,
  shaderMaterial,
  useTexture,
} from "@react-three/drei";

import { CubeTextureLoader, Vector2 } from "three";
// * shader
import sinVertex from "./shader/experiment2/vertex.glsl";
import sinFrag from "./shader/experiment2/fragment.glsl";
import boolVertex from "./shader/experiment3/vertex.glsl";
import boolFrag from "./shader/experiment3/fragment.glsl";
import cloudVertex from "./shader/experiment4/vertex.glsl";
import cloudFrag from "./shader/experiment4/fragment.glsl";
import noiseVertex from "./shader/experiment5/vertex.glsl";
import noiseFrag from "./shader/experiment5/fragment.glsl";
import burnVertex from "./shader/experiment6/vertex.glsl";
import burnFrag from "./shader/experiment6/fragment.glsl";
import effecrtVertex from "./shader/experiment7/vertex.glsl";
import effectFrag from "./shader/experiment7/fragment.glsl";
import planetVertex from "./shader/experiment8/vertex.glsl";
import planetFrag from "./shader/experiment8/fragment.glsl";

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
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.uniforms.time.value += delta;
  });
  return (
    <mesh>
      <planeGeometry args={[10, 10]}></planeGeometry>
      <shaderMaterial
        ref={ref}
        vertexShader={boolVertex}
        fragmentShader={boolFrag}
        uniforms={{
          time: { value: 0 },
          resolution: {
            value: new Vector2(
              window.innerWidth,
              window.innerHeight
            ),
          },
        }}
      ></shaderMaterial>
    </mesh>
  );
};

export const Experiment4 = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.uniforms.time.value += delta;
  });
  return (
    <mesh>
      <planeGeometry args={[10, 10]}></planeGeometry>
      <shaderMaterial
        ref={ref}
        vertexShader={cloudVertex}
        fragmentShader={cloudFrag}
        uniforms={{
          time: { value: 0 },
          resolution: {
            value: new Vector2(
              window.innerWidth,
              window.innerHeight
            ),
          },
        }}
      ></shaderMaterial>
    </mesh>
  );
};

export const Experiment5 = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.uniforms.time.value += delta;
  });
  return (
    <mesh>
      <planeGeometry args={[10, 10]}></planeGeometry>
      <shaderMaterial
        ref={ref}
        vertexShader={noiseVertex}
        fragmentShader={noiseFrag}
        uniforms={{
          time: { value: 0 },
          resolution: {
            value: new Vector2(
              window.innerWidth,
              window.innerHeight
            ),
          },
        }}
      ></shaderMaterial>
    </mesh>
  );
};

export const Experiment6 = () => {
  const [texture1, texture2] = useTexture([
    "/images/sea.jpeg",
    "/images/sand.jpeg",
  ]);

  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.uniforms.time.value += delta;
  });
  return (
    <mesh>
      <planeGeometry args={[10, 10]}></planeGeometry>
      <shaderMaterial
        ref={ref}
        vertexShader={burnVertex}
        fragmentShader={burnFrag}
        uniforms={{
          time: { value: 0 },
          resolution: {
            value: new Vector2(
              window.innerWidth,
              window.innerHeight
            ),
          },
          diffuse1: { value: texture1 },
          diffuse2: { value: texture2 },
        }}
      ></shaderMaterial>
    </mesh>
  );
};

export const Experiment7 = () => {
  const texture1 = useTexture("/images/sea.jpeg");

  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.uniforms.time.value += delta;
  });
  return (
    <mesh>
      <planeGeometry args={[10, 10]}></planeGeometry>
      <shaderMaterial
        ref={ref}
        vertexShader={effecrtVertex}
        fragmentShader={effectFrag}
        uniforms={{
          time: { value: 0 },
          resolution: {
            value: new Vector2(
              window.innerWidth,
              window.innerHeight
            ),
          },
          diffuse2: { value: texture1 },
        }}
      ></shaderMaterial>
    </mesh>
  );
};

export const Experiment8 = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.uniforms.time.value += delta;
  });
  return (
    <mesh>
      <planeGeometry args={[10, 10]}></planeGeometry>
      <shaderMaterial
        ref={ref}
        vertexShader={planetVertex}
        fragmentShader={planetFrag}
        uniforms={{
          time: { value: 0 },
          resolution: {
            value: new Vector2(
              window.innerWidth,
              window.innerHeight
            ),
          },
        }}
      ></shaderMaterial>
    </mesh>
  );
};

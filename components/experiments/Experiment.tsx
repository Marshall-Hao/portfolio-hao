"use client";
import { useRef, memo, useState } from "react";
import dynamic from "next/dynamic";
import {
  useFrame,
  extend,
  useThree,
} from "@react-three/fiber";
import {
  Environment,
  useTexture,
  useGLTF,
} from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
} from "@react-three/postprocessing";
import {
  CubeTextureLoader,
  Vector2,
  Mesh,
  MathUtils,
} from "three";
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

function Banana(props) {
  const { nodes, materials } = useGLTF(
    "/banana-v1-transformed.glb"
  );
  const ref = useRef<Mesh>();
  // * viewport of the camera, front is not the same as the one in the back
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(
    camera,
    [0, 0, props.z]
  );

  const [data] = useState({
    x: MathUtils.randFloatSpread(2),
    y: MathUtils.randFloatSpread(height),
    rx: Math.random() * Math.PI,
    ry: Math.random() * Math.PI,
    rz: Math.random() * Math.PI,
  });

  // * 每个obj的移动变化 应该根据自己当时的视口 所以getCurrentViewport
  useFrame((state, delta) => {
    // * 每个frame都是一样的值，看上去就没有转动，所以要加数字
    ref.current.rotation.set(
      (data.rx += 0.001),
      (data.ry += 0.001),
      (data.rz += 0.001)
    );
    // * 因为data.y是不断增大的，所以position改变了 加上data.y还是会超过适口高度
    ref.current.position.set(
      // * 需要x位置跟着viewport.width，位置改变
      data.x * width,
      (data.y += 0.01),
      props.z
    );
    if (data.y > height) data.y = -height;
  });
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.banana_low.geometry}
        material={materials.skin}
        rotation={[-Math.PI / 2, 0, 0]}
        material-emissive="orange"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.banana_mid.geometry}
        material={materials.skin}
        rotation={[-Math.PI / 2, 0, 0]}
        material-emissive="orange"
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.banana_high.geometry}
        material={materials.skin}
        rotation={[-Math.PI / 2, 0, 0]}
        material-emissive="orange"
      />
    </group>
  );
}

export const Experiment9 = ({
  count = 100,
  depth = 80,
}) => {
  return (
    <group>
      {/* <color attach="background" args={["orange"]}></color> */}
      {/* <spotLight
        position={[10, 10, 10]}
        intensity={1}
      ></spotLight> */}

      {Array.from({ length: count }, (_, i) => (
        <Banana
          key={i}
          z={-(i / count) * depth - 20}
        ></Banana>
      ))}
      <Environment preset="sunset"></Environment>
      {/* <EffectComposer>
        <DepthOfField
          target={[0, 0, depth / 2]}
          focalLength={0.1}
          bokehScale={11}
          height={700}
        ></DepthOfField>
      </EffectComposer> */}
    </group>
  );
};

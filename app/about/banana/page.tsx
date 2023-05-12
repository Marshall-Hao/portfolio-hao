"use client";
import { Suspense, useRef, useState } from "react";
import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import {
  EffectComposer,
  DepthOfField,
} from "@react-three/postprocessing";
import { MathUtils, Mesh } from "three";
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

function Page({ count = 100, depth = 80 }) {
  return (
    <>
      <View
        className={name}
        m="auto"
        w="100%"
        h={[260, 460, 620]}
        position="relative"
      >
        <color
          attach="background"
          args={["orange"]}
        ></color>
        {/* /* Array.from javascript */}
        {/* length:count very array like, so it will create an array with 100 ele, and each ele will change based on the callback fn */}
        {/* {Array.from({ length: count }, (_, i) => (
        <Box key={i} z={-i}></Box>
      ))} */}
        {/* <ambientLight intensity={0.5}></ambientLight> */}
        <spotLight
          position={[10, 10, 10]}
          intensity={1}
        ></spotLight>
        <Suspense fallback={null}>
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
        </Suspense>
      </View>
    </>
  );
}

export default Page;

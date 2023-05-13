"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Group, Vector3 } from "three";
import {
  Environment,
  ContactShadows,
} from "@react-three/drei";

const View = dynamic(
  () =>
    import("@/components/canvas/View").then(
      (mod) => mod.View
    ),
  {
    ssr: false,
  }
);
const Common = dynamic(
  () =>
    import("@/components/canvas/View").then(
      (mod) => mod.Common
    ),
  { ssr: false }
);
const Bear = dynamic(
  () =>
    import("@/components/canvas/Model").then(
      (mod) => mod.Bear
    ),
  { ssr: false }
);

const Light = dynamic(
  () =>
    import("@/components/canvas/Model").then(
      (mod) => mod.Light
    ),
  { ssr: false }
);

const Desk = dynamic(
  () =>
    import("@/components/canvas/Model").then(
      (mod) => mod.Desk
    ),
  { ssr: false }
);

const Laptop = dynamic(
  () =>
    import("@/components/canvas/Model").then(
      (mod) => mod.Laptop
    ),
  { ssr: false }
);

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Models = () => {
  const models = useRef<Group>(null);
  const state = useThree();

  const [target] = useState(() => new Vector3(-0.5, 0, 0));
  const [initialCameraPosition] = useState(
    () =>
      new Vector3(
        6 * Math.sin(0.2 * Math.PI),
        3.5,
        1.5 * Math.cos(0.2 * Math.PI)
      )
  );
  let frame = 0;
  useFrame((state) => {
    frame = frame <= 100 ? frame + 1 : frame;
    if (frame <= 100) {
      const p = initialCameraPosition;
      const rotSpeed =
        -easeOutCirc(frame / 120) * Math.PI * 20;

      state.camera.position.y = p.y;
      state.camera.position.x =
        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
      state.camera.position.z =
        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
      state.camera.lookAt(models.current.position);
    }
  });

  useEffect(() => {
    return () => {
      state.camera.position.x = 0;
      state.camera.position.y = 0;
      state.camera.position.z = 11;
      // state.camera.lookAt(new Vector3(1, 1, 1));
    };
  }, []);

  return (
    <group ref={models}>
      <Light scale={0.4}></Light>
      <Bear scale={0.6}></Bear>
      <Desk scale={0.4}></Desk>
      <Laptop scale={0.15}></Laptop>
      <Common></Common>
    </group>
  );
};

const BannerModels = () => {
  return (
    <View
      orbit
      className="rotate-dog"
      m="auto"
      mt={["-20px", "-60px", "-120px"]}
      mb={["-40px", "-140px", "-200px"]}
      w={[280, 480, 640]}
      h={[260, 460, 620]}
      position="relative"
    >
      <Models></Models>
      <ContactShadows
        opacity={1}
        scale={10}
        blur={1}
        far={10}
        resolution={256}
        color="#000000"
      />
    </View>
  );
};

export default BannerModels;

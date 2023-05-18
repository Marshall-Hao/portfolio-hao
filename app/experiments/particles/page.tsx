"use client";

import dynamic from "next/dynamic";
import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { Box, Button } from "@chakra-ui/react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { MeshSurfaceSampler } from "three/addons/math/MeshSurfaceSampler.js";

const View = dynamic(
  () =>
    import("@/components/canvas/View").then(
      (mod) => mod.View
    ),
  {
    ssr: false,
  }
);

const LightNormal = dynamic(
  () =>
    import("@/components/canvas/Model").then(
      (mod) => mod.LightNormal
    ),
  { ssr: false }
);

const SuzannePoint = forwardRef(function SuzannePoint(
  props,
  ref
) {
  const state = useThree();
  const suzanne = useRef<THREE.Points>();
  const { nodes, materials } = useGLTF("/suzanne.glb");

  useEffect(() => {
    state.camera.position.x = 0;
    state.camera.position.y = 0;
    state.camera.position.z = 5;
  }, []);
  useImperativeHandle(
    ref,
    () => {
      return {
        addSuzanne() {
          state.scene.add(suzanne?.current);
        },
        removeSuzanne() {
          state.scene.remove(suzanne?.current);
        },
      };
    },
    []
  );
  return (
    <points geometry={nodes.Suzanne.geometry} ref={suzanne}>
      {/* // * points already contain the mesh inside */}
      <pointsMaterial
        color="#805AD5"
        size={0.015}
        sizeAttenuation
      />
    </points>
  );
});

const LightPoint = forwardRef(function LightPoint(
  props,
  ref
) {
  const state = useThree();
  const point = useRef<THREE.Points>();
  // const buffer = useRef<THREE.BufferAttribute>();
  const { nodes, materials } = useGLTF("/light.glb");
  useImperativeHandle(
    ref,
    () => {
      return {
        addLight() {
          state.scene.add(point?.current);
        },
        removeLight() {
          state.scene.remove(point?.current);
        },
      };
    },
    []
  );

  useEffect(() => {
    state.scene.remove(point?.current);
    const numParticles = 10000;
    const particlesPosition = new Float32Array(
      numParticles * 3
    );
    const sampler = new MeshSurfaceSampler(
      point.current
    ).build();

    for (let i = 0; i < numParticles; i++) {
      const newPosition = new THREE.Vector3();
      sampler.sample(newPosition);
      particlesPosition.set(
        [newPosition.x, newPosition.y, newPosition.z],
        i * 3
      );
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlesPosition, 3)
    );

    point.current.geometry = particleGeometry;
  }, []);

  return (
    <points
      ref={point}
      geometry={nodes.lightning.geometry}
      rotation={[Math.PI / 2, 0, Math.PI / 4]}
      scale={2}
    >
      <pointsMaterial
        color="#FBD38D"
        size={0.01}
        sizeAttenuation
      />
    </points>
  );
});

function DeskPoint(props) {
  const { nodes, materials } = useGLTF("/desk.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[0.25, 0.2, 0]}
      rotation={[0, Math.PI / 10, 0]}
    >
      <points geometry={nodes.tableLarge.geometry}>
        <pointsMaterial
          color="#5786F5"
          size={0.01}
          // sizeAttenuation
        />
      </points>
    </group>
  );
}

const Page = () => {
  const suzanne = useRef();
  const light = useRef();

  const activateSuzanne = () => {
    suzanne.current.addSuzanne();
    light.current.removeLight();
  };

  const activateLight = () => {
    suzanne.current.removeSuzanne();
    light.current.addLight();
  };

  return (
    <>
      <Box
        position="fixed"
        zIndex={4}
        top={5}
        width="100%"
        left={0}
        display="flex"
        justifyContent="center"
        gap={5}
      >
        <Button
          borderRadius="25"
          variant="outline"
          onClick={activateSuzanne}
        >
          SUZANNE
        </Button>
        <Button
          borderRadius="25"
          variant="outline"
          onClick={activateLight}
        >
          LIGHT
        </Button>
      </Box>
      <View
        zIndex={3}
        position="fixed"
        width="100%"
        height="100vh"
        top={0}
        left={0}
        orbit
      >
        <color attach="background" args={["black"]}></color>
        <SuzannePoint ref={suzanne}></SuzannePoint>
        <LightPoint ref={light}></LightPoint>
      </View>
    </>
  );
};

export default Page;

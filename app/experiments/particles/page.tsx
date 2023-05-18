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
  useLayoutEffect,
} from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

import * as THREE from "three";
import { MeshSurfaceSampler } from "three/addons/math/MeshSurfaceSampler.js";
import pointVertex from "../../../components/experiments/shader/particles/vertex.glsl";
import pointFrag from "../../../components/experiments/shader/particles/fragment.glsl";
import point2Vertex from "../../../components/experiments/shader/particles/vertex2.glsl";

const View = dynamic(
  () =>
    import("@/components/canvas/View").then(
      (mod) => mod.View
    ),
  {
    ssr: false,
  }
);

const SuzannePoint = forwardRef(function SuzannePoint(
  props,
  ref
) {
  const state = useThree();
  const monkey = useRef<THREE.Shader>();
  const suzanne = useRef<THREE.Points>();

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      colorOne: { value: new THREE.Color("#805AD5") },
      colorTwo: { value: new THREE.Color("#FBD38D") },
      uScale: { value: 0 },
    }),
    []
  );
  useFrame((state) => {
    monkey.current.uniforms.time = state.clock.elapsedTime;
  });
  const { nodes, materials } = useGLTF("/suzanne.glb");

  useEffect(() => {
    gsap.to(monkey.current?.uniforms.uScale, {
      value: 1,
    });

    state.camera.position.x = 0;
    state.camera.position.y = 0;
    state.camera.position.z = 5;
    const numParticles = 20000;
    const particlesPosition = new Float32Array(
      numParticles * 3
    );
    const particlesRandomness = new Float32Array(
      numParticles * 3
    );
    const sampler = new MeshSurfaceSampler(
      suzanne.current
    ).build();

    for (let i = 0; i < numParticles; i++) {
      const newPosition = new THREE.Vector3();
      sampler.sample(newPosition);
      particlesPosition.set(
        [newPosition.x, newPosition.y, newPosition.z],
        i * 3
      );
      particlesRandomness.set(
        [
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
        ],
        i * 3
      );
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlesPosition, 3)
    );
    particleGeometry.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(particlesRandomness, 3)
    );

    suzanne.current.geometry = particleGeometry;
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        addSuzanne() {
          state.scene.add(suzanne?.current);
          // console.log(monkey.current?.uniforms.uScale);
          gsap.to(monkey.current?.uniforms.uScale, {
            value: 1,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out",
          });

          gsap.fromTo(
            suzanne.current?.rotation,
            {
              y: Math.PI,
            },
            {
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            }
          );
        },
        removeSuzanne() {
          state.scene.remove(suzanne?.current);
          gsap.to(monkey.current?.uniforms.uScale, {
            value: 0,
            duration: 0.8,
            ease: "power3.out",
          });

          gsap.to(suzanne.current?.rotation, {
            y: Math.PI,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      };
    },
    []
  );
  return (
    <points ref={suzanne} geometry={nodes.Suzanne.geometry}>
      {/* // * points already contain the mesh inside */}
      <shaderMaterial
        ref={monkey}
        vertexShader={point2Vertex}
        fragmentShader={pointFrag}
        transparent={true}
        depthTest={false}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
      ></shaderMaterial>
    </points>
  );
});

const LightPoint = forwardRef(function LightPoint(
  props,
  ref
) {
  const state = useThree();

  const point = useRef<THREE.Points>();
  const shader = useRef<THREE.Shader>();

  const uniforms = useMemo(
    () => ({
      uTime: { value: state.clock.elapsedTime },
      colorOne: { value: new THREE.Color("#805AD5") },
      colorTwo: { value: new THREE.Color("#FBD38D") },
      uScale: { value: 0 },
    }),
    []
  );
  useFrame((state) => {
    shader.current.uniforms.uTime.value =
      state.clock.elapsedTime;
    // const x =
    //   (state.pointer.x * state.viewport.width) / 2.5;
    // const y =
    //   (state.pointer.y * state.viewport.height) / 2.5;

    // point.current.lookAt(x, y, Math.PI / 4);
    // console.log(shader.current.uniforms.uTime.value);
  });
  // const buffer = useRef<THREE.BufferAttribute>();
  const { nodes, materials } = useGLTF("/light.glb");
  useImperativeHandle(
    ref,
    () => {
      return {
        addLight() {
          state.scene.add(point?.current);
          gsap.to(shader.current?.uniforms.uScale, {
            value: 1,
            duration: 0.8,
            ease: "power3.out",
          });

          gsap.fromTo(
            point.current?.rotation,
            {
              y: Math.PI,
            },
            {
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            }
          );
        },
        removeLight() {
          gsap.to(shader.current?.uniforms.uScale, {
            value: 0,
            duration: 0.8,
            ease: "power3.out",
            onComplete: () => {
              state.scene.remove(point?.current);
            },
          });

          gsap.to(point.current?.rotation, {
            y: Math.PI,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      };
    },
    []
  );

  useEffect(() => {
    state.scene.remove(point?.current);
    const numParticles = 20000;
    const particlesPosition = new Float32Array(
      numParticles * 3
    );
    const particlesRandomness = new Float32Array(
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
      particlesRandomness.set(
        [
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
          Math.random() * 2 - 1,
        ],
        i * 3
      );
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlesPosition, 3)
    );
    particleGeometry.setAttribute(
      "aRandom",
      new THREE.BufferAttribute(particlesRandomness, 3)
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
      <shaderMaterial
        ref={shader}
        vertexShader={pointVertex}
        fragmentShader={pointFrag}
        transparent={true}
        depthTest={false}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
      ></shaderMaterial>
    </points>
  );
});

const Page = () => {
  const suzanne = useRef();
  const light = useRef();
  const color = useRef();

  const activateSuzanne = () => {
    suzanne.current.addSuzanne();
    light.current.removeLight();
    console.log(color.current);
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
        orbit={false}
      >
        <color
          attach="background"
          args={["black"]}
          ref={color}
        ></color>
        <SuzannePoint ref={suzanne}></SuzannePoint>
        <LightPoint ref={light}></LightPoint>
      </View>
    </>
  );
};

export default Page;

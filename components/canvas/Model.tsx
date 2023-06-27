"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Float,
  Html,
  meshBounds,
  shaderMaterial,
} from "@react-three/drei";
import {
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { CubeTextureLoader } from "three";

// * shader
import popVertex from "../experiments/shader/experiment1/vertex.glsl";
import popFrag from "../experiments/shader/experiment1/fragment.glsl";

export function Bear(props) {
  const { nodes, materials } = useGLTF("/bear.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0.2, -0.7]}
      rotation={[0, Math.PI / 10, 0]}
    >
      <mesh
        geometry={nodes.character_bear.geometry}
        material={materials["BrownDark.036"]}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      >
        <mesh
          geometry={nodes.character_bearArmLeft.geometry}
          material={materials["BrownDark.036"]}
          position={[0.2, 0, -0.63]}
          castShadow
        />
        <mesh
          geometry={nodes.character_bearArmRight.geometry}
          material={materials["BrownDark.036"]}
          position={[-0.2, 0, -0.63]}
          castShadow
        />
        <group position={[0, 0, -0.7]}>
          <mesh
            geometry={nodes.Cube1337.geometry}
            material={materials["Black.025"]}
            castShadow
          />
          <mesh
            geometry={nodes.Cube1337_1.geometry}
            material={materials["BrownDark.036"]}
            castShadow
          />
        </group>
      </mesh>
    </group>
  );
}

export function Light(props) {
  const ref = useRef<Mesh>();
  const { nodes, materials } = useGLTF("/light.glb");
  const { toggleColorMode } = useColorMode();

  return (
    <Float>
      <rectAreaLight
        width={2.5}
        height={3.65}
        intensity={25}
        color={useColorModeValue("#805AD5", "#FBD38D")}
        position={[3.5, 3.5, 2.5]}
      ></rectAreaLight>
      <group
        {...props}
        dispose={null}
        position={[0.7, 1.2, 0.5]}
      >
        <Html>
          <div
            style={{
              transform: "translateY(-30px)",
              width: "50px",
              height: "50px",
            }}
            onClick={toggleColorMode}
            onPointerEnter={() => {
              document.body.style.cursor = "pointer";
            }}
            onPointerLeave={() => {
              document.body.style.cursor = "default";
            }}
          ></div>
        </Html>
        <mesh
          ref={ref}
          raycast={meshBounds}
          geometry={nodes.lightning.geometry}
          // material={useColorModeValue(
          //   "purple",
          //   materials["Yellow.026"]
          // )}
          rotation={[Math.PI / 2, 0, Math.PI / 4]}
          castShadow
        >
          <meshStandardMaterial
            color={useColorModeValue("#805AD5", "#FBD38D")}
          ></meshStandardMaterial>
        </mesh>
      </group>
    </Float>
  );
}

export function LightNormal({ children, ...props }) {
  const ref = useRef<Mesh>();
  const { nodes, materials } = useGLTF("/light.glb");

  return (
    <group
      {...props}
      dispose={null}
      position={[0.7, 1.2, 0.5]}
    >
      <mesh
        ref={ref}
        geometry={nodes.lightning.geometry}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        castShadow
      >
        {children}
      </mesh>
    </group>
  );
}

export function SuzanneNormal({ children, ...props }) {
  const { nodes, materials } = useGLTF("/suzanne.glb");

  return (
    <group {...props} dispose={null}>
      {/* // * points already contain the mesh inside */}
      <points geometry={nodes.Suzanne.geometry}>
        <pointsMaterial
          color="#5786F5"
          size={0.015}
          // sizeAttenuation
        />
      </points>
    </group>
  );
}

export function Suzanne({ children, ...props }) {
  const { nodes, materials } = useGLTF("/suzanne.glb");
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.uniforms.time.value += delta;
    ref.current.uniforms.specMap.value =
      state.scene.background;
  });
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Suzanne.geometry}>
        <shaderMaterial
          ref={ref}
          vertexShader={popVertex}
          fragmentShader={popFrag}
          uniforms={{
            time: { value: 0 },
            specMap: { value: new CubeTextureLoader() },
          }}
        ></shaderMaterial>
      </mesh>
    </group>
  );
}

export function Desk(props) {
  const { nodes, materials } = useGLTF("/desk.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[0.25, 0.2, 0]}
      rotation={[0, Math.PI / 10, 0]}
    >
      <mesh
        geometry={nodes.tableLarge.geometry}
        material={materials["BrownDark.074"]}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      />
    </group>
  );
}

export function Laptop(props) {
  const { nodes, materials } = useGLTF("/laptop.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[0.2, 0.41, 0]}
      rotation={[0, (10 / 9) * Math.PI, 0]}
    >
      <Html
        transform
        wrapperClass="htmlScreen"
        // * the distance ratio
        distanceFactor={1.17}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
      >
        <h1
          style={{
            fontSize: "50px",
            fontStyle: "italic",
            color: `${useColorModeValue(
              "#805AD5",
              "#FBD38D"
            )}`,
          }}
        >
          {/* {useColorModeValue("Light Mode", "DarK Mode")} */}
          Now,you can zoom out!
        </h1>
      </Html>
      <group position={[0, 0.52, 0]} scale={0.1}>
        <mesh
          geometry={nodes.Circle001.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={materials.HeadPhoneHole}
        />
        <mesh
          geometry={nodes.Circle001_3.geometry}
          material={materials.USB_C_INSIDE}
        />
        <mesh
          geometry={nodes.Circle001_4.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          geometry={nodes.Circle001_5.geometry}
          material={materials.TouchbarBorder}
        />
        <mesh
          geometry={nodes.Circle001_6.geometry}
          material={materials.Keyboard}
        />
        <group position={[0, -0.51, 0]} scale={5.8}>
          <mesh
            geometry={nodes.Circle006.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            geometry={nodes.Circle006_1.geometry}
            material={materials.USB_C_INSIDE}
          />
        </group>
        <mesh
          geometry={nodes.FrontCameraRing001.geometry}
          material={materials["CameraRIngBlack.002"]}
          position={[-0.15, 19.57, -16.15]}
          scale={5.8}
        />
        <group position={[-11.79, -0.15, -8.3]} scale={5.8}>
          <mesh
            geometry={nodes.Circle.geometry}
            material={materials["Keyboard.001"]}
          />
          <mesh
            geometry={nodes.Circle_1.geometry}
            material={materials.Key}
          />
          <mesh
            geometry={nodes.Circle_2.geometry}
            material={materials.Touchbar}
          />
        </group>
        <mesh
          geometry={nodes.KeyboardKeyHole.geometry}
          material={materials["Keyboard.001"]}
          position={[-11.79, -0.15, -8.3]}
          scale={5.8}
        />
        <mesh
          geometry={nodes.RubberFoot.geometry}
          material={materials.DarkRubber}
          position={[-11.95, -0.75, 7.86]}
          scale={5.8}
        />
        <group position={[0.01, -0.21, -10.56]} scale={5.8}>
          <mesh
            geometry={nodes.Circle012.geometry}
            material={materials.HingeBlack}
          />
          <mesh
            geometry={nodes.Circle012_1.geometry}
            material={materials.HingeMetal}
          />
        </group>
        <group position={[-15.03, 0.03, 0.6]} scale={5.8}>
          <mesh
            geometry={nodes.Circle009.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            geometry={nodes.Circle009_1.geometry}
            material={materials.SpeakerHole}
          />
        </group>
        <group position={[12.2, 0.03, 0.6]} scale={5.8}>
          <mesh
            geometry={nodes.Circle009.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            geometry={nodes.Circle009_1.geometry}
            material={materials.SpeakerHole}
          />
        </group>
        <group
          position={[0.01, -0.47, -10.41]}
          rotation={[1.31, 0, 0]}
          scale={5.8}
        >
          <mesh
            geometry={nodes.Circle002.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            geometry={nodes.Circle002_1.geometry}
            material={materials.HingeMetal}
          />
          <mesh
            geometry={nodes.Circle002_2.geometry}
            material={materials.ScreenGlass}
          />
          <mesh
            geometry={nodes.Circle002_3.geometry}
            material={materials.Rubber}
          />
          <mesh
            geometry={nodes.Circle002_4.geometry}
            material={materials.DisplayGlass}
          />
          <mesh
            geometry={nodes.AppleLogo000.geometry}
            material={materials["AppleLogo.004"]}
            position={[0, -0.11, -1.8]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.58}
          />
        </group>
      </group>
    </group>
  );
}

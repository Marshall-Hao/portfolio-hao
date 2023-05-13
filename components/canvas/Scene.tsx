"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { r3f } from "@/lib/tunnel";
import {
  CineonToneMapping,
  ACESFilmicToneMapping,
  sRGBEncoding,
  Color,
} from "three";
const Scene = ({ ...props }) => {
  return (
    <Canvas
      {...props}
      eventPrefix="client"
      shadows // * handle pixelration, if 3 * 3 , it will render 9 times, bad performance, restricts it
      dpr={[1, 2]}
      // * no tone Mapping
      // flat
      // * always the same, no matther far near the angle
      // orthographic
      gl={{
        antialias: true,
        // * for tone HDR ~ LDR
        toneMapping: ACESFilmicToneMapping,
        // * the way to encode and decode colors in a more optimisticed way
        outputEncoding: sRGBEncoding,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [1, 1.5, 11],
      }}
    >
      <r3f.Out></r3f.Out>
      <Preload all></Preload>
    </Canvas>
  );
};

export default Scene;

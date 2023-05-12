"use client";

import {
  forwardRef,
  ReactNode,
  Suspense,
  useImperativeHandle,
  useRef,
} from "react";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  View as ViewImpl,
} from "@react-three/drei";
import { Box } from "@chakra-ui/react";
import { Three } from "../helpers/Three";

type CProps = {
  color: string;
};

export const Common = ({ color }: CProps) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight
      position={[20, 30, 10]}
      intensity={1}
      castShadow
    />
    {/* <PerspectiveCamera
      makeDefault
      fov={40}
      position={[0, 0, 6]}
    /> */}
    <OrthographicCamera
      position={[0, 3, 3]}
    ></OrthographicCamera>
  </Suspense>
);

type VProps = {
  children: ReactNode;
  orbit: boolean;
};

const View = forwardRef(
  ({ children, orbit, ...props }: VProps, ref) => {
    const localRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => localRef.current);

    return (
      <>
        {/* // * 这个就是canvas组件 会在的位置，smart，同一个大的canvas 切割开来了，对performance很好，不用弄好几个canvas */}
        <Box ref={localRef} {...props} />

        {/* // * r3f.in 注册的部分 */}
        <Three>
          {/*  // * Views use gl.scissor to cut the viewport into segments. You tie a view to a tracking div which then controls the position and bounds of the viewport. This allows you to have multiple views with a single, performant canvas. These views will follow their tracking elements, scroll along, resize, etc.
           */}
          <ViewImpl
            // *   The tracking element, the view will be cut according to its whereabouts */
            track={localRef}
          >
            {children}
            <OrbitControls autoRotate={orbit} />
          </ViewImpl>
        </Three>
      </>
    );
  }
);
View.displayName = "View";

export { View };

"use client";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Box, Spinner } from "@chakra-ui/react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "@/lib/model";

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const RotateDog = () => {
  const refContainer = useRef<HTMLDivElement>();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();
  const urlDogGLB =
    (process.env.NODE_ENV === "production"
      ? "https://craftzdog.global.ssl.fastly.net/homepage"
      : "") + "/dog.glb";

  const [renderer, setRenderer] =
    useState<THREE.WebGLRenderer>();
  const [_camera, setCamera] = useState();
  const [target] = useState(
    () => new THREE.Vector3(-0.5, 1.2, 0)
  );
  const [initialCameraPosition] = useState(
    () =>
      new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )
  );
  const [scene] = useState(() => new THREE.Scene());
  const [_controls, setControls] =
    useState<OrbitControls>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
    // * 因为一开始render是 null, 用了callback 就不会更新了， 所以要把renderer加进来 更新这个 useCallback fn
  }, [renderer]);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      // * if no canvas link, will make an canvas ele
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      console.log(target, initialCameraPosition, renderer);
      // 640 -> 240
      // 8 ->6
      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(
        0xcccccc,
        1
      );
      scene.add(ambientLight);

      const controls = new OrbitControls(
        camera,
        renderer.domElement
      );
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, "/dog.glb", {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed =
            -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) +
            p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) -
            p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }
        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();

        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener(
      "resize",
      handleWindowResize,
      false
    );
    return () => {
      window.removeEventListener(
        "resize",
        handleWindowResize,
        false
      );
    };
  }, [handleWindowResize]);

  /* eslint-disable react-hooks/exhaustive-deps */
  // useEffect(() => {
  //   const { current: container } = refContainer;
  //   if (container) {
  //     const scW = container.clientWidth;
  //     const scH = container.clientHeight;

  //     const renderer = new THREE.WebGLRenderer({
  //       antialias: true,
  //       alpha: true,
  //     });
  //     renderer.setPixelRatio(window.devicePixelRatio);
  //     renderer.setSize(scW, scH);
  //     renderer.outputEncoding = THREE.sRGBEncoding;
  //     container.appendChild(renderer.domElement);
  //     refRenderer.current = renderer;
  //     const scene = new THREE.Scene();

  //     const target = new THREE.Vector3(-0.5, 1.2, 0);
  //     const initialCameraPosition = new THREE.Vector3(
  //       20 * Math.sin(0.2 * Math.PI),
  //       10,
  //       20 * Math.cos(0.2 * Math.PI)
  //     );

  //     // 640 -> 240
  //     // 8   -> 6
  //     const scale = scH * 0.005 + 4.8;
  //     const camera = new THREE.OrthographicCamera(
  //       -scale,
  //       scale,
  //       scale,
  //       -scale,
  //       0.01,
  //       50000
  //     );
  //     camera.position.copy(initialCameraPosition);
  //     camera.lookAt(target);

  //     const ambientLight = new THREE.AmbientLight(
  //       0xcccccc,
  //       1
  //     );
  //     scene.add(ambientLight);

  //     const controls = new OrbitControls(
  //       camera,
  //       renderer.domElement
  //     );
  //     controls.autoRotate = true;
  //     controls.target = target;

  //     loadGLTFModel(scene, urlDogGLB, {
  //       receiveShadow: false,
  //       castShadow: false,
  //     }).then(() => {
  //       animate();
  //       setLoading(false);
  //     });

  //     let req = null;
  //     let frame = 0;
  //     const animate = () => {
  //       req = requestAnimationFrame(animate);

  //       frame = frame <= 100 ? frame + 1 : frame;

  //       if (frame <= 100) {
  //         const p = initialCameraPosition;
  //         const rotSpeed =
  //           -easeOutCirc(frame / 120) * Math.PI * 20;

  //         camera.position.y = 10;
  //         camera.position.x =
  //           p.x * Math.cos(rotSpeed) +
  //           p.z * Math.sin(rotSpeed);
  //         camera.position.z =
  //           p.z * Math.cos(rotSpeed) -
  //           p.x * Math.sin(rotSpeed);
  //         camera.lookAt(target);
  //       } else {
  //         controls.update();
  //       }

  //       renderer.render(scene, camera);
  //     };

  //     return () => {
  //       cancelAnimationFrame(req);
  //       renderer.domElement.remove();
  //       renderer.dispose();
  //     };
  //   }
  // }, []);
  return (
    <Box
      ref={refContainer}
      className="rotate-dog"
      m="auto"
      mt={["-20px", "-60px", "-120px"]}
      mb={["-40px", "-140px", "-200px"]}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size))"
        ></Spinner>
      )}
    </Box>
  );
};

export default RotateDog;

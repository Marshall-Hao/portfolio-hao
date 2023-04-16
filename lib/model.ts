import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      // * success callback
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "dog";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        console.log(obj);
        console.log(scene);
        scene.add(obj);

        // * .travers will check all childs, and childs of a child
        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      // * progress callback
      undefined,
      // * error callback
      function (error) {
        reject(error);
      }
    );
  });
}

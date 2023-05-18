
attribute vec3 aRandom;
uniform float time;
uniform float uScale;

varying vec3 vPosition;

void main() {	
  vPosition = position;
  float t = time * 4.0;
  vec3 pos= position;
  pos.x += sin(t * aRandom.x) * 0.01;
  pos.y += cos(t * aRandom.y) * 0.01;
  pos.z += cos(t* aRandom.z) * 0.01;

  pos.x *= uScale + sin(pos.y * 4.0  + t) * (1.0 - uScale);
  pos.y *= uScale + cos(pos.z * 4.0  + t) * (1.0 - uScale);
  pos.z *= uScale + cos(pos.x * 4.0  + t) * (1.0 - uScale);

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

  gl_Position = projectionMatrix * mvPosition;

  gl_PointSize = 16.0 / -mvPosition.z;


}
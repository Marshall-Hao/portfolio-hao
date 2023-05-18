varying vec3 vPosition;
uniform vec3 colorOne;
uniform vec3 colorTwo;

void main() {
  vec3 color = vPosition;

  // vec3 color1 = vec3(	98.4, 82.7, 55.3) / 256.0;
  // vec3 color2 = vec3(	50.2, 35.3, 83.5) / 256.0;
  float depth = vPosition.z * 0.5 + 0.5;
  color = mix(colorOne,colorTwo,depth);

  gl_FragColor = vec4(color,depth * 0.3 + 0.2);
}
export const vertexShader = `
  uniform float uTime;
  uniform float uHover;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vUv = uv;
    vec3 p = position;
    float wave = sin(p.y * 3.0 + uTime * 0.8) * 0.08;
    wave += cos(p.x * 2.0 - uTime * 0.6) * 0.05;
    p.z += wave + uHover * 0.18;
    vWave = wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

export const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    float edge = smoothstep(0.0, 0.45, 1.0 - length(vUv - 0.5) * 1.8);
    float pulse = 0.55 + 0.45 * sin(uTime * 1.4 + vUv.x * 5.0);
    vec3 cyan = vec3(0.20, 0.88, 1.0);
    vec3 violet = vec3(0.45, 0.18, 1.0);
    vec3 color = mix(cyan, violet, smoothstep(0.1, 0.9, vUv.y));
    float alpha = edge * (0.35 + pulse * 0.4) + abs(vWave) * 1.8;
    gl_FragColor = vec4(color, alpha);
  }
`;

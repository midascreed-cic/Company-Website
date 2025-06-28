"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"
import { Color } from "three"

export function Stars() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100 + 25
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color="#ffffff" size={0.1} sizeAttenuation={true} depthWrite={false} />
    </Points>
  )
}

export function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new Color("#000000") }, // Changed from blue to black
      uColorB: { value: new Color("#000000") }, // Changed from white to black
    }),
    [],
  )

  const vertexShader = `
    varying vec2 vUv;
    varying float vElevation;
    uniform float uTime;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
              -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vUv = uv;
      
      vec3 pos = position;
      float noiseFreq = 1.5;
      float noiseAmp = 0.8;
      vec2 noiseCoord = vec2(pos.x * noiseFreq + uTime * 0.3, pos.z * noiseFreq - uTime * 0.3);
      float noise = snoise(noiseCoord) * noiseAmp;
      
      pos.y += noise;
      vElevation = noise;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `

  const fragmentShader = `
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      float gridX = mod(vUv.x * 50.0, 1.0);
      float gridY = mod(vUv.y * 50.0, 1.0);
      
      float grid = max(
        smoothstep(0.95, 0.95, gridX),
        smoothstep(0.95, 0.95, gridY)
      );
      
      vec3 color = mix(uColorA, uColorB, vElevation * 0.5 + 0.5);
      vec3 finalColor = mix(vec3(0.0), color, grid);
      
      gl_FragColor = vec4(finalColor, grid * 0.5);
    }
  `

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    }
    if (meshRef.current) {
      // Adjust rotation and position based on screen width
      const isMobile = window.innerWidth < 768
      meshRef.current.rotation.x = isMobile ? -Math.PI / 2.5 : -Math.PI / 3
      meshRef.current.position.y = isMobile ? -4 : -2
      // Scale down on mobile
      meshRef.current.scale.set(isMobile ? 0.7 : 1, isMobile ? 0.7 : 1, isMobile ? 0.7 : 1)
    }
  })

  return (
    <mesh ref={meshRef} rotation-x={-Math.PI / 3} position-y={-2} scale={[1, 1, 1]}>
      <planeGeometry args={[30, 30, 100, 100]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        wireframe
      />
    </mesh>
  )
}

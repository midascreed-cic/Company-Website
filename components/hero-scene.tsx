"use client"

import { Canvas } from "@react-three/fiber"
import { Stars, Terrain } from "./terrain-background"

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        dpr={[1, 2]} // Optimize for mobile by limiting device pixel ratio
        resize={{ scroll: false, offsetSize: true }} // Better handling of resize events
      >
        <color attach="background" args={["#000000"]} />
        <Stars />
        <Terrain />
      </Canvas>
    </div>
  )
}

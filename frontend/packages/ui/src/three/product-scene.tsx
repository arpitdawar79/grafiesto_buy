"use client"
import * as React from "react"

/**
 * ProductScene — a 3D floating product card with glass reflection.
 * Uses React Three Fiber + Drei for a premium interactive experience.
 *
 * Lazy-loaded and wrapped in Suspense in the consumer.
 */

let Canvas: any, Float: any, Environment: any, Image: any, RoundedBox: any, useTexture: any, MeshDistortMaterial: any

try {
  const fiber = require("@react-three/fiber")
  const drei = require("@react-three/drei")
  Canvas = fiber.Canvas
  Float = drei.Float
  Environment = drei.Environment
  Image = drei.Image
  RoundedBox = drei.RoundedBox
  MeshDistortMaterial = drei.MeshDistortMaterial
} catch {
  /* R3F not available — fallback gracefully */
}

function ProductMesh({ imageUrl }: { imageUrl: string }) {
  const meshRef = React.useRef<any>(null)

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8} floatingRange={[-0.1, 0.1]}>
      <group ref={meshRef}>
        {/* Product card with rounded corners */}
        {RoundedBox && (
          <RoundedBox args={[2.4, 3.2, 0.08]} radius={0.12} smoothness={4}>
            <meshPhysicalMaterial
              color="#ffffff"
              roughness={0.15}
              metalness={0.05}
              clearcoat={1}
              clearcoatRoughness={0.1}
              transmission={0.1}
              thickness={0.5}
            />
          </RoundedBox>
        )}
        {/* Product image plane */}
        {Image && (
          <Image
            url={imageUrl}
            scale={[2, 2.6]}
            position={[0, 0, 0.06]}
            transparent
            opacity={0.95}
          />
        )}
        {/* Glow sphere behind */}
        <mesh position={[0, 0, -0.5]} scale={1.8}>
          <sphereGeometry args={[1, 32, 32]} />
          {MeshDistortMaterial && (
            <MeshDistortMaterial
              color="hsl(var(--primary))"
              speed={2}
              distort={0.3}
              radius={1}
              transparent
              opacity={0.08}
            />
          )}
        </mesh>
      </group>
    </Float>
  )
}

export interface ProductSceneProps {
  imageUrl: string
  className?: string
  height?: string
}

export function ProductScene({ imageUrl, className, height = "500px" }: ProductSceneProps) {
  if (!Canvas) {
    return (
      <div className={className} style={{ height }}>
        <img src={imageUrl} alt="" className="h-full w-full object-contain" />
      </div>
    )
  }

  return (
    <div className={className} style={{ height }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, -3, 2]} intensity={0.5} color="#e2a0ff" />
        <React.Suspense fallback={null}>
          <ProductMesh imageUrl={imageUrl} />
          {Environment && <Environment preset="city" />}
        </React.Suspense>
      </Canvas>
    </div>
  )
}

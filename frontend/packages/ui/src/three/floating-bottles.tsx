"use client"
import * as React from "react"

/**
 * FloatingBottles — a hero 3D scene with multiple product bottles floating in space.
 * Uses React Three Fiber + Drei. Falls back to static layout when R3F is unavailable.
 */

let Canvas: any, Float: any, Environment: any, PresentationControls: any, Image: any, Sparkles: any

try {
  const fiber = require("@react-three/fiber")
  const drei = require("@react-three/drei")
  Canvas = fiber.Canvas
  Float = drei.Float
  Environment = drei.Environment
  PresentationControls = drei.PresentationControls
  Image = drei.Image
  Sparkles = drei.Sparkles
} catch {}

function Bottle({ url, position, rotation, scale }: { url: string; position: [number, number, number]; rotation?: [number, number, number]; scale?: number }) {
  if (!Float || !Image) return null
  return (
    <Float speed={1 + Math.random()} rotationIntensity={0.3} floatIntensity={0.6}>
      <group position={position} rotation={rotation ?? [0, 0, 0]} scale={scale ?? 1}>
        <Image url={url} scale={[1.2, 1.8]} transparent opacity={0.95} />
      </group>
    </Float>
  )
}

export interface FloatingBottlesProps {
  images: string[]
  className?: string
  height?: string
}

export function FloatingBottles({ images, className, height = "600px" }: FloatingBottlesProps) {
  if (!Canvas) {
    return (
      <div className={className} style={{ height, position: "relative" }}>
        {images.slice(0, 3).map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="absolute animate-float rounded-lg shadow-2xl"
            style={{
              width: "30%",
              left: `${15 + i * 25}%`,
              top: `${10 + (i % 2) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    )
  }

  const positions: [number, number, number][] = [
    [-2.2, 0.3, 0],
    [0, -0.2, 0.5],
    [2.2, 0.5, -0.3],
    [-1, 1.5, -1],
    [1.5, -1.2, -0.5],
  ]

  return (
    <div className={className} style={{ height }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-5, 5, 5]} intensity={0.4} color="#ff9ec4" />
        <pointLight position={[5, -5, 3]} intensity={0.3} color="#7c9aff" />
        <React.Suspense fallback={null}>
          {PresentationControls ? (
            <PresentationControls
              global
              rotation={[0, 0, 0]}
              polar={[-0.2, 0.2]}
              azimuth={[-0.4, 0.4]}
              speed={1.5}
            >
              {images.slice(0, 5).map((img, i) => (
                <Bottle
                  key={i}
                  url={img}
                  position={positions[i] ?? [0, 0, 0]}
                  rotation={[0, (i - 2) * 0.15, (i % 2 === 0 ? 0.05 : -0.05)]}
                  scale={0.8 + (i === 1 ? 0.3 : 0)}
                />
              ))}
            </PresentationControls>
          ) : (
            images.slice(0, 5).map((img, i) => (
              <Bottle
                key={i}
                url={img}
                position={positions[i] ?? [0, 0, 0]}
                scale={0.8}
              />
            ))
          )}
          {Sparkles && <Sparkles count={60} scale={8} size={2} speed={0.4} opacity={0.3} />}
          {Environment && <Environment preset="sunset" />}
        </React.Suspense>
      </Canvas>
    </div>
  )
}

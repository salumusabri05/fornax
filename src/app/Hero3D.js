"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';


function RotatingSphere() {
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.005;
      mesh.current.rotation.x += 0.001;
    }
  });
  return (
    <mesh ref={mesh} castShadow>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshStandardMaterial color="#A855F7" emissive="#6A0DAD" emissiveIntensity={1.2} metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: '100vw', height: '60vh', position: 'relative', background: '#F8F8F9', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 7] }} shadows>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Stars radius={12} depth={60} count={1800} factor={6} saturation={1} fade speed={2} />
        {/* Removed RotatingSphere for a cleaner hero background */}
      </Canvas>
      {/* Floating 3D shapes and neon effects can be added here later */}
    </div>
  );
}

"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Globe() {
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.003;
    }
  });
  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial color="#8f5cff" emissive="#c084fc" emissiveIntensity={0.5} />
    </mesh>
  );
}

export default function Globe3D() {
  return (
    <div style={{ width: '100%', height: '420px', background: 'linear-gradient(90deg, #f6f2ff 60%, #e9d5ff 100%)', borderRadius: '24px', boxShadow: '0 4px 24px rgba(143,92,255,0.12)', margin: '32px 0' }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <Stars radius={6} depth={40} count={1200} factor={4} saturation={0.8} fade speed={2} />
        <Globe />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

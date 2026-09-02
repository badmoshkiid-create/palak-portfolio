import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  "Python", "R", "Power BI", "SQL", "ML", "Excel",
  "Strategy", "Research", "Design Thinking"
];

function Node({ position, label }: { position: [number, number, number], label: string }) {
  const textRef = useRef<any>(null);
  
  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#2563EB" emissive="#38BDF8" emissiveIntensity={0.5} />
      </mesh>
      <Text
        ref={textRef}
        position={[0, 0.3, 0]}
        fontSize={0.2}
        color="#0F172A"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#ffffff"
      >
        {label}
      </Text>
    </group>
  );
}

function OrbitingNodes() {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    return skills.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      
      const r = 2.5; // radius
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);
      
      return { position: [x, y, z] as [number, number, number], label: skill };
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial color="#F8FAFC" transparent opacity={0.6} roughness={0.1} />
      </Sphere>
      {nodes.map((node, i) => (
        <Node key={i} position={node.position} label={node.label} />
      ))}
      {/* Connecting lines could be added here, but keeping it simple/lightweight for now */}
    </group>
  );
}

export default function SkillsOrb() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} className="w-full h-full pointer-events-none">
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#38BDF8" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2563EB" />
      <OrbitingNodes />
    </Canvas>
  );
}

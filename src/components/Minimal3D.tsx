import { Canvas } from '@react-three/fiber';
import { Sparkles, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

function OrganicBlob() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[2.5, 64, 64]} position={[3, 0, -8]}>
        <MeshDistortMaterial
          color="#e0f2fe"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={1}
          transparent={true}
          opacity={0.5}
        />
      </Sphere>
      <Sphere args={[2, 64, 64]} position={[-3, -2, -10]}>
        <MeshDistortMaterial
          color="#ffedd5"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={1}
          transparent={true}
          opacity={0.4}
        />
      </Sphere>
    </Float>
  );
}

export default function Minimal3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={2} />
        <OrganicBlob />
        <Sparkles count={50} scale={15} size={2.5} speed={0.3} opacity={0.4} color="#38BDF8" />
        <Sparkles count={30} scale={15} size={3.5} speed={0.2} opacity={0.3} color="#fb923c" />
      </Canvas>
    </div>
  );
}

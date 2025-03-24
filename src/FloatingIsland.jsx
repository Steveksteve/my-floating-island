import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const FloatingIsland = () => {
  return (
    <Canvas camera={{ position: [0, 5, 10] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />
      <Island />
    </Canvas>
  );
};

const Island = () => {
  const islandRef = useRef();

  useFrame(() => {
    if (islandRef.current) {
      islandRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={islandRef} position={[0, -1, 0]}>
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[3, 6, 2, 32]} />
        <meshStandardMaterial color="saddlebrown" />
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
};

export default FloatingIsland;

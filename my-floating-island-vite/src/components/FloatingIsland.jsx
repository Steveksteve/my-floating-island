// src/components/FloatingIsland.jsx
import React from 'react';
import { Canvas, PerspectiveCamera } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Plateau from './Plateau';
import Chateau from './Chateau';
import Arbre from './Arbre';
import Cristal from './Cristal';

function FloatingIsland() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <PerspectiveCamera position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Plateau />
        <Chateau />
        <Arbre />
        <Cristal />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default FloatingIsland;
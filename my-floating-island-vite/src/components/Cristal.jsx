// src/Cristal.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Cristal() {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh ref={mesh} position={[2, 1, 2]}>
      <tetrahedronGeometry args={[0.5]} />
      <meshStandardMaterial color="aqua" />
    </mesh>
  );
}

export default Cristal;
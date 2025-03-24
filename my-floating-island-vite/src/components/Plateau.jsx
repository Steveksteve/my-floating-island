// src/Plateau.jsx
import React from 'react';

function Plateau() {
  return (
    <mesh position={[0, -1, 0]}>
      <boxGeometry args={[5, 1, 5]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
}

export default Plateau;
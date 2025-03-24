// src/Arbre.jsx
import React from 'react';

function Arbre() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[0.3, 1, 32]} />
        <meshStandardMaterial color="brown" />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
}

export default Arbre;
// src/Chateau.jsx
import React from 'react';

function Chateau() {
  return (
    <mesh position={[0, 1, 0]}>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
}

export default Chateau;
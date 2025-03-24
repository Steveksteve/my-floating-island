import React, { useEffect } from 'react';
import * as THREE from 'three';

const FloatingIsland = () => {
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Adding a floating island model (simple geometry for now)
    const geometry = new THREE.CylinderGeometry(5, 5, 1, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const island = new THREE.Mesh(geometry, material);
    scene.add(island);

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      island.rotation.x += 0.01;
      island.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // FloatingIsland doesn't return any JSX, just 3D scene
};

export default FloatingIsland;

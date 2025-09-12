// src/app/components/FloatingComputerScene.js
'use client'

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import FloatingPc from './FloatingPc';

function FloatingPcWrapper() {
  const modelRef = useRef();
  // Load the GLB file from /models/3dComputer.glb
  const { scene } = useGLTF('/models/3dComputer.glb');
  const [scrollOffset, setScrollOffset] = useState(0);

  // Listen to scroll events to update the scroll offset state.
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate the model based on the mouse movement and scroll offset.
  useFrame((state, delta) => {
    if (modelRef.current) {
      const { mouse } = state; // normalized values between -1 and 1

      modelRef.current.rotation.y = mouse.x * (Math.PI / 2) + scrollOffset * 0.0002;
      modelRef.current.rotation.x = mouse.y * (Math.PI / 2);
    }
  });

  return (
    <group ref={modelRef} scale={[0.3, 0.3, 0.3]}>
      <primitive object={scene} />
    </group>
  );
}

export default function FloatingComputerScene() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render the 3D scene on the client side to avoid SSR issues
  if (!isClient) {
    return (
      <div style={{ 
        height: '100%', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#666',
        fontSize: '14px'
      }}>
        Loading 3D Model...
      </div>
    );
  }

  return (
    <Canvas
      style={{ height: '100%', width: '100%' }}
      camera={{ position: [1, 1, 10], fov: 50 }}
    >
      {/* Lighting Setup */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Render the model with both mouse and scroll-based rotation */}
      <FloatingPcWrapper />

      {/* Uncomment the line below to allow additional manual control via mouse if desired */}
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
}

// Preload the model to speed up future loads.
useGLTF.preload('/models/3dComputer.glb');

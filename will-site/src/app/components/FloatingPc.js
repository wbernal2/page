
'use client'

import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

export default function FloatingPc() {
  const computerRef = useRef();
  // Load the GLB model; ensure the file path matches your public folder structure.
  const { scene } = useGLTF('/Models/3dComputer.glb');
  
  // useThree gives us access to global state – including mouse position.
  const { mouse } = useThree();

  // Update the rotation on each frame based on cursor position.
  useFrame((state, delta) => {
    // You can tweak multiplier values for smoother or more pronounced movement.
    if (computerRef.current) {
      // Map mouse values (ranging between -1 and 1) to rotation angles.
      computerRef.current.rotation.y = mouse.x * Math.PI * 0.5;
      computerRef.current.rotation.x = mouse.y * Math.PI * 0.5;
    }
  });

  return <primitive ref={computerRef} object={scene} />;
}

// Preload the model so it is cached.
useGLTF.preload('/Models/3dComputer.glb');

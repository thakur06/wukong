import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';

// GLTF Model Component
function Model({ url }) {
  const modelRef = useRef();
  
  try {
    const { scene } = useGLTF(url);
    
    useEffect(() => {
      if (modelRef.current) {
        gsap.to(modelRef.current.rotation, {
          y: Math.PI * 2,
          duration: 5,
          repeat: -1,
          ease: 'power1.inOut',
        });
      }
    }, []);

    return <primitive ref={modelRef} object={scene} scale={[3, 3, 3]} />;
  } catch (error) {
    console.error('GLTF Loading Error:', error);
    return <FallbackCube />;
  }
}

// Fallback Component (for loading or error state)
function FallbackCube() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

// Scene Component
function Scene() {
  const pointLightRef = useRef();

  useEffect(() => {
    if (pointLightRef.current) {
      gsap.to(pointLightRef.current.position, {
        x: -10,
        y: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={1.2} />
        <pointLight ref={pointLightRef} color="#ff4500" intensity={2} position={[5, 5, 5]} />
        <fog attach="fog" args={['#1a1a1a', 5, 20]} />
        
        <Suspense fallback={<FallbackCube />}>
          <Model url="/wukong.glb" />
        </Suspense>

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

export default Scene;

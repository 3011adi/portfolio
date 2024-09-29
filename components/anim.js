"use client";
import React, { useRef, useEffect } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const group = useRef();
  const { scene, animations } = useGLTF('/adisetup23.glb');
  const { actions, names } = useAnimations(animations, group);
  const scroll = useScroll();

  useEffect(() => {
    if (!animations || !names.length) {
      console.error("No animations found in the model.");
      return;
    }
    console.log('Available animations:', names);

    // Initialize all animations
    names.forEach((name) => {
      const action = actions[name];
      if (action) {
        action.reset().play();
        action.paused = true;
      }
    });
  }, [actions, names, animations]);

  useFrame(() => {
    const scrollProgress = scroll.offset;
    names.forEach((name) => {
      const action = actions[name];
      if (action) {
        // Set the animation progress based on scroll
        action.time = action.getClip().duration * scrollProgress;
      }
    });
  });

  return <primitive object={scene} ref={group} />;
};

const CameraSetup = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(16, 18, 12);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
};

const Scene = () => {
  return (
    <>
      <CameraSetup />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Model />
     
    </>
  );
};

const Anim = () => {
  return (
    <Canvas className=''  >
      <ambientLight  />
      <ScrollControls pages={3} damping={0.25}>
        <Scene />
      </ScrollControls>
    </Canvas>
  );
};

export default Anim;
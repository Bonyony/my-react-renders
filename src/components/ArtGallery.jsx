import React from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import {
  OrbitControls,
  useTexture,
  useGLTF,
  Billboard,
  Text,
  Html,
  Environment,
} from "@react-three/drei";

const Art = () => {
  const map = useTexture("/img/lookingGlass.jpeg");
  const model = useGLTF("/models/netsuke_-_snake_curled_around_a_turtle.glb");

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      {/* snake + turtle render */}
      <mesh>
        <primitive object={model.scene} scale={1} position-y={-1} />
      </mesh>

      <mesh>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

const ArtGallery = () => {
  return (
    // May need to add fov to this camera argument, ex: {position:[1,1,1], fov:45}
    <Canvas shadows camera={{ position: [0, 0, 10] }}>
      <Art />
    </Canvas>
  );
};

export default ArtGallery;

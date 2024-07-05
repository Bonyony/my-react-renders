import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Clone,
  PositionalAudio,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import {
  MeshStandardMaterial,
  DoubleSide,
  AudioLoader,
  AudioListener,
} from "three";

// Boombox by Poly by Google [CC-BY] via Poly Pizza

const Plane = ({ position, size, color }) => {
  return (
    <mesh position={position} rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={size} />
      <meshStandardMaterial color={color} side={DoubleSide} />
    </mesh>
  );
};

const SoundDemo = () => {
  const model = useGLTF("/models/Boombox.glb");
  //   const song =

  return (
    <Canvas camera={{ position: [2, 2, 4] }}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      {/* <AudioListener />
      <AudioLoader /> */}
      <PositionalAudio
        url="/sounds/01 - UW.MountainPassageRemix.mp3"
        distance={40}
        loop
      />

      <Plane position={[0, 0, 0]} size={[25, 25]} color={"blue"} />
      <primitive object={model.scene} scale={4} />
    </Canvas>
  );
};

export default SoundDemo;

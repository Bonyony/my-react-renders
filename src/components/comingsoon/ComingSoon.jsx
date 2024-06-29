import React, { useRef, useState } from "react";
import "./comingsoon.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Pedestal = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <cylinderGeometry args={size} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

const ComingSoon = () => {
  return (
    <Canvas camera={{ position: [0, 0, 17] }}>
      <directionalLight position={[0, 0, 2]} intensity={0.3} />
      <ambientLight intensity={1} />
      <Pedestal position={[0, 0, 0]} size={[2, 2, 5, 20]} />
      <OrbitControls makeDefault={true} />
    </Canvas>
  );
};

export default ComingSoon;

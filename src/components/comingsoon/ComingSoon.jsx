import React, { useRef, useState } from "react";
import "./comingsoon.css";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import { OrbitControls, Text } from "@react-three/drei";
import { DoubleSide } from "three";

const Pedestal = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <cylinderGeometry args={size} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

const Plane = ({ position, size, color }) => {
  return (
    <mesh position={position} rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={size} />
      <meshStandardMaterial color="violet" side={DoubleSide} />
    </mesh>
  );
};

const Ring = ({ position, size }) => {
  return (
    <mesh position={position}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};

// const Text = ({ position, size }) => {
//   return (
//     <mesh position={position}>
//       <TextGeometry args={size} />
//       <meshStandardMaterial color="violet" side={DoubleSide} />
//     </mesh>
//   );
// };

function RotatingText() {
  const textRef = useRef();
  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Text ref={textRef} position={[0, 6, 0]} color={0xfff000} scale={2}>
      COMING SOON
    </Text>
  );
}

const ComingSoon = () => {
  return (
    <Canvas camera={{ position: [0, 7, 17] }}>
      <RotatingText />
      <directionalLight position={[2, 10, 2]} intensity={0.8} />
      <ambientLight intensity={1} />
      {/* Remember that shapes originate at the center from their position */}
      <Pedestal id={"base"} position={[0, 0, 0]} size={[2, 2, 5, 20]} />
      <Pedestal id={"top"} position={[0, 3.5, 0]} size={[4, 2, 2, 20]} />
      <Ring position={[0, 0, 1.9]} size={[1, 0.2, 15, 15]} />
      <Plane position={[0, -2.5, 0]} size={[15, 15]} />
      <OrbitControls makeDefault={true} />
    </Canvas>
  );
};

export default ComingSoon;

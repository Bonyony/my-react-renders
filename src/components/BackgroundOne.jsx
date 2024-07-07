import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = ({ position, size, color, factor }) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.z =
      (Math.tan(state.clock.elapsedTime / 8) * factor) / 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[3, 20, 3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position, size, color, factor }) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.x = Math.sin(state.clock.elapsedTime / 4) * factor * 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const BackgroundOne = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 25, 0] }}>
        <ambientLight intensity={0.8} />
        <directionalLight intensity={1} position={[0, 20, 5]} />
        {/* Cubes positive */}
        <Cube position={[-15, 0, 0]} color={"snow"} factor={15} />
        <Cube position={[-20, 0, 0]} color={"orange"} factor={10} />
        <Cube position={[-10, 0, 0]} color={"lightblue"} factor={20} />
        {/* Cubes negative */}
        <Cube position={[15, 0, 0]} color={"snow"} factor={15} />
        <Cube position={[20, 0, 0]} color={"orange"} factor={10} />
        <Cube position={[10, 0, 0]} color={"lightblue"} factor={20} />

        {/* Spheres */}
        {/* <Sphere
            position={[4, -5, 0]}
            size={[2, 30, 30]}
            color={"yellow"}
            factor={15}
          />
          <Sphere
            position={[4, -5, 5]}
            size={[2, 30, 30]}
            color={"violet"}
            factor={20}
          />
          <Sphere
            position={[4, -5, -5]}
            size={[2, 30, 30]}
            color={"green"}
            factor={25}
          /> */}
      </Canvas>
    </>
  );
};

export default BackgroundOne;

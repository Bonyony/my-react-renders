import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Cube = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3;
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed;

    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3;
  });
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "green" : "violet"} wireframe />
    </mesh>
  );
};

const Torus = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const TorusKnot = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3;
  });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
const DemoPage = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.3} />
      <ambientLight intensity={0.1} />

      {/* <group position={[0, -1, 0]}>
      <Cube position={[1, 0, 0]} color={"lightGreen"} size={[1, 1, 1]} />
      <Cube position={[-1, 0, 0]} color={"hotpink"} size={[1, 1, 1]} />
      <Cube position={[-1, 2, 0]} color={"orange"} size={[1, 1, 1]} />
    </group> */}

      {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"lightGreen"} /> */}
      <Sphere position={[0, 0, 3]} args={[1, 30, 30]} color={"violet"} />
      {/* <Torus position={[2, 0, 2]} size={[1, 0.1, 30, 30]} color={"white"} /> */}
      {/* <TorusKnot
      position={[-2, 0, 0]}
      size={[0.5, 0.1, 1000, 50]}
      color={"hotpink"}
    /> */}
    </Canvas>
  );
};

export default DemoPage;

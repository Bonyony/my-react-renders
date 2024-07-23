import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";

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
    const speed = isHovered ? 0.7 : 0.2;
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
      scale={isClicked ? 1 : 0.5}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "violet" : color} wireframe />
    </mesh>
  );
};

const Torus = ({ position, size, color, rotation, factor }) => {
  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    // const speed = isHovered ? 0.7 : 0.2;
    ref.current.rotation.x += delta * 0.2 * factor;
    ref.current.rotation.y += delta * 0.2 * factor;
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3;
  });

  return (
    <mesh
      position={position}
      rotation={rotation}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
    >
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const DemoPage = () => {
  return (
    <Canvas camera={{ position: [0, 1, 4] }} style={{ background: "black" }}>
      <Stars />
      <directionalLight position={[0, 0, 2]} intensity={1} />
      <ambientLight intensity={0.5} />

      <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color={"white"} />
      <Torus
        position={[0, 0, 0]}
        size={[2, 0.1, 30, 30]}
        color={"lightblue"}
        factor={1 * Math.random()}
        rotation={[2, -Math.PI / 2 - 4, 0]}
      />
      <Torus
        position={[0, 0, 0]}
        size={[2.2, 0.1, 30, 30]}
        color={"lightblue"}
        rotation={[-1.5, -Math.PI / 2 - 4, 0]}
        factor={Math.random()}
      />
      <Torus
        position={[0, 0, 0]}
        size={[1.8, 0.1, 30, 30]}
        color={"lightblue"}
        rotation={[-Math.PI / 2 - 5.99, 0, 0]}
        factor={2.5 * Math.random()}
      />

      <OrbitControls enableZoom={false} makeDefault={true} />
      <Text
        font={"/fonts/Roboto-Regular.ttf"}
        position={[-8, 1.3, -7]}
        color={0xfff000}
        scale={2}
        rotation={[0, 1, 0]}
      >
        React{"\n"}3D{"\n"}Renders
      </Text>
      <Text
        font={"/fonts/Roboto-Regular.ttf"}
        position={[6, -2.5, -3]}
        color={0xfff000}
        scale={2}
        rotation={[0, -1, 0]}
      >
        React{"\n"}Logo
      </Text>
    </Canvas>
  );
};

export default DemoPage;

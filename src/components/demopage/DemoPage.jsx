import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshWobbleMaterial, Stars } from "@react-three/drei";

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
      <meshStandardMaterial color={isHovered ? "violet" : color} />
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

const TorusKnot = ({ position, size, color }) => {
  //   const ref = useRef();
  //   useFrame((state, delta) => {
  //     ref.current.rotation.x += delta;
  //     ref.current.rotation.y += delta;
  //     ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3;
  //   });
  return (
    <mesh
      position={position}
      //  ref={ref}
    >
      <torusKnotGeometry args={size} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial factor={1.2} speed={2} />
    </mesh>
  );
};

// camera={{ position: [0, 2, 4] }}

const DemoPage = () => {
  return (
    <Canvas camera={{ position: [0, 1, 4] }} style={{ background: "black" }}>
      <Stars />
      <directionalLight position={[0, 0, 2]} intensity={1} />
      <ambientLight intensity={0.5} />

      {/* <group position={[0, -1, 0]}>
      <Cube position={[1, 0, 0]} color={"lightGreen"} size={[1, 1, 1]} />
      <Cube position={[-1, 0, 0]} color={"hotpink"} size={[1, 1, 1]} />
      <Cube position={[-1, 2, 0]} color={"orange"} size={[1, 1, 1]} />
    </group> */}

      {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"lightGreen"} /> */}
      <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color={"darkblue"} />
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

      {/* <TorusKnot
        position={[0, 0, 0]}
        size={[0.5, 0.1, 1000, 50]}
        color={"hotpink"}
      /> */}
      <OrbitControls enableZoom={false} makeDefault={true} />
    </Canvas>
  );
};

export default DemoPage;

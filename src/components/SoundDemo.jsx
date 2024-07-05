import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Billboard,
  PositionalAudio,
  Text,
  Html,
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

const PlayButton = () => {
  return (
    <button className="font-bold p-1 rounded-md border-black border-2 bg-yellow-300 text-black hover:bg-blue-900 hover:text-white transition-all duration-200">
      PLAY!
    </button>
  );
};

const SoundDemo = () => {
  const model = useGLTF("/models/Boombox.glb");
  //   const song =

  return (
    <Canvas camera={{ position: [0, 7, 12] }}>
      <ambientLight intensity={0.5} />
      <OrbitControls />

      <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Text position={[12, 7, 0]} color={"black"} fontSize={1}>
          "Pssst, hit the play button..."
        </Text>
        <Text position={[20, 4, 0]} color={"black"} fontSize={1}>
          "Then zoom in and out..."
        </Text>
      </Billboard>

      <mesh position={[-8, 7.5, 0]}>
        <Html
          occlude={true}
          as="div" // Wrapping element (default: 'div')
          distanceFactor={35}
        >
          <PlayButton />
        </Html>
      </mesh>

      {/* <AudioListener /> */}

      <PositionalAudio
        url="/sounds/01 - UW.MountainPassageRemix.mp3"
        distance={20}
        loop
      />

      <Plane position={[0, 0, 0]} size={[15, 15]} color={"blue"} />

      <primitive object={model.scene} scale={3} />
    </Canvas>
  );
};

export default SoundDemo;

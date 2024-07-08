import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Billboard,
  PositionalAudio,
  Text,
  Html,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DoubleSide, AudioLoader, AudioListener } from "three";

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
    <button
      onClick={() => console.log("clicked")}
      className="font-bold p-1 rounded-md border-black border-2 bg-yellow-300 text-black hover:bg-blue-900 hover:text-white transition-all duration-200"
    >
      PLAY!
    </button>
  );
};

const SoundDemo = () => {
  const model = useGLTF("/models/Boombox.glb");
  //   const song =

  return (
    <Canvas camera={{ position: [0, 7, 15] }}>
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
        <Text position={[13, 4, 0]} color={"black"} fontSize={1}>
          "Then zoom in and out..."
        </Text>
      </Billboard>

      <mesh position={[-8, 5.5, 0]}>
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
        distance={25}
        play={true}
        hasPlaybackControl={true}
        // autoplay={!true}
      />

      <Plane position={[0, -2, 0]} size={[15, 15]} color={"blue"} />
      {/* <Sparkles scale={3} /> */}

      <primitive object={model.scene} scale={3} position={[0, -2, 0]} />
    </Canvas>
  );
};

export default SoundDemo;

import React from "react";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import {
  OrbitControls,
  useTexture,
  useGLTF,
  Billboard,
  Text,
  Html,
  Environment,
  MeshPortalMaterial,
  RoundedBox,
} from "@react-three/drei";

const Art = () => {
  // const model = useGLTF("/models/netsuke_-_snake_curled_around_a_turtle.glb");
  const model2 = useGLTF("/models/loie_fuller_sculpture_by_joseph_kratina.glb");

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />

      {/* Left */}
      <SeeThru
        texture={"/img/lookingGlass.jpeg"}
        position-x={-4.5}
        rotation-y={Math.PI / 8}
      >
        {/* snake + turtle render */}
        {/* <mesh>
          <primitive object={model.scene} position={[1.5, 0, 0]} scale={5} />
        </mesh> */}
      </SeeThru>
      {/* Statue model */}
      {/* <mesh>
        <primitive
          object={model2.scene}
          position={[0, 0, 3]}
          scale={5}
          position-y={-1}
        />
      </mesh> */}
      {/* Middle */}
      <SeeThru texture={"/img/CoastalBliss.jpg"} position-z={-0.75}></SeeThru>
      {/* Right */}
      <SeeThru
        texture={"/img/HyraxCake.jpg"}
        position-x={4.5}
        rotation-y={-Math.PI / 8}
      ></SeeThru>
    </>
  );
};

const SeeThru = ({ children, texture, ...props }) => {
  const map = useTexture(texture);

  return (
    <group {...props}>
      <Text
        font="/fonts/Roboto-BlackItalic.ttf"
        fontSize={0.3}
        position={[0, -1.3, 0.051]}
        color="orange"
        fontWeight="bold"
      >
        LOOK DEEPER
      </Text>
      <RoundedBox args={[3, 4, 0.1]}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />

          <mesh>
            <sphereGeometry args={[3, 32, 32]} rotateY={Math.PI / 8} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};

const ArtGallery = () => {
  return (
    // May need to add fov to this camera argument, ex: {position:[1,1,1], fov:45}
    <Canvas shadows color="black" camera={{ position: [0, 0, 15], fov: 30 }}>
      <Art />
    </Canvas>
  );
};

export default ArtGallery;

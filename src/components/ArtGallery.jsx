import React from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
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
  const model = useGLTF("/models/netsuke_-_snake_curled_around_a_turtle.glb");
  const model2 = useGLTF("/models/loie_fuller_sculpture_by_joseph_kratina.glb");

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <mesh>
        <primitive
          object={model.scene}
          position={[0, 30, 10]}
          scale={5}
          position-y={-1}
        />
      </mesh>
      <SeeThru
        texture={"/img/lookingGlass.jpeg"}
        position-x={-1.5}
        rotation-y={Math.PI / 8}
      >
        {/* snake + turtle render */}
        <mesh>
          <primitive
            object={model.scene}
            position={[0, 0, 0]}
            scale={5}
            position-y={-1}
          />
        </mesh>
      </SeeThru>
      <mesh>
        <primitive
          object={model2.scene}
          position={[1.5, 0, 0]}
          scale={5}
          position-y={-1}
        />
      </mesh>
      <SeeThru
        texture={"/img/HyraxCake.jpg"}
        position-x={1.5}
        rotation-y={-Math.PI / 8}
      >
        {/* statue */}
        <mesh>
          <primitive
            object={model2.scene}
            position={[1.5, 0, 0]}
            scale={5}
            position-y={-1}
          />
        </mesh>
      </SeeThru>
    </>
  );
};

const SeeThru = ({ children, texture, ...props }) => {
  const map = useTexture(texture);

  return (
    <group {...props}>
      <Text
        font="/fonts/Roboto-Regular.ttf"
        fontSize={0.3}
        position={[0, -1.3, 0.051]}
        color="indigo"
      >
        Chumbo Wumbo Wee!
      </Text>
      <RoundedBox args={[3, 4, 0.1]}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={1} />
          <Environment preset="sunset" />

          <mesh>
            <sphereGeometry args={[3, 32, 32]} />
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
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 90 }}>
      <Art />
    </Canvas>
  );
};

export default ArtGallery;

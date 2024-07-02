import React, { useRef, useState } from "react";
import "./comingsoon.css";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import { OrbitControls, Text, MeshReflectorMaterial } from "@react-three/drei";
import { DoubleSide } from "three";

const Pedestal = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <cylinderGeometry args={size} />
      <meshStandardMaterial color={"lightblue"} />
    </mesh>
  );
};

const Plane = ({ position, size, color }) => {
  return (
    <mesh position={position} rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={size} />
      {/* <meshStandardMaterial color="violet" side={DoubleSide} /> */}
      <MeshReflectorMaterial
        blur={[0, 0]} // Blur ground reflections (width, height), 0 skips blur
        mixBlur={1} // How much blur mixes with surface roughness (default = 1)
        mixStrength={2} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={256} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0.8} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        distortion={1} // Amount of distortion based on the distortionMap texture
        debug={0}
        reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
      />
    </mesh>
  );
};

const Ring = ({ position, size }) => {
  return (
    <mesh position={position}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
};

function RotatingText() {
  const textRef = useRef();
  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.008;
    }
  });

  return (
    <Text
      ref={textRef}
      position={[0, 6, 0]}
      color={0xfff000}
      scale={2}
      lineHeight={0.62}
    >
      COMING SOON
    </Text>
  );
}

const ComingSoon = () => {
  return (
    <Canvas style={{ background: "black" }} camera={{ position: [0, 7, 17] }}>
      <RotatingText />
      <directionalLight position={[2, 10, 2]} intensity={0.8} />
      <ambientLight intensity={0.1} />
      {/* Remember that shapes originate at the center from their position */}
      <Pedestal id={"base"} position={[0, 0, 0]} size={[2, 2, 5, 20]} />
      <Pedestal id={"top"} position={[0, 3.5, 0]} size={[4, 2, 2, 20]} />
      <Ring position={[0, 0, 1.9]} size={[1, 0.2, 15, 15]} />
      <Plane position={[0, -2.5, 0]} size={[20, 15]} />
      <OrbitControls makeDefault={true} enableZoom={false} />
    </Canvas>
  );
};

export default ComingSoon;

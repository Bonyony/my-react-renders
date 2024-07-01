import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Environment } from "@react-three/drei";

const TextDemo = () => {
  return (
    <Canvas>
      <Environment files={"public/img/cannon_4k.hdr"} background />
      <Text font="public/fonts/Roboto-Regular.ttf">FRANK{"\n"}FRANCIONE</Text>
      <directionalLight position={[2, 10, 2]} intensity={0.8} />
      <ambientLight intensity={1} />
      <OrbitControls makeDefault={true} enableZoom={false} />
    </Canvas>
  );
};

export default TextDemo;

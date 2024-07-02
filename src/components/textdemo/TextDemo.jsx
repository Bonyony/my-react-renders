import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Environment,
  Text3D,
  Center,
} from "@react-three/drei";

const TextDemo = () => {
  return (
    <Canvas>
      <Environment files={"public/img/cannon_4k.hdr"} background />
      {/* <Text font="public/fonts/Roboto-Regular.ttf">FRANK{"\n"}FRANCIONE</Text> */}
      <Center>
        <Text3D
          font={"public/fonts/Roboto_Bold.json"}
          lineHeight={0.62}
          bevelEnabled={true}
          bevelThickness={0.2}
          bevelSize={0.05}
          bevelSegments={3}
        >
          FRANK{"\n"}FRANCIONE
          <meshNormalMaterial />
        </Text3D>
      </Center>
      <directionalLight position={[2, 10, 2]} intensity={0.8} />
      <ambientLight intensity={1} />
      <OrbitControls makeDefault={true} enablePan={false} />
    </Canvas>
  );
};

export default TextDemo;

import { Model } from "../../public/Kindred";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";

const Avatar: NextPage = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], near: 0.01, far: 100, rotation: [0, 0, 0] }} // Adjust rotation to face the front
      style={{
        position: "absolute",
        top: 130,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <OrbitControls enableZoom={true} autoRotate={true} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 1, 1]} />
      <Model />
    </Canvas>
  );
};

export default Avatar;

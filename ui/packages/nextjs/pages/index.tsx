import Link from "next/link";
import { Model } from "../public/Syndra";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { NextPage } from "next";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <MetaHeader />
      <div className="text-xl pt-6">Welcome back, Saida</div>
      <div>
        <Canvas
          camera={{ position: [0, 0, 5], near: 0.01, far: 100, rotation: [0, 0, 0], fov: 50 }}
          className="mx-auto my-2"
          style={{
            width: "100vw",
            height: "100vh",
            marginTop: "-70px",
            marginBottom: "-210px",
          }}
        >
          <OrbitControls enableZoom={false} autoRotate={true} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
          <ambientLight intensity={1} />
          <directionalLight position={[0, 1, 1]} />
          <Model scale={[1, 1, 1]} />
        </Canvas>
      </div>
      <div className="buttons z-10 flex flex-col items-center" style={{ marginTop: "10px" }}>
        <div className="flex flex-row gap-6">
          <Link href="/swap" passHref>
            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
              Swap
            </button>
          </Link>{" "}
          <Link href="/portfolio" passHref>
            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">

              Portfolio
            </button>
          </Link>{" "}
          <Link href="/nfts" passHref>
            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
              NFTs
            </button>
          </Link>{" "}
          <Link href="/friendSelector" passHref>
            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
              Friends
            </button>
          </Link>{" "}
        </div>
        <div className="flex flex-row justify-center gap-6">
          <div className="button-center"></div>
        </div>
      </div>

      {/* <div className="flex flex-col items-center mt-2">
        <p>Get started by editing</p>
        <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
          packages/nextjs/pages/index.tsx
        </code>
        <p>Edit your smart contract</p>
        <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
          YourContract.sol
        </code>{" "}
        in{" "}
        <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
          packages/hardhat/contracts
        </code>
      </div> */}
      {/* <div className="bg-base-300 w-full mt-10 p-8">
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <BugAntIcon className="h-8 w-8 fill-secondary" />
            <p>
              Tinker with your smart contract using the{" "}
              <Link href="/debug" passHref className="link">
                Debug Contract
              </Link>{" "}
              tab.
            </p>
          </div>
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
            <p>
              Explore your local transactions with the{" "}
              <Link href="/blockexplorer" passHref className="link">
                Block Explorer
              </Link>{" "}
              tab.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;

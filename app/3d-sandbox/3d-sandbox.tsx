// @ts-nocheck
'use client';

/*
  * Import Styling Notes *
  # Imports should be separated into 5 categories in the following order.
    - 3rd party: Anything that comes from a library external to this app.
    - Internal functions/data: Any helper functions or data that is written in this app.
    - Components: Any React components written in this app.
    - Animations: Any animation functions written in this app.
    - Styles: CSS imports written in this app.
*/

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useGLTF,
  PerspectiveCamera,
} from '@react-three/drei';
import { spawn } from 'child_process';

export const ThreeDSandbox = () => {
  return (
    <div className="flex flex-col justify-between h-[100vh] p-10">
      <section className="grid gap-[2rem] grid-cols-[.5fr_.5fr] h-full ml-5">
        <div className="flex flex-col items-start justify-center w-full h-full gap-[1rem]">
          <h2 className="head-1">Create Your Avatar</h2>
          <h3 className="head-2 text-slate-500">
            Curabitur consectetur feugiat mi
          </h3>
          <p className="w-2/3 par-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            enim exercitationem excepturi officiis odio quasi maiores, quas sed
            iste corrupti illo dolores cupiditate dicta, maxime sequi soluta
            dignissimos ut modus.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <AvatarCanvas />
        </div>
      </section>
      <ClassNav />
    </div>
  );
};

function Avatar() {
  const engineer = useGLTF(`./avatars/doctor/scene.gltf`);

  if (engineer) {
    engineer.scene.position.y -= 15; // Adjust the value to slide down by the desired distance
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <ambientLight intensity={0.2} />
      <primitive object={engineer.scene} scale={13} />
    </mesh>
  );
}

function AvatarCanvas() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [20, 3, 10],
        fov: 25,
        fov: 50,
        rotation: [0, 50, 0],
        // zoom: 12,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={null}>
        <Avatar />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

function ClassNav() {
  const [active, setActive] = useState(-1);

  function handleMouseEnter(idx) {
    setActive(idx);
  }
  function handleMouseLeave() {
    setActive(-1);
  }

  return (
    <nav className="w-full justify-self-end">
      <ul className="w-full grid grid-cols-5 gap-[5px]">
        {['Systems Engineer ', 'Industrial Chemist ', 'Data Scientist ','Statistical Analyst '].map(
          (job, idx) => {
            const showDetail = active === idx;

            return (
              <li
                key={idx}
                className="relative flex items-center justify-between w-full h-full px-5 py-2 uppercase border cursor-pointer border-slate-200 text-slate-200 hover:border-0 hover:bg-white hover:text-black link-1 group"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                {showDetail && (
                  <span className="absolute top-0 w-full h-full bg-white left-[-.5px] translate-y-[-100%] px-5 py-5 par-2 border-b-[1px] border-[black]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </span>
                )}
                <span className='w-1/2'>{job}</span>
                <span className="hover:text-[deeppink] group-hover:-rotate-90">
                  ⫸
                </span>
              </li>
            );
          }
        )}
        <li className="w-full h-full border border-[deeppink] text-[deeppink] p-5 uppercase flex items-center justify-between cursor-pointer hover:bg-[deeppink] hover:text-[black] group">
          <span className="link-1">
            Create Your <br /> Avatar
          </span>
          <span className="text-2xl group-hover:rotate-90">⨝</span>
        </li>
      </ul>
    </nav>
  );
}
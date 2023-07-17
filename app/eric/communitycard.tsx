// @ts-nocheck
import React from 'react';
import Link from 'next/link';

/*
  # below isthe grid/cass vbased component sampler using tailwind
  # I went with a 1280 cause its kind of a default know res 720p
  > 720px is about the right height, but we'll be using relative units 
  > such as "dvh" for the most part. This way we can be certain that our
  > views will fit appropriately within the device viewport.
  > Note that on a typical 16/9 screen, the browser menu/taskbar consume 
  > about 12% of the vertical space available.
  # I'm assuming its okay make these comments in general our code?
  > Lol again, please and thank you!
*/


const EricCommunitySection = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {/* 
        // ^ The width here is governed by the layout that contains all pages. 
        // ^ Use "w-full" here instead.
      */}
      <div className="grid grid-cols-2 grid-rows-4 gap-1 w-1280 h-720">
        {/* 
          // ^ Also use w-full here. 
          // ^ As mentioned, h-720px looks good, but relative units will protect us better. 
        */}
        <div className="flex flex-col col-span-2 row-span-2 p-4 bg-white justify-center-top items-left sm:col-span-2 md:col-span-1 ">
          {/* 
            // ^ This is more of a design issue, but outline-black is not visible 
            // ^ against the BG. See figma comments for more on this.
          */}
          <h1 className="mb-4 text-4xl font-bold text-dark font-body">
            Get Involved In The Nerrative Community
          </h1>
          <p className="text-left text-md text-dark font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex flex-col justify-center p-4 bg-white items-left">
          <h2 className="mb-4 text-2xl font-bold text-dark font-body">
            Join A Collective
          </h2>
          <p className="text-sm text-left text-dark font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex flex-col items-center row-span-2 p-4 justify-center-top bg-darkgrey">
          <h2 className="mb-4 text-4xl font-bold text-dark font-body">
            Nerrative Community Forums
          </h2>
          <p className="text-center text-md text-dark font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <p>
              <br />
            </p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-darkgrey">
          <h2 className="mb-4 text-2xl font-bold text-dark font-body">
            Topic Forums
          </h2>
          <p className="text-sm text-center text-dark font-body">
            <Link href="/whereever">Learn More</Link>
          </p>
        </div>

        {/*  Using the tailwind brand accent color  */}

        <div className="flex flex-col items-center justify-center p-4 bg-brandAccent">
          <h2 className="mb-4 text-4xl font-bold text-dark font-display">
            Class Forum
          </h2>
          <p className="text-sm text-center text-dark font-body">
            <Link href="/whereever">Learn More</Link>
          </p>
        </div>

        {/*  Create a class to allow the hoover transition effect w/ pulse  here  */}

        <div
          class={`flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 opacity-70 animate-pulse transition duration-2 ease-in-out hover:opacity-100`}
        >
          <h2 className="mb-4 text-4xl font-bold text-white font-body">
            {/* 
            // ^ Why is there mb here? It only pushes this off center. 
            */}
            <Link href="/whereever">[ New Arrivals | Join Us ]</Link>
          </h2>
          <div className="text-lg text-center text-white font-body">
            {/* White space / */}
          </div>
          {/* 
            // ^ I don't understand the purpose of this.
            */}
        </div>
      </div>
    </div>
  );
};

export default EricCommunitySection;

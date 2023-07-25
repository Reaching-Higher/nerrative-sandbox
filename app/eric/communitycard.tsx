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
    <div className="flex items-center justify-center w-full uppercase">
      {/* 
        // ^ The width here is governed by the layout that contains all pages. 
        // ^ Use "w-full" here instead.
      */}
      <div className="grid w-full grid-cols-5 grid-rows-4 gap-1 ">
        {/* 
          // ^ Also use w-full here. 
          // ^ As mentioned, h-720px looks good, but relative units will protect us better. 
        */}
        <div className="flex flex-col col-span-3 row-span-2 p-4 bg-white border-2 border-solid justify-center-top items-left sm:col-span-2 md:col-span-3 border-dark">
          {/* 
            // ^ This is more of a design issue, but outline-black is not visible 
            // ^ against the BG. See figma comments for more on this.
          */}
          <h1 className="mb-4 text-6xl col-span-2 max-w-[80%] text-dark font-body">
            Get Involved In The Nerrative Community
          </h1>
          <p className="text-left text-3xl text-dark max-w-[80%] font-body">
        
            {/* So like here I tried to use the same color in the WF 
            for the text and from my view, the text kept disappearing 
            so It seem slike the silver is too light on top of the white
            I'm not sure whats going going  here 
            So I ended up using the dark, instead.
            */}

            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col justify-center col-span-2 p-4 bg-white border-2 border-solid items-left border-dark">
          <h2 className="mb-4 text-4xl text-dark font-body">
            Nerrative Community Forums
          </h2>
          <p className="text-left text-md text-dark max-w-[70%] font-body normal-case">
          Nunc augue augue, efficitur vel ipsum eget, imperdiet hendrerit tellus. 
          <p className="text-xl text-left text-dark font-body">
            <br /> <Link href="/whereever">View all &ensp; →</Link> 
            </p>

          </p>
        </div>

        <div class={`flex flex-col col-span-2 row-span-1 items-left justify-left p-4  text-dark hover:text-white bg-darkgrey hover:bg-dark`}>
          <h2 className="mb-4 text-4xl font-body">
            New Arrivals 
           <p className="text-xl text-left font-body">
                 <br /> <Link href="/whereever">Learn More &nbsp; →</Link> 
          </p>
          </h2> 

        </div>

        <div class={`flex flex-col col-span-3 row-span-2 items-left  p-4 justify-left-top sm:col-span-2 md:col-span-3 text-dark hover:text-white bg-darkgrey hover:bg-dark`}>
          <h2 className="mb-4 text-4xl font-body">
            Join A Collective
          </h2>
           <p className="text-lg text-left normal-case font-body">
               Create or join a collective group with other <br />
               Nerrative members and forge your path together.
          </p>
            <p className="text-xl text-left font-body">
            <br /> <Link href="/whereever">Learn More &nbsp; →</Link> 
          </p>

        </div>

        <div class={`flex flex-col col-span-2 row-span-1 items-left justify-left p-4  text-dark hover:text-white bg-darkgrey hover:bg-dark`}>
          <h2 className="text-4xl font-body">
            Topic Forums
            </h2>  
            <p className="text-xl text-left font-body">
           <br /> <Link href="/whereever">Learn More &nbsp; →</Link>
          </p>
              
      
        </div>

        {/*  Hover effect  */}
      
        <div class={`flex flex-col col-span-2  items-left justify-left p-4  text-dark hover:text-white bg-darkgrey hover:bg-dark`}>
          <h2 class={`mb-4 text-4xl font-body`}>
            Class Forum
          </h2>
          <p class={`text-xl text-left font-body`}>
            <Link href="/whereever">Learn More  &nbsp; →</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EricCommunitySection;

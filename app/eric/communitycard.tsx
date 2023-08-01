'use client';

import { useState, useEffect } from 'react';
import { NextPage } from 'next';
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

// Created the Interface to define types
interface CommunityCardItem {
  title: string;
  blurb?: string;
  link?: string;
  buttonText?: string;
}

//Fetching data here from the API using async

const EricCommunitySection: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/community'); // Fetch data from the API route
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-between w-full uppercase">
      <div className="grid grid-cols-[.6fr_.4fr] gap-1 w-full">
        {/* Left Column of Card using 60% width */}
        {/*Sliced mapped array into two  & reworked cards to map out array*/}

        <div className="grid grid-cols-1 grid-rows-2 gap-1">
          <div className="flex flex-col col-span-3 row-span-1 p-4 bg-white justify-center-top items-left sm:col-span-3 md:col-span-3 border-solid border-1 border-dark">
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

          {data.slice(0, 1).map((item, index) => (
            <div
              key={index}
              className={`flex flex-col col-span-3 row-span-2 p-4 justify-between-top items-left sm:col-span-3 md:col-span-3 text-dark hover:text-white bg-darkgrey hover:bg-dark border-solid border-1 border-dark`}
            >
              {/* Replace using jsx style sheet  `custom-item-style` with desired class names, if needed (optional) */}
              <h2 className="mb-4 text-4xl font-body">{item.title}</h2>
              {item.blurb && (
                <p className="text-xl text-left font-body">{item.blurb}</p>
              )}
              {item.link && (
                <p className="text-xl text-left font-body">
                  <br /> <Link href={item.link}>{item.buttonText}</Link>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column (40% width) */}

        <div className="grid grid-cols-[.6fr_.4fr] grid-rows-1 gap-1">
          {data.slice(1, 6).map((item, index) => (
            <div
              key={index}
              className={`flex flex-col col-span-3 row-span-2 p-4 justify-center-top items-left sm:col-span-2 md:col-span-3 text-dark hover:text-white bg-darkgrey  hover:bg-dark border-solid border-1 border-dark`}
            >
              {/* Replace using jsx style sheet  `custom-item-style` with desired class names, if needed (optional) */}

              <h2 className="mb-4 text-4xl font-body">{item.title}</h2>
              {item.blurb && (
                <p className="text-xl text-left font-body">{item.blurb}</p>
              )}
              {item.link && (
                <p className="text-xl text-left font-body">
                  <br /> <Link href={item.link}>{item.buttonText}</Link>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EricCommunitySection;

'use client';

import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';


interface ICommunityCardItem {
  title: string;
  blurb?: string;
  link?: string;
  buttonText?: string;
}


const EricCommunitySection: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/community-eric');
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
        <div className="grid grid-cols-1 grid-rows-2 gap-1">
          <div className="flex flex-col col-span-3 row-span-1 p-4 bg-white border-solid justify-center-top items-left sm:col-span-3 md:col-span-3 border-1 border-dark">
            <h1 className="mb-4 text-6xl col-span-2 max-w-[80%] text-dark font-body">
              Get Involved In The Nerrative Community
            </h1>
            <p className="text-left text-3xl text-dark max-w-[80%] font-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {data.slice(0, 1).map((item: ICommunityCardItem, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col col-span-3 row-span-2 p-4 justify-between-top items-left sm:col-span-3 md:col-span-3 text-dark hover:text-white bg-darkgrey hover:bg-dark border-solid border-1 border-dark`}
              >
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
            );
          })}
        </div>


        <div className="grid grid-cols-[.6fr_.4fr] grid-rows-1 gap-1">
          {data.slice(1, 6).map((item: ICommunityCardItem, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col col-span-3 row-span-2 p-4 justify-center-top items-left sm:col-span-2 md:col-span-3 text-dark hover:text-white bg-darkgrey  hover:bg-dark border-solid border-1 border-dark`}
              >
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EricCommunitySection;

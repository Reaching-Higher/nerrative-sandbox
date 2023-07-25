import React from 'react';

const SiamCommunitySection = () => {
  return (
    <section className="w-full flex items-center justify-center font-body text-light">
      <div className="w-5/6 h-4/5 grid grid-flow-col grid-rows-4 grid-cols-3 gap-1.5">
        <div className="row-span-2 col-span-2 bg-accent bg-opacity-30 p-4">
          <h1 className="head-1">Get involved in the Nerrative Community</h1>
          <h2 className="head-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
        <div className="row-span-2 col-span-2 bg-brandAccent bg-opacity-30 p-4 hover:bg-opacity-40">
          <h1 className="head-2">Join a collective</h1>
          <p className="par-1 mb-4">
            Create or join a collective group with other Nerrative members and
            forge your path together.
          </p>
          <a href="##" className="link-1 uppercase">
            Learn More <span className="ml-3">&rarr;</span>
          </a>
        </div>
        <div className="bg-darkgrey bg-opacity-30 p-4 hover:bg-opacity-40">
          <h1 className="head-3 mb-2">Nerrative community forums</h1>
          <a href="##" className="link-1 uppercase">
            Learn More <span className="ml-3">&rarr;</span>
          </a>
        </div>
        <div className="bg-darkgrey bg-opacity-20 p-4 hover:bg-opacity-30">
          <h1 className="text-[24px] uppercase mb-2">New Arrivals</h1>
          <a href="##" className="link-1 uppercase">
            Learn More <span className="ml-3">&rarr;</span>
          </a>
        </div>
        <div className="bg-darkgrey bg-opacity-10 p-4 hover:bg-opacity-20">
          <h1 className="text-[24px] uppercase mb-2">Topic forums</h1>
          <a href="##" className="link-1 uppercase">
            Learn More <span className="ml-3">&rarr;</span>
          </a>
        </div>
        <div className="bg-darkgrey bg-opacity-5 p-4 hover:bg-opacity-10">
          <h1 className="text-[24px] uppercase mb-2">Class Forums</h1>
          <a href="##" className="link-1 uppercase">
            Learn More <span className="ml-3">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SiamCommunitySection;

import Link from 'next/link';
import React from 'react';


// Define your interface
interface ILinkCard {
  title: string,
  blurb?: string, // ? Denotes an optional property
  buttonText: string,
  link: string,
  classes?: string
}

/*
  # Note that we need to define this component as async in order 
  # to perform a fetch request inside it.
*/
const JamesCommunitySection = async () => {
  /*
    # In Next 13.4 all components run on server instead of client 
    # unless 'use client' is written at the top of the file.
    # This means that we can fetch directly inside the component without
    # the need for a useEffect.
    # In the production app we would move the below to a utils folder
    # so that it can be shared throughout the app.
  */
  // const data: Response = await fetch('http://localhost:3000/api/community-james');
  // const cards: ILinkCard[] = await data.json();
  // console.log('cards: ', cards);

  return (
    <section className="flex-container font-body">
      <div className="page-section grid grid-flow-col grid-cols-[.6fr_.4fr] grid-rows-[.4fr_.2fr_.2fr_.2fr] gap-[10px]">
        <TitleCard />
        {/* {cards.map((card: ILinkCard) => (
          <LinkCard card={card} />
        ))} */}
      </div>
    </section>
  );
};

function TitleCard() {
  return (
    <span className="row-span-2 flex flex-col gap-[25px] px-8 py-4 bg-dark/50">
      <h1 className="head-1">Get involved in the Nerrative community</h1>
      <h2 className="head-2 text-[grey]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </span>
  );
}

/*
  # React components receive an argument 'props', from which we typically
  # destructure individual props by name. When we add types to this, we
  # need to mirror that destructuring in the type assignment as below.
*/
function LinkCard({ card }: { card: ILinkCard }) {

  const { title, blurb, buttonText, link, classes } = card ?? '';

  return (
    <Link
      href={link}
      className={`px-8 py-4 uppercase flex flex-col items-start justify-between bg-brand bg-opacity-25 cursor-pointer hover:!bg-light hover:text-[black] ${classes}`}
    >
      <div className="flex flex-col items-start gap-[15px] ">
        <h4 className="head-3">{title}</h4>
        {blurb && <p className="par-1">{blurb}</p>}
      </div>
      <button className="uppercase font-bold tracking-[5px] hover:text-accent">
        {buttonText}
      </button>
    </Link>
  );
}

export default JamesCommunitySection;

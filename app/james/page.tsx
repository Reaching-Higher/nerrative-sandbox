import Link from 'next/link';
import React from 'react';


interface ILinkCard {
  title: string,
  blurb?: string, // ? Denotes an optional property
  buttonText: string,
  link: string,
  classes?: string
}

const getCardData = async () => {
  const data: Response = await fetch(`${process.env.BASE_URL}api/community-james`);
  const cards: any = await data.json();

  return cards;
};

const JamesCommunitySection = async () => {
  const cards: ILinkCard[] = await getCardData()

  return (
    <section className="flex-container font-body">
      <div className="page-section grid grid-flow-col grid-cols-[.6fr_.4fr] grid-rows-[.4fr_.2fr_.2fr_.2fr] gap-[10px]">
        <TitleCard />
        {cards.map((card: ILinkCard) => (
          <LinkCard card={card} />
        ))}
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

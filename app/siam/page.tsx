import React from 'react';
import Link from 'next/link';

export interface ICommunityDataTypes {
  title: string;
  blurb?: string;
  buttonText: string;
  link?: string;
  classes?: string;
  titleClasses?: string;
  paraClasses?: string;
}

async function getCommunityData() {
  const res = await fetch('http://localhost:3000/api/community')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function SiamCommunitySection() {
  const communityData = await getCommunityData()
  return (
    <section className="w-full flex items-center justify-center font-body text-light">
      <div className="w-5/6 h-4/5 grid grid-flow-col grid-rows-4 grid-cols-3 gap-1.5">
        {communityData.map((data: ICommunityDataTypes) => (
          <CommunityCard data={data}/>
        ))}
      </div>
    </section>
  );
};

function CommunityCard({ data }: { data : ICommunityDataTypes }) {
  const { title, blurb, buttonText, link, classes, titleClasses, paraClasses } = data ?? '';
  return (
    // somehow the gap class doesn't work here. I know I can figure it out by doing a little bit reasearch but I think that you might already know the reason. I was tryng to add some space between the elements according to you phase I feedback of not to use margins.
    <div key={title} className={classes}>
      <h2 className={titleClasses}>{title}</h2>
      {blurb && <p className={paraClasses}>{blurb}</p>}
      {link && buttonText && <Link href={link} className="link-1 uppercase">{buttonText}</Link>}
    </div>
  )
}

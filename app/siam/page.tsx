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
  idx: number;
}

async function getCommunityData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}community-eric`);
    if (!res.ok) {
      throw new Error('Error fetching community data.');
    }
    return res.json();
  } catch (error) {
    console.error('error: ', error);
  }
}

export default async function SiamCommunitySection() {
  // const communityData = await getCommunityData();
  return (
    <section className="flex items-center justify-center w-full font-body text-light">
      <div className="w-5/6 h-4/5 grid grid-flow-col grid-rows-4 grid-cols-3 gap-1.5">
        {/* {communityData.map((data: ICommunityDataTypes, idx: number) => (
          <CommunityCard data={{ ...data, idx }} />
        ))} */}
      </div>
    </section>
  );
}

function CommunityCard({ data }: { data: ICommunityDataTypes }) {
  const {
    title,
    buttonText,
    link,
    classes = '',
    blurb = '',
    titleClasses = '',
    paraClasses = '',
    idx,
  } = data;

  const bgOpacity =
  idx >= 3 ? `bg-opacity-${(5 - idx) * 10 + 20}` : 'bg-opacity-50';

  return (
    <div
      key={title}
      className={`flex flex-col gap-1 p-4 bg-brandAccent ${classes} ${bgOpacity} hover:bg-opacity-60`}
    >
      <h2 className={`head-4 uppercase ${titleClasses}`}>{title}</h2>
      {blurb && <p className={`par-1 ${paraClasses}`}>{blurb}</p>}
      {link && buttonText && (
        <Link href={link} className="uppercase link-1">
          {buttonText}
        </Link>
      )}
    </div>
  );
}

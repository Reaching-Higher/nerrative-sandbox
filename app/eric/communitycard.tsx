
import Link from 'next/link';

interface ICommunityCardItem {
  title: string;
  blurb?: string;
  link?: string;
  buttonText?: string;
  classes?: string;
}


//temporarily fix to render the flex  - change this to point to the correct API

const localaddress = 'http://localhost:3000';


const getCardData = async () => {
  const data: Response = await fetch(
    `${localaddress}/api/community-eric` //Also, updated API to reflect column pages structure. 
  );
  const cards: any = await data.json();

  return cards;
};

const EricCommunitySection = async () => {
  const cardData: ICommunityCardItem[] = await getCardData();

  return (
    <div className="flex items-center justify-between w-full uppercase">
      <div className="page-section grid grid-flow-col grid-cols-[.6fr_.4fr] grid-rows-[.4fr_.2fr_.2fr_.4fr] gap-1 ">
       
          <div className="flex flex-col gap-4 row-span-2 p-4 bg-white border-solid border-1 border-dark">
            <h1 className="text-6xl col-span-2 max-w-[80%] text-dark font-body">
              Get Involved In The Nerrative Community
            </h1>
            <p className="text-left text-3xl text-dark max-w-[80%] font-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {cardData.map((item: ICommunityCardItem, index:number) => {
            return (
              <div
                key={index}
                className={`flex flex-col  p-4 justify-between-top  text-dark hover:text-white bg-darkgrey hover:bg-dark border-solid border-1 border-dark ${item.classes}` } 
                
              >
                <h2 className="text-4xl font-body">{item.title}</h2>
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
  );
};

export default EricCommunitySection;

import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center pt-[10rem]">
      <HeroText />
      <HeroBGImage />
    </section>
  );
}

function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center gap-[65px]">
      <h1 className="flex items-center justify-center">
        <img src="/assets/nerrative-hero-text.png" />
      </h1>
      <div className="flex flex-col items-center justify-center gap-[25px]">
        <h2 className="uppercase text-[54px] font-body tracking-[11.5px]">
          <span>Tell your story as you</span> <span>live it!</span>
        </h2>
        <div className="flex items-center justify-between gap-[25px]">
          <button className="text-[24px] px-8 py-2 uppercase tracking-[11.5px] text-[#EE4669] rounded-md hover:bg-[#EE4669] hover:text-black">
            <Link href="/eric">Eric Project</Link>
          </button>
          <button className="text-[24px] px-8 py-2 uppercase tracking-[11.5px] text-white rounded-md hover:bg-[white] hover:text-black">
            <Link href="/siam">Siam Project</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroBGImage() {
  return (
    <img
      className="absolute h-full top-0 right-0 z-[-1]"
      src="/backgrounds/hero-bg.png"
      alt="cyberpunk girl in a futuristic city"
    />
  );
}

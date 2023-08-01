import React from 'react';

interface ITextBlock {
  heading: string;
  subheading?: string;
  paragraph: string[];
  button: string;
  action?: () => void;
  path?: string;
}

export const TextBlock = ({
  heading,
  subheading,
  paragraph,
  button,
  action,
}: ITextBlock) => {
  return (
    <div className="flex flex-col gap-[25px]">
      <h2 className="text-white uppercase head-1 font-display">{heading}</h2>
      <Divider color="var(--color-accent)" />
      <div className="pl-10 flex flex-col gap-[25px]">
        {subheading && <h3 className='head-3'>{subheading}</h3>}
        {paragraph &&
          paragraph.map((par, idx) => {
            return (
              <p className="text-white font-body par-1" key={idx}>
                {par}
              </p>
            );
          })}
        <ActionButton text={button} color="var(--color-accent)" />
      </div>
    </div>
  );
};

function Divider({ color = 'var(--color-accent)' }: { color: string }) {
  return (
    <span className="w-full">
      <svg
        width="100%"
        height="4"
        viewBox="0 0 680 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="680" y1="1" y2="1" stroke="#EE4669" strokeWidth="2" />
        <path
          d="M0 0H78.336V0C78.336 2.20914 76.5451 4 74.336 4H4C1.79086 4 0 2.20914 0 0V0Z"
          fill="#EE4669"
        />
      </svg>
    </span>
  );
}

interface IActionButton {
  text: string;
  color: string;
}

function ActionButton({ text, color }: IActionButton) {
  return (
    <button className="button-1 flex items-center justify-start gap-[25px]">
      <span className={`pb-2 font-display text-[#EE4669]`}>{text}</span>
      <span>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M13.5 11L18 15.5L13.5 20"
            // stroke='var(--color-accent)'
            stroke="#EE4669"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29 15C29 22.732 22.732 29 15 29C7.26801 29 1 22.732 1 15C1 7.26801 7.26801 1 15 1"
            // stroke='var(--color-accent)'
            stroke="#EE4669"
          />
        </svg>
      </span>
    </button>
  );
}

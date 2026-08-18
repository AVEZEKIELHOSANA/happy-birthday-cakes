'use client';

import { MICROCOPY } from '../../types/content';

const MENU_ITEMS = [
  { key: 'letters', icon: '✉️', title: 'Birthday Letters', teaser: 'Handwritten notes just for you.' },
  { key: 'memories', icon: '📸', title: 'Life Memories', teaser: 'A walk through your story.' },
  { key: 'mystery', icon: '🗺️', title: 'Mystery Places', teaser: 'Real world adventures await.' },
  { key: 'games', icon: '🎲', title: 'Birthday Games', teaser: 'Laugh, play, and enjoy.' },
  { key: 'dates', icon: '🎟️', title: 'Plan Your Day', teaser: 'Choose your perfect celebration.' },
];

interface MenuViewProps {
  visited: Set<string>;
  onNavigate: (view: string) => void;
}

export const MenuView = ({ visited, onNavigate }: MenuViewProps) => {
  return (
    <div className="flex-1 flex flex-col p-8 md:p-10">
      <div className="mb-2">
        <div className="eyebrow">🎂 Birthday Menu</div>
        <h2 className="text-2xl">Explore your special day.</h2>
        <p className="text-ink-soft text-sm mt-1 max-w-md">
          Each card holds something unique—memories, surprises, and a little bit of magic just for you.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className="bg-paper-soft border border-champagne-soft rounded-2xl p-4 pb-4 text-left cursor-pointer relative min-h-[126px] flex flex-col justify-end transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:scale-105 hover:shadow-soft hover:border-rose
              [&:nth-child(5n+1)]:rotate-[-1.5deg] [&:nth-child(5n+2)]:rotate-[1.5deg] [&:nth-child(5n+3)]:rotate-[-0.5deg] [&:nth-child(5n+4)]:rotate-[1deg] [&:nth-child(5n+5)]:rotate-[-1.2deg] hover:rotate-0"
          >
            {visited.has(item.key) && (
              <span className="absolute top-2.5 right-2.5 text-xs font-bold text-rose-deep bg-highlight rounded-full px-1.5 py-0.5">
                ✓
              </span>
            )}
            <span className="text-[1.6rem] mb-2" aria-hidden="true">{item.icon}</span>
            <span className="font-display font-semibold text-base mb-0.5">{item.title}</span>
            <span className="text-[0.78rem] text-ink-soft leading-tight">{item.teaser}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
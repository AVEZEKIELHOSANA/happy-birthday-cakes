'use client';

interface HeartsViewProps {
  hearts: {
    title: string;
    desc: string;
    messages: string[];
  };
  openHearts: Set<number>;
  onOpen: (index: number) => void;
  onBack: () => void;
}

export const HeartsView = ({ hearts, openHearts, onOpen, onBack }: HeartsViewProps) => {
  return (
    <div className="flex-1 flex flex-col p-8 md:p-10">
      <div className="mb-3">
        <button onClick={onBack} className="btn-ghost btn-small">
          ← Back to Games
        </button>
        <div className="eyebrow">🥠 {hearts.title}</div>
        <h2 className="text-2xl">{hearts.desc}</h2>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 -mx-1 px-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {hearts.messages.map((msg, index) => {
            const isOpen = openHearts.has(index);
            return (
              <button
                key={index}
                onClick={() => !isOpen && onOpen(index)}
                disabled={isOpen}
                className={`aspect-square rounded-2xl border-2 p-3 text-center transition-all duration-300 flex items-center justify-center ${
                  isOpen
                    ? 'border-rose bg-highlight/30 cursor-default'
                    : 'border-champagne-soft bg-paper-soft hover:border-rose hover:scale-105'
                }`}
              >
                {isOpen ? (
                  <span className="text-xs font-medium text-ink/80 leading-relaxed">{msg}</span>
                ) : (
                  <span className="text-3xl">🥠</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
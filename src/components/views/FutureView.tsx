'use client';

interface FutureViewProps {
  pairs: {
    label: string;
    a: string;
    b: string;
    respA: string;
    respB: string;
  }[];
  answers: Record<number, 'a' | 'b'>;
  onAnswer: (pairIndex: number, choice: 'a' | 'b') => void;
  onBack: () => void;
}

export const FutureView = ({ pairs, answers, onAnswer, onBack }: FutureViewProps) => {
  return (
    <div className="flex-1 flex flex-col p-8 md:p-10">
      <div className="mb-3">
        <button onClick={onBack} className="btn-ghost btn-small">
          ← Back to Games
        </button>
        <div className="eyebrow">🤯 Would You Rather?</div>
        <h2 className="text-2xl">Difficult decisions you never knew you'd face.</h2>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 -mx-1 px-1">
        {pairs.map((pair, pairIndex) => {
          const picked = answers[pairIndex];
          return (
            <div key={pairIndex} className="mb-4 bg-paper-soft border border-champagne-soft rounded-2xl p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-ink-soft/60 mb-2">
                {pair.label}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onAnswer(pairIndex, 'a')}
                  className={`flex-1 px-4 py-3 rounded-xl border-2 text-center font-semibold transition-all duration-200 ${
                    picked === 'a'
                      ? 'border-rose bg-rose text-white'
                      : 'border-champagne-soft bg-paper hover:border-rose/50'
                  }`}
                >
                  {pair.a}
                </button>
                <span className="text-center text-ink-soft/40 text-sm self-center hidden sm:block">vs</span>
                <button
                  onClick={() => onAnswer(pairIndex, 'b')}
                  className={`flex-1 px-4 py-3 rounded-xl border-2 text-center font-semibold transition-all duration-200 ${
                    picked === 'b'
                      ? 'border-rose bg-rose text-white'
                      : 'border-champagne-soft bg-paper hover:border-rose/50'
                  }`}
                >
                  {pair.b}
                </button>
              </div>
              {picked && (
                <div className="mt-3 bg-highlight/50 rounded-xl p-3 border border-rose/10 animate-fade-in">
                  <p className="text-sm text-ink/80 italic">
                    💬 {picked === 'a' ? pair.respA : pair.respB}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
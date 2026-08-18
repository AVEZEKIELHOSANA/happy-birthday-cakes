'use client';

import Image from 'next/image';
import { Mystery } from '../../content/mysteryplaces';
import { MICROCOPY } from '../../types/content';

interface MysteryViewProps {
  mysteries: Mystery[];
  mysteryState: Record<string, 'hidden' | 'clued' | 'revealed'>;
  onClue: (id: string) => void;
  onReveal: (id: string) => void;
  onBack: () => void;
}

export const MysteryView = ({ mysteries, mysteryState, onClue, onReveal, onBack }: MysteryViewProps) => {
  return (
    <div className="flex-1 flex flex-col p-8 md:p-10">
      <div className="mb-3">
        <button onClick={onBack} className="btn-ghost btn-small">
          ← Back to Menu
        </button>
        <div className="eyebrow">🗺️ Mystery Places</div>
        <h2 className="text-2xl">Real world adventures waiting for you.</h2>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 -mx-1 px-1">
        <div className="grid grid-cols-1 gap-4">
          {mysteries.map((mystery) => {
            const status = mysteryState[mystery.id] || 'hidden';
            return (
              <div
                key={mystery.id}
                className="bg-paper-soft border border-champagne-soft rounded-2xl p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {status === 'revealed' ? '🔓' : '🔒'}
                  </span>
                  <div className="flex-1">
                    <h3 className={`font-display font-semibold text-lg ${status === 'hidden' ? 'blur-[5px] select-none transition-all duration-700' : ''}`}>
                      {mystery.title}
                    </h3>

                    {status === 'clued' && (
                      <p className="text-ink-soft italic text-sm mt-1">💡 {mystery.clue}</p>
                    )}

                    {status === 'revealed' && (
                      <div className="mt-3 space-y-3">
                        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-champagne-soft">
                          <Image
                            src={mystery.image}
                            alt={mystery.reveal}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="font-semibold text-rose-deep text-base">
                          📍 {mystery.reveal}
                        </p>
                        <p className="text-sm text-ink-soft bg-highlight/30 rounded-lg p-3 border border-rose/10">
                          ✨ {mystery.funFact}
                        </p>
                      </div>
                    )}

                    <div className="mt-3">
                      {status === 'hidden' && (
                        <button onClick={() => onClue(mystery.id)} className="btn-ghost btn-small">
                          Give me a clue
                        </button>
                      )}
                      {status === 'clued' && (
                        <button onClick={() => onReveal(mystery.id)} className="btn-small">
                          Reveal the Mystery
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
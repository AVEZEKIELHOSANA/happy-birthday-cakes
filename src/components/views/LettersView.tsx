'use client';

import { useJourneyStore } from "../../stores/JourneyStore";
import { letters } from "../../content/letters";

export const LettersView = () => {
  const goto = useJourneyStore((s) => s.goto);
  const setLetterIndex = useJourneyStore((s) => s.setLetterIndex);

  // Safety check - if letters is undefined or not an array
  if (!letters || !Array.isArray(letters) || letters.length === 0) {
    return (
      <div className="flex-1 flex flex-col p-8 md:p-10">
        <div className="mb-4">
          <button onClick={() => goto('menu')} className="btn-ghost btn-small mb-3">
            ← Back to Menu
          </button>
          <div className="eyebrow">✉️ Birthday Letters</div>
          <h2 className="text-2xl">A few words, handwritten for you.</h2>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-ink-soft">No letters available yet. 💌</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col p-8 md:p-10">
      <div className="mb-4">
        <button onClick={() => goto('menu')} className="btn-ghost btn-small mb-3">
          ← Back to Menu
        </button>
        <div className="eyebrow">✉️ Birthday Letters</div>
        <h2 className="text-2xl">A few words, handwritten for you.</h2>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 -mx-1 px-1">
        <div className="flex flex-col gap-5">
          {letters.map((letter, idx) => (
            <button
              key={letter.id || idx}
              onClick={() => {
                setLetterIndex(idx);
                goto('letterReader');
              }}
              className="relative group bg-paper-soft border border-champagne-soft rounded-2xl p-5 cursor-pointer text-left transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md hover:border-rose"
              style={{
                background: `repeating-linear-gradient(
                  transparent,
                  transparent 28px,
                  rgba(193, 112, 124, 0.06) 28px,
                  rgba(193, 112, 124, 0.06) 29px
                )`,
                backgroundSize: '100% 29px',
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">📜</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-hand text-xl font-semibold text-ink group-hover:text-rose-deep transition-colors">
                    {letter.title || 'Untitled'}
                  </h3>
                  <p className="text-sm text-ink-soft/80 mt-1 font-hand opacity-90">
                    {letter.teaser || 'A letter for you'}
                  </p>
                  <span className="text-xs text-ink-soft/50 mt-1 block font-body">
                    Click to open ✦
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
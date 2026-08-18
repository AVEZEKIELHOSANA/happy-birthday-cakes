'use client';

import { useJourneyStore } from "../../stores/JourneyStore";
import { letters } from "../../content/letters";

export const LetterReaderView = () => {
  const goto = useJourneyStore((s) => s.goto);
  const letterIndex = useJourneyStore((s) => s.letterIndex);
  const setLetterIndex = useJourneyStore((s) => s.setLetterIndex);

  // Safety checks
  if (!letters || !Array.isArray(letters) || letters.length === 0) {
    return (
      <div className="flex-1 flex flex-col p-8 md:p-10">
        <button onClick={() => goto('letters')} className="btn-ghost btn-small mb-4">
          ← Back to Letters
        </button>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-ink-soft">No letter found. 💌</p>
        </div>
      </div>
    );
  }

  const letter = letters[letterIndex];
  if (!letter) {
    return (
      <div className="flex-1 flex flex-col p-8 md:p-10">
        <button onClick={() => goto('letters')} className="btn-ghost btn-small mb-4">
          ← Back to Letters
        </button>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-ink-soft">Letter not found. 💌</p>
        </div>
      </div>
    );
  }

  const isLast = letterIndex === letters.length - 1;

  return (
    <div className="flex-1 flex flex-col p-8 md:p-10">
      <div className="mb-3">
        <button onClick={() => goto('letters')} className="btn-ghost btn-small">
          ← Back to Letters
        </button>
      </div>

      <div
        className="flex-1 rounded-2xl border border-champagne-soft bg-paper-soft p-6 flex flex-col"
        style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 28px,
            rgba(193, 112, 124, 0.04) 28px,
            rgba(193, 112, 124, 0.04) 29px
          )`,
          backgroundSize: '100% 29px',
        }}
      >
        <h3 className="font-hand text-2xl font-semibold text-ink border-b border-champagne/20 pb-3 mb-4">
          {letter.title}
        </h3>
        <div className="font-hand text-base leading-[1.8] text-ink/90 whitespace-pre-line flex-1">
          {letter.body}
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <button 
          onClick={() => {
            if (isLast) {
              goto('letters');
            } else {
              setLetterIndex(letterIndex + 1);
            }
          }} 
          className="btn"
        >
          {isLast ? 'Back to Letters' : 'Next Letter →'}
        </button>
        <button onClick={() => goto('letters')} className="btn-ghost">
          All Letters
        </button>
      </div>
    </div>
  );
};
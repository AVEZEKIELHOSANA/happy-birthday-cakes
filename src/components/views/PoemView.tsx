"use client";

import { BackLink } from "../../components/ui/BackLink";
import { Button } from "../../components/ui/Button";
import { poem } from "../../content/poem";
import { useJourneyStore } from "../../stores/JourneyStore";

export function PoemView() {
  const revealed = useJourneyStore((s) => s.poemRevealed);
  const revealPoemLine = useJourneyStore((s) => s.revealPoemLine);
  const goto = useJourneyStore((s) => s.goto);

  const allLines = poem.stanzas.flatMap((s) => s.lines);
  const shown = Math.min(revealed, allLines.length);
  const done = shown >= allLines.length;

  let cursor = 0;

  return (
    <div className="animate-view-in flex flex-1 flex-col">
      <BackLink />
      <div className="flex flex-1 flex-col items-center justify-center px-1 py-2 text-center">
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-wine">
          {poem.title}
        </div>

        {poem.stanzas.map((stanza, si) => (
          <div key={si} className="mb-5">
            {stanza.lines.map((line) => {
              const isShown = cursor < shown;
              cursor += 1;
              return (
                <div
                  key={line}
                  className="max-w-[34ch] font-display text-lg leading-relaxed text-ink transition-all duration-500"
                  style={{ opacity: isShown ? 1 : 0, transform: isShown ? "translateY(0)" : "translateY(6px)" }}
                >
                  {line}
                </div>
              );
            })}
          </div>
        ))}

        {done ? (
          <>
            <div className="mt-1 font-hand text-2xl text-wine">— {poem.signature}</div>
            <div className="mt-1.5 text-2xl text-wine" style={{ animation: "gentlePulse 1800ms ease-in-out infinite" }} aria-hidden="true">
              ✦
            </div>
            <Button className="mt-5" onClick={() => goto("menu")}>
              Back to the Menu
            </Button>
          </>
        ) : (
          <Button className="mt-3" onClick={revealPoemLine}>
            Reveal the next line
          </Button>
        )}
      </div>
    </div>
  );
}
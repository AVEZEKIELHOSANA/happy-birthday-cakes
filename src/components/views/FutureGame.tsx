"use client";

import clsx from "clsx";
import { BackLink } from "../../components/ui/BackLink";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { futureTitle, futureDesc, futurePairs } from "../../content/games";
import { useJourneyStore } from "../../stores/JourneyStore";

export function FutureGame() {
  const futureAnswers = useJourneyStore((s) => s.futureAnswers);
  const chooseFuture = useJourneyStore((s) => s.chooseFuture);

  return (
    <div className="animate-view-in flex flex-1 flex-col">
      <BackLink label="Back to Games" to="games" />
      <SectionHeader eyebrow={futureTitle} title={futureDesc} className="mb-4" />
      <div className="flex-1 space-y-4 overflow-y-auto pr-1">
        {futurePairs.map((p, pi) => {
          const picked = futureAnswers[pi];
          return (
            <div key={pi}>
              <div className="mb-2 text-xs font-bold uppercase tracking-wide text-ink-soft">{p.label}</div>
              <div className="flex gap-2.5">
                <button
                  onClick={() => chooseFuture(pi, "a")}
                  className={clsx(
                    "flex-1 rounded-xl border-[1.5px] px-3 py-3.5 text-center text-sm font-bold transition-colors",
                    picked === "a" ? "border-wine bg-wine text-cream" : "border-line bg-paper-soft text-ink hover:border-wine"
                  )}
                >
                  {p.a}
                </button>
                <button
                  onClick={() => chooseFuture(pi, "b")}
                  className={clsx(
                    "flex-1 rounded-xl border-[1.5px] px-3 py-3.5 text-center text-sm font-bold transition-colors",
                    picked === "b" ? "border-wine bg-wine text-cream" : "border-line bg-paper-soft text-ink hover:border-wine"
                  )}
                >
                  {p.b}
                </button>
              </div>
              {picked && (
                <div className="mt-2 animate-view-in text-center text-sm text-wine">
                  {picked === "a" ? p.responseA : p.responseB}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
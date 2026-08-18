"use client";

import { BackLink } from "../ui/BackLink";
import { SectionHeader } from "../ui/SectionHeader";
import { balloonsTitle, balloonsDesc, balloonMessages } from "../../content/games";
import { useJourneyStore } from "../../stores/JourneyStore";

export function BalloonsGame() {
  const balloonsOpen = useJourneyStore((s) => s.balloonsOpen);
  const popBalloon = useJourneyStore((s) => s.popBalloon);

  return (
    <div className="animate-view-in flex flex-1 flex-col">
      <BackLink label="Back to Games" to="games" />
      <SectionHeader eyebrow={balloonsTitle} title={balloonsDesc} className="mb-4" />
      <div className="grid flex-1 grid-cols-3 gap-3 overflow-y-auto pr-1">
        {balloonMessages.map((msg, i) => {
          const open = balloonsOpen.has(i);
          return (
            <button
              key={i}
              onClick={() => popBalloon(i)}
              disabled={open}
              aria-label={open ? msg.text : "Pop a balloon"}
              className={
                open
                  ? "flex aspect-square items-center justify-center rounded-2xl border-[1.5px] border-wine bg-highlight p-2 text-center text-[0.72rem] font-semibold text-wine"
                  : "flex aspect-square items-center justify-center rounded-2xl border-[1.5px] border-line bg-paper-soft text-2xl transition-transform duration-300 hover:scale-105 hover:border-wine"
              }
            >
              {open ? msg.text : "🎈"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
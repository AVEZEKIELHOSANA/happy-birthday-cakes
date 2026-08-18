"use client";

import { useJourneyStore } from "../../stores/JourneyStore";

export function HomeButton() {
  const view = useJourneyStore((s) => s.view);
  const goto = useJourneyStore((s) => s.goto);

  if (view === "welcome") return null;

  return (
    <button
      onClick={() => goto("menu")}
      aria-label="Back to the birthday menu"
      className="fixed top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-lg text-wine shadow-[0_8px_20px_-8px_rgba(27,37,64,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 hover:bg-highlight"
    >
      🎂
    </button>
  );
}
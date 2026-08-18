"use client";

import { useJourneyStore } from "../../stores/JourneyStore";
import type { ViewKey, GameKey } from "../../types/content";

interface BackLinkProps {
  label?: string;
  to?: ViewKey;
  onClick?: () => void;
}

export function BackLink({ label = "Back to the Menu", to = "menu", onClick }: BackLinkProps) {
  const goto = useJourneyStore((s) => s.goto);

  return (
    <div className="mb-3.5">
      <button
        onClick={() => (onClick ? onClick() : goto(to))}
        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border-[1.5px] border-line bg-transparent px-4 py-2 text-sm font-bold text-wine transition-colors hover:bg-highlight hover:border-highlight"
      >
        ← {label}
      </button>
    </div>
  );
}
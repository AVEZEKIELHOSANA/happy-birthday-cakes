"use client";

import clsx from "clsx";
import { siteConfig } from "../../config/site.config";
import { microcopy } from "../../content/microcopy";
import { useJourneyStore } from "../../stores/JourneyStore";
import type { ViewKey } from "../../types/content";

interface MenuItem {
  key: ViewKey;
  icon: string;
  title: string;
  teaser: string;
}

const ITEMS: MenuItem[] = [
  { key: "letters", icon: "💌", title: "Letters", teaser: "A few things I needed to say." },
  { key: "poem", icon: "🕊️", title: "Poem", teaser: "A quiet moment, just for you." },
  { key: "memories", icon: "📷", title: "Memories", teaser: "A look back at your story so far." },
  { key: "mystery", icon: "🗝️", title: "Mystery Places", teaser: "Locked away — for now." },
  { key: "games", icon: "🎲", title: "Games", teaser: "Playful, not competitive. Promise." },
  { key: "dates", icon: "🎟️", title: "Our Date", teaser: "Pick our next adventure." },
];

const rotations = ["-rotate-[2.2deg]", "rotate-[1.6deg]", "-rotate-1", "rotate-2", "-rotate-[1.8deg]", "rotate-[1.2deg]"];

export function BirthdayMenuView() {
  const goto = useJourneyStore((s) => s.goto);
  const visited = useJourneyStore((s) => s.visited);

  return (
    <div className="animate-view-in">
      <div className="mb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-wine">
        The Birthday Menu
      </div>
      <h2 className="mb-2 text-2xl text-ink">Open whatever calls to you.</h2>
      <p className="mb-5 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink-soft">
        One more year of {siteConfig.partnerName}, and I wanted to make it feel like something —
        not just another Tuesday with cake. Everything below is for you: letters, a poem, a walk
        through your own story, a few places I have my eye on, some genuinely unserious games,
        and a chance to pick what we actually do next.
      </p>
      <p className="mb-5 text-sm text-ink-soft">✦ {microcopy.menuNote}</p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {ITEMS.map((item, i) => (
          <button
            key={item.key}
            onClick={() => goto(item.key)}
            aria-label={`Open ${item.title}`}
            className={clsx(
              "relative flex min-h-[126px] flex-col justify-end rounded-2xl border border-line bg-paper-soft px-3.5 pb-4 pt-4 text-left shadow-[0_10px_18px_-14px_rgba(27,37,64,0.25)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:rotate-0 hover:border-wine hover:shadow-[0_18px_26px_-14px_rgba(27,37,64,0.3)]",
              rotations[i % rotations.length]
            )}
          >
            {visited.has(item.key) && (
              <span className="absolute right-2.5 top-2.5 rounded-full bg-highlight px-2 py-0.5 text-[0.65rem] font-bold text-wine">
                opened
              </span>
            )}
            <span className="mb-2 text-2xl" aria-hidden="true">{item.icon}</span>
            <span className="mb-0.5 block font-display text-[1.02rem] font-semibold text-ink">
              {item.title}
            </span>
            <span className="block text-xs leading-snug text-ink-soft">{item.teaser}</span>
          </button>
        ))}
      </div>
    </div>
  );
}